document.addEventListener('DOMContentLoaded', () => {
    // --- NAVBAR & MOBILE MENU ---
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

    // --- RENDER PROJECTS ---
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

    // --- RENDER CERTIFICATES ---
    const certsContainer = document.getElementById('certificates-container');
    if (portfolioData && portfolioData.certificates) {
        portfolioData.certificates.forEach(cert => {
            const item = document.createElement('div');
            item.className = 'bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 font-medium text-dark hover:shadow-md hover:border-primary transition relative group cursor-pointer';
            item.innerHTML = `
                <i class="fa-solid fa-certificate text-primary mr-2"></i> ${cert.name}
                <!-- Hover Image Popup -->
                <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-white p-2 rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 pointer-events-none transform scale-95 group-hover:scale-100">
                    <img src="${cert.img}" class="w-full h-auto rounded" alt="${cert.name}" onerror="this.parentElement.style.display='none'">
                    <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 rotate-45"></div>
                </div>
            `;
            certsContainer.appendChild(item);
        });
    }

    // --- RENDER AWARDS (FISHBONE TIMELINE) ---
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
                    ${award.link ? `<a href="${award.link}" target="_blank" class="mt-2 inline-block text-[#B5BAFF] hover:underline text-sm"><i class="fa-solid fa-link"></i> Xem minh chứng</a>` : ''}

                    <!-- Hover Image Popup -->
                    ${award.img ? `
                    <div class="absolute bottom-full ${isLeft ? 'right-0 md:right-0 origin-bottom-right' : 'left-0 md:left-0 origin-bottom-left'} mb-2 w-64 bg-white p-2 rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 pointer-events-none transform scale-95 group-hover:scale-100">
                        <img src="${award.img}" class="w-full h-auto rounded" alt="${award.name}" onerror="this.style.display='none'">
                    </div>
                    ` : ''}
                </div>
            `;
            awardsContainer.appendChild(item);
        });
    }

});
