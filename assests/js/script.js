/* ==========================================================================
   INDEX/PROJECTS UI ENHANCEMENTS - MAIN SCRIPT
   Author: Devansh Gupta
   Purpose: Global JS for Mobile Nav, Theme Toggle, Scroll, and UX Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. INITIALIZE THEME (DARK MODE BY DEFAULT)
    initTheme();

    // 2. MOBILE NAVIGATION TOGGLE
    initMobileMenu();

    // 3. SMOOTH SCROLL FOR ANCHOR LINKS
    initSmoothScroll();

    // 4. SET ACTIVE NAVIGATION LINK BASED ON CURRENT PAGE
    initActivePageLink();

    // 5. INTERSECTION OBSERVER FOR CARD ANIMATIONS
    initCardAnimations();

    // 6. DYNAMIC YEAR FOR COPYRIGHT
    initCopyrightYear();

    // 7. PRESERVE SCROLL POSITION ACROSS PAGE RELOADS
    initScrollPreserve();

    // 8. PREVENT FORM SCROLL JUMP (AJAX STYLE FORMS)
    initFormDefaults();

    // 9. BUTTON CLICK DEFAULTS
    initButtonDefaults();
});

/* ==========================================================================
   THEME MANAGEMENT (DARK MODE DEFAULT WITH LOCALSTORAGE)
   ========================================================================== */
function initTheme() {
    const html = document.documentElement;
    const storedTheme = localStorage.getItem('theme');
    
    // Default to dark mode if not specified
    if (storedTheme === 'light') {
        html.classList.remove('dark');
        html.classList.add('light');
        updateToggleIcons('light');
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        updateToggleIcons('dark');
    }

    // Attach click listeners to all theme toggle buttons
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    themeToggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                html.classList.add('light');
                localStorage.setItem('theme', 'light');
                updateToggleIcons('light');
            } else {
                html.classList.remove('light');
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                updateToggleIcons('dark');
            }
        });
    });
}

function updateToggleIcons(theme) {
    const icons = document.querySelectorAll('.theme-toggle-btn i');
    icons.forEach(icon => {
        if (theme === 'light') {
            icon.className = 'fas fa-moon'; // Show moon icon in light mode
        } else {
            icon.className = 'fas fa-sun';  // Show sun icon in dark mode
        }
    });
}

/* ==========================================================================
   MOBILE NAVIGATION TOGGLE
   ========================================================================== */
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

/* ==========================================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ========================================================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(targetId);

            if (target) {
                const headerOffset = 80; // For fixed navbar
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }

            // Close mobile nav on anchor click
            const mobileMenu = document.getElementById('mobile-menu');
            const navMenu = document.getElementById('nav-menu');
            if (navMenu && mobileMenu) {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });
}

/* ==========================================================================
   SET ACTIVE NAVIGATION LINK BASED ON PAGE
   ========================================================================== */
function initActivePageLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (
            href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')
        ) {
            link.classList.add('active');
        }
    });
}

/* ==========================================================================
   INTERSECTION OBSERVER FOR CARD ANIMATIONS
   ========================================================================== */
function initCardAnimations() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
    };

    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.blog-card, .project-card, .info-card, .mini-section, .overview-card, .cert-item, .contact-method, .download-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(el);
    });
}

/* ==========================================================================
   DYNAMIC YEAR FOR COPYRIGHT
   ========================================================================== */
function initCopyrightYear() {
    const copyright = document.querySelector('.footer-text p, .footer-text');
    if (copyright) {
        const currentYear = new Date().getFullYear();
        copyright.innerHTML = `&copy; ${currentYear} Devansh Gupta. All rights reserved.`;
    }
}

/* ==========================================================================
   PRESERVE SCROLL POSITION ACROSS PAGE RELOADS
   ========================================================================== */
function initScrollPreserve() {
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    });
    
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
}

/* ==========================================================================
   PREVENT FORM SCROLL JUMP
   ========================================================================== */
function initFormDefaults() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submission intercepted');
            return false;
        });
    });
}

/* ==========================================================================
   BUTTON CLICK DEFAULTS
   ========================================================================== */
function initButtonDefaults() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.type || this.type === 'button') {
                e.preventDefault();
            }
        });
    });
}
