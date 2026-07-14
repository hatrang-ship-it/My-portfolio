import os

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Config
    content = content.replace("primary: '#a8bcfa'", "primary: '#2563eb'")
    content = content.replace("selection:text-gray-900", "selection:text-white")
    
    # Navbar & Footer colors
    content = content.replace('bg-primary text-gray-900', 'bg-primary text-white')
    content = content.replace('hover:text-gray-900 text-gray-800', 'hover:text-white text-gray-300')
    
    # Navbar links hover
    content = content.replace('hover:text-gray-600', 'hover:text-gray-300')
    
    # Mobile menu
    content = content.replace('text-gray-900 text-2xl', 'text-white text-2xl')
    content = content.replace('text-xl text-gray-900', 'text-xl text-white')
    content = content.replace('bg-primary text-gray-900 z-40', 'bg-primary z-40')
    
    # Footer specifically
    content = content.replace('text-sm text-gray-800', 'text-sm text-gray-300')

    # Project detail link hover
    content = content.replace('hover:text-gray-700 transition">\n                <i class="fa-solid fa-arrow-left', 'hover:text-gray-300 transition">\n                <i class="fa-solid fa-arrow-left')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('index.html')
update_file('project-detail.html')

# Update CSS
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()
    
css = css.replace('rgba(168, 188, 250, 0.95)', 'rgba(37, 99, 235, 0.95)')
css = css.replace('#a8bcfa', '#2563eb')
css = css.replace('background: #93c5fd', 'background: #cbd5e1') 
css = css.replace('background: #60a5fa', 'background: #94a3b8')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Done updating HTML and CSS files.')
