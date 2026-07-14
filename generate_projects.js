const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configure marked to use breaks and GFM to auto-link URLs
marked.use({
    gfm: true,
    breaks: true
});

const files = [
    'Analysis factors affecting supermaket sales and gross income.md',
    'Applying Machine Learning for Stock Price Forecasting and ESG Causal Analysis.md',
    'Data Information Management of an Airline.md',
    'Exploring Perceived Value in Vietnamese Tourism A BERTopic & PLS-SEM Approach.md',
    'Exploring the impact of Perceived Value in Vietnamese Tourism (ML and Smart PLS).md',
    'Financial analysis.md',
    'Unpacking UK E-commerce.md'
];

// Read template
const templatePath = path.join(__dirname, 'project-detail.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

// Read data.js to get project tools and titles
const dataJsPath = path.join(__dirname, 'data.js');
let dataJsContent = fs.readFileSync(dataJsPath, 'utf8');
const jsonString = dataJsContent.substring(dataJsContent.indexOf('projects: [') + 9, dataJsContent.indexOf('],', dataJsContent.indexOf('projects: [')) + 1);
const projects = eval(jsonString);

projects.forEach((project, index) => {
    const mdFilename = files[index];
    const projectId = index + 1;
    const outputFilename = `project-${projectId}.html`;
    const fullContentPath = path.join(__dirname, 'content', mdFilename);
    
    console.log(`Processing ${outputFilename}...`);
    
    let markdownContent = '';
    if (fs.existsSync(fullContentPath)) {
        markdownContent = fs.readFileSync(fullContentPath, 'utf8');
    } else {
        console.error(`File not found: ${fullContentPath}`);
        markdownContent = 'Nội dung không tồn tại.';
    }

    // --- PRE-PROCESSING MARKDOWN ---
    markdownContent = markdownContent.replace(/\\/g, '/');
    markdownContent = markdownContent.replace(/\.assets\/projects\//g, 'assets/projects/');
    
    const imgRegex = /(assets\/projects\/[^\n]*?\.(?:jpg|jpeg|png|gif|webp))/gi;
    markdownContent = markdownContent.replace(imgRegex, (match, p1) => {
        const cleanPath = p1.trim();
        return `<img src="${cleanPath}" alt="Minh họa dự án" class="w-full h-auto rounded-lg shadow-md my-6">`;
    });

    // Replace lingering bold ** syntax manually just in case
    markdownContent = markdownContent.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');

    // --- PARSE MARKDOWN TO HTML ---
    let htmlContent = marked.parse(markdownContent);

    // --- POST-PROCESSING HTML ---
    // Reset paragraphs
    htmlContent = htmlContent.replace(/<p>/g, '<p class="text-base font-normal text-gray-700 leading-relaxed mb-4">');
    // Headings
    htmlContent = htmlContent.replace(/<h2[^>]*>/g, '<h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">');
    htmlContent = htmlContent.replace(/<h3[^>]*>/g, '<h3 class="text-xl font-medium text-gray-800 mt-6 mb-3">');
    // Lists
    htmlContent = htmlContent.replace(/<ul>/g, '<ul class="list-disc ml-6 mb-4 space-y-2 text-gray-700">');
    htmlContent = htmlContent.replace(/<ol>/g, '<ol class="list-decimal ml-6 mb-4 space-y-2 text-gray-700">');
    // Bold
    htmlContent = htmlContent.replace(/<strong>/g, '<strong class="font-bold text-gray-900">');
    
    // Dataframes: Find <p> tags with dataframe signatures and replace them with <pre><code>
    htmlContent = htmlContent.replace(/<p[^>]*>([\s\S]*?(?:RangeIndex|Data columns|Non-Null Count|Dtype|class 'pandas\.core\.frame\.DataFrame')[\s\S]*?)<\/p>/gi, 
        '<pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-800 my-6 border border-gray-200"><code>$1</code></pre>');
        
    // Format native <pre><code> from marked
    htmlContent = htmlContent.replace(/<pre><code([^>]*)>/g, '<pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-800 my-6 border border-gray-200"><code$1>');

    // Links
    htmlContent = htmlContent.replace(/<a href="([^"]+)">/g, '<a href="$1" target="_blank" class="text-[#9B8EC7] hover:underline">');

    // Replace Title & Tools
    let projectHtml = templateHtml.replace('Điền tên dự án vào đây', project.title);
    projectHtml = projectHtml.replace('Công cụ: [Liệt kê công cụ]', `Công cụ: ${project.tools}`);

    // Replace body content exactly
    const proseStartRegex = /(<div class="font-sans">)/;
    const parts = projectHtml.split(proseStartRegex);
    
    if (parts.length >= 3) {
        const afterProseDiv = '\n            </div>\n        </div>\n    </main>';
        const mainSplit = parts[2].split(afterProseDiv);
        
        projectHtml = parts[0] + parts[1] + '\n' + htmlContent + afterProseDiv + mainSplit[1];
    } else {
        console.error('Could not find font-sans div in template');
    }

    fs.writeFileSync(path.join(__dirname, outputFilename), projectHtml);
    console.log(`Saved ${outputFilename}`);
});

console.log('All projects updated with strict typography rules!');
