document.addEventListener('DOMContentLoaded', () => {
    // =============================================
    // --- TRANSLATIONS (i18n) ---
    // =============================================
    const translations = {
        vi: {
            nav_brand: 'TRANG LÊ',
            nav_about: 'Giới thiệu',
            nav_education: 'Học vấn',
            nav_skills: 'Kỹ năng',
            nav_experience: 'Kinh nghiệm',
            nav_projects: 'Dự án',
            nav_certificates: 'Chứng chỉ',
            nav_contact: 'Liên hệ',
            hero_greeting: 'Xin chào, tôi là <br class="hidden md:block"> <span class="text-gray-900">Lê Hà Trang!</span>',
            hero_desc: 'Sinh viên năm cuối ngành Phân tích dữ liệu Kinh Doanh <br> Trường Quốc Tế - Đại Học Quốc Gia Hà Nội',
            hero_connect: 'Kết nối với tôi',
            about_title: 'Tôi là ai?',
            about_text: 'Em là một người ham học hỏi, có trách nhiệm trong công việc và đam mê phân tích dữ liệu đặc biệt trong lĩnh vực tài chính. Qua các môn học trên trường, em có kinh nghiệm phân tích báo cáo tài chính và có nền tảng tốt về phân tích và trực quan hóa dữ liệu, xây dựng mô hình học máy, học sâu. Em luôn sẵn sàng đón nhận những thử thách mới để không ngừng trau dồi chuyên môn thông qua các dự án thực tế và đóng góp trực tiếp vào sự phát triển của doanh nghiệp.',
            education_title: 'Học vấn',
            edu_school: 'Trường Quốc Tế - ĐHQG Hà Nội (VNU-IS)',
            edu_major_label: 'Ngành học',
            edu_major: 'Phân tích dữ liệu kinh doanh',
            edu_gpa_label: 'GPA tích lũy',
            skills_title: 'Kỹ năng',
            experience_title: 'Kinh nghiệm làm việc',
            projects_title: 'Dự án',
            certs_title: 'Chứng chỉ & Giải thưởng',
            footer_copy: '© 2026 Lê Hà Trang. Mọi quyền được bảo lưu.'
        },
        en: {
            nav_brand: 'TRANG LE',
            nav_about: 'About',
            nav_education: 'Education',
            nav_skills: 'Skills',
            nav_experience: 'Experience',
            nav_projects: 'Projects',
            nav_certificates: 'Certificates',
            nav_contact: 'Contact',
            hero_greeting: 'Hello, I\'m <br class="hidden md:block"> <span class="text-gray-900">Le Ha Trang!</span>',
            hero_desc: 'Final-year student in Business Data Analytics <br> VNU International School - Vietnam National University, Hanoi',
            hero_connect: 'Connect with me',
            about_title: 'About Me',
            about_text: 'I am an eager learner, responsible in my work, and passionate about data analytics, especially in the field of finance. Through my university coursework, I have gained experience in financial statement analysis and built a strong foundation in data analysis & visualization, machine learning, and deep learning. I am always ready to embrace new challenges to continuously improve my expertise through hands-on projects and contribute directly to business growth.',
            education_title: 'Education',
            edu_school: 'VNU International School (VNU-IS)',
            edu_major_label: 'Major',
            edu_major: 'Business Data Analytics',
            edu_gpa_label: 'Cumulative GPA',
            skills_title: 'Skills',
            experience_title: 'Work Experience',
            projects_title: 'Projects',
            certs_title: 'Certificates & Awards',
            footer_copy: '© 2026 Le Ha Trang. All rights reserved.'
        }
    };

    // --- i18n Functions ---
    function setLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        // Update elements with data-i18n (textContent)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        // Update elements with data-i18n-html (innerHTML — for tags like <br>, <span>)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Update toggle button labels
        const nextLang = lang === 'vi' ? 'EN' : 'VI';
        const langLabel = document.getElementById('lang-label');
        const langLabelMobile = document.getElementById('lang-label-mobile');
        if (langLabel) langLabel.textContent = nextLang;
        if (langLabelMobile) langLabelMobile.textContent = nextLang;

        // Save to localStorage
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);
    }

    function toggleLanguage() {
        const current = localStorage.getItem('lang') || 'vi';
        const next = current === 'vi' ? 'en' : 'vi';
        setLanguage(next);
    }

    // Attach toggle events
    const langToggle = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);

    // Restore saved language on load
    const savedLang = localStorage.getItem('lang') || 'vi';
    if (savedLang !== 'vi') {
        setLanguage(savedLang);
    }

    // =============================================
    // --- NAVBAR & MOBILE MENU ---
    // =============================================
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('py-6');
            navbar.classList.add('py-4');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('py-6');
            navbar.classList.remove('py-4');
        }
    });

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('menu-open');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('menu-open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // =============================================
    // --- RENDER PROJECTS ---
    // =============================================
    const projectsContainer = document.getElementById('projects-container');
    if (portfolioData && portfolioData.projects) {
        portfolioData.projects.forEach(project => {
            const card = document.createElement('a');
            card.href = project.link;
            card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full border border-gray-100 group block';
            
            card.innerHTML = `
                <div class="h-48 overflow-hidden relative">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.src='https://via.placeholder.com/400x300?text=Project'">
                    <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors">${project.title}</h3>
                    <p class="text-sm font-semibold text-primary mt-auto"><i class="fa-solid fa-screwdriver-wrench mr-2"></i>${project.tools}</p>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    // =============================================
    // --- RENDER CERTIFICATES (with cert-image) ---
    // =============================================
    const certsContainer = document.getElementById('certificates-container');
    if (portfolioData && portfolioData.certificates) {
        portfolioData.certificates.forEach(cert => {
            const item = document.createElement('div');
            item.className = 'bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 font-medium text-dark hover:shadow-md hover:border-primary transition relative group cursor-pointer';
            item.innerHTML = `
                <i class="fa-solid fa-certificate text-primary mr-2"></i> ${cert.name}
                <!-- Hover Image Popup -->
                <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-white p-2 rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 pointer-events-none transform scale-95 group-hover:scale-100">
                    <img src="${cert.img}" class="cert-image w-full h-auto rounded cursor-pointer hover:scale-105 transition-transform duration-300" alt="${cert.name}" onerror="this.parentElement.style.display='none'" data-full-src="${cert.img}">
                    <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 rotate-45"></div>
                </div>
            `;
            // Also make the entire cert item clickable for lightbox
            item.addEventListener('click', () => {
                if (cert.img) {
                    openLightbox(cert.img);
                }
            });
            certsContainer.appendChild(item);
        });
    }

    // =============================================
    // --- RENDER AWARDS (FISHBONE TIMELINE) ---
    // =============================================
    const awardsContainer = document.getElementById('awards-container');
    if (portfolioData && portfolioData.awards) {
        portfolioData.awards.forEach((award, index) => {
            const isLeft = index % 2 === 0;
            const item = document.createElement('div');
            item.className = `timeline-item relative flex w-full md:w-1/2 md:inline-flex ${isLeft ? 'md:pr-12 md:justify-end' : 'md:pl-12 md:self-end md:ml-auto'} pl-12 mb-8 md:mb-0 group cursor-pointer`;
            
            // Layout HTML
            item.innerHTML = `
                <!-- Dot -->
                <div class="absolute w-4 h-4 rounded-full bg-white border-4 border-secondary group-hover:border-primary transition-colors top-1 z-10 ${isLeft ? 'left-[18px] -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2' : 'left-[18px] -translate-x-1/2 md:left-0 md:-translate-x-1/2'}"></div>
                
                <!-- Content Box -->
                <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition w-full relative">
                    <h4 class="font-bold text-lg text-primary">${award.name}</h4>
                    ${award.time ? `<p class="text-sm text-gray-500 font-medium mt-1"><i class="fa-regular fa-calendar-days mr-1"></i> ${award.time}</p>` : ''}
                    
                    <!-- Link if exists -->
                    ${award.link ? `<a href="${award.link}" target="_blank" class="mt-2 inline-block text-[#9B8EC7] hover:underline text-sm"><i class="fa-solid fa-link"></i> Xem minh chứng</a>` : ''}

                    <!-- Hover Image Popup -->
                    ${award.img ? `
                    <div class="absolute bottom-full ${isLeft ? 'right-0 md:right-0 origin-bottom-right' : 'left-0 md:left-0 origin-bottom-left'} mb-2 w-64 bg-white p-2 rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 pointer-events-none transform scale-95 group-hover:scale-100">
                        <img src="${award.img}" class="cert-image w-full h-auto rounded cursor-pointer hover:scale-105 transition-transform duration-300" alt="${award.name}" onerror="this.style.display='none'" data-full-src="${award.img}">
                    </div>
                    ` : ''}
                </div>
            `;

            // Make award item clickable for lightbox (if it has an image)
            if (award.img) {
                item.addEventListener('click', (e) => {
                    // Don't open lightbox if clicking a link
                    if (e.target.closest('a')) return;
                    openLightbox(award.img);
                });
            }

            awardsContainer.appendChild(item);
        });
    }

    // =============================================
    // --- IMAGE LIGHTBOX (Modal) ---
    // =============================================
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function openLightbox(src) {
        if (!imageModal || !modalImage) return;
        modalImage.src = src;
        imageModal.classList.remove('hidden');
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!imageModal) return;
        imageModal.classList.add('hidden');
        document.body.style.overflow = '';
        if (modalImage) modalImage.src = '';
    }

    // Close on X button
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeLightbox();
        });
    }

    // Close when clicking outside the image (on the dark overlay)
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            // Only close if clicking the overlay itself, not the image
            if (e.target === imageModal) {
                closeLightbox();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    // Also handle standalone cert-image clicks (for images directly in DOM, not rendered by JS)
    document.addEventListener('click', (e) => {
        const certImg = e.target.closest('.cert-image');
        if (certImg) {
            e.stopPropagation();
            const src = certImg.getAttribute('data-full-src') || certImg.src;
            openLightbox(src);
        }
    });

});
