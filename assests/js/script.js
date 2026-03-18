/* ==========================================================================
   INDEX/PROJECTS UI ENHANCEMENTS - MAIN SCRIPT
   Author: Devansh Gupta
   Purpose: JS for Mobile Nav, Theme, Scroll, Active Link, Animations, UX
   ========================================================================== */

/* ==========================================================================
   1. MOBILE NAVIGATION TOGGLE
   ========================================================================== */
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const html = document.documentElement;

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

/* ==========================================================================
   2. THEME TOGGLE (LIGHT/DARK)
   ========================================================================== */


/* ==========================================================================
   3. SMOOTH SCROLL FOR ANCHOR LINKS
   ========================================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            const headerOffset = 80; // For fixed navbar
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }

        // Close mobile nav on anchor click
        if (navMenu && mobileMenu) {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

/* ==========================================================================
   4. ACTIVE NAVIGATION LINK ON SCROLL
   ========================================================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 200) {
            current = section.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ==========================================================================
   5. NAVBAR BACKGROUND ON SCROLL
   ========================================================================== */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const bg = getComputedStyle(html).getPropertyValue('--color-background');
        navbar.style.background =
            window.scrollY > 100 ? `${bg}dd` : bg;
    }
});

/* ==========================================================================
   6. INTERSECTION OBSERVER FOR CARD ANIMATIONS
   ========================================================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.blog-card, .project-card, .info-card, .mini-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ==========================================================================
   7. PRESERVE SCROLL POSITION ACROSS PAGE RELOADS
   ========================================================================== */
window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});
window.addEventListener('load', function() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});

/* ==========================================================================
   8. DYNAMIC YEAR FOR COPYRIGHT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyright =
        document.querySelector('.footer-text p, .footer-text');
    if (copyright) {
        copyright.textContent = `© ${currentYear} Devansh Gupta. All rights reserved.`;
    }
});

/* ==========================================================================
   9. ENHANCED PAGE NAVIGATION (SET ACTIVE LINK BASED ON PAGE)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
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
});

/* ==========================================================================
   10. PREVENT FORM SCROLL JUMP (AJAX STYLE FORMS)
   ========================================================================== */
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Put your AJAX/form-handling logic here
        // e.g. send form data via fetch/XHR, show success, etc.
        console.log('Form submitted');
        return false;
    });
});

/* ==========================================================================
   11. BUTTON CLICK DEFAULTS
   ========================================================================== */
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.type || this.type === 'button') {
            e.preventDefault();
        }
    });
});

/* ==========================================================================
   END OF MAIN SCRIPT
   ========================================================================== */
