// Projects & Certifications JS Functions
document.addEventListener('DOMContentLoaded', () => {
    // 1. Projects Filtering Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsCount = document.getElementById('projects-count');
    
    if (filterBtns.length > 0 && projectCards.length > 0) {
        function updateResultsCount() {
            if (!projectsCount) return;
            const visibleCards = Array.from(projectCards).filter(c => c.style.display !== 'none').length;
            const activeFilterText = document.querySelector('.filter-btn.active').textContent.trim();
            projectsCount.textContent = `Showing ${visibleCards} of ${projectCards.length} projects (${activeFilterText})`;
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category').split(' ');
                    
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });

                // Update count after transitions
                setTimeout(updateResultsCount, 310);
            });
        });

        // Initialize projects count
        updateResultsCount();
    }

    // 2. Projects Scroll Progress (Horizontal Bar representing Vertical Scroll)
    const projectsScrollContainer = document.getElementById('projectsScrollContainer');
    const projectsScrollProgress = document.getElementById('projectsScrollProgress');
    const projectsScrollUp = document.getElementById('projectsScrollUp');
    const projectsScrollDown = document.getElementById('projectsScrollDown');

    if (projectsScrollContainer && projectsScrollProgress) {
        function updateScrollProgress() {
            const scrollTop = projectsScrollContainer.scrollTop;
            const scrollHeight = projectsScrollContainer.scrollHeight - projectsScrollContainer.clientHeight;
            const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            // FIX: Set style.width instead of height for horizontal progress bar
            projectsScrollProgress.style.width = scrollPercentage + '%';
        }

        projectsScrollContainer.addEventListener('scroll', updateScrollProgress);
        // Initial setup
        updateScrollProgress();

        if (projectsScrollUp) {
            projectsScrollUp.addEventListener('click', () => {
                projectsScrollContainer.scrollBy({
                    top: -240,
                    behavior: 'smooth'
                });
            });
        }

        if (projectsScrollDown) {
            projectsScrollDown.addEventListener('click', () => {
                projectsScrollContainer.scrollBy({
                    top: 240,
                    behavior: 'smooth'
                });
            });
        }
    }

    // 3. Certifications Scroll Progress (Horizontal Bar representing Vertical Scroll)
    const certScrollContainer = document.getElementById('certScrollContainer');
    const certScrollProgress = document.getElementById('certScrollProgress');
    const certScrollUp = document.getElementById('certScrollUp');
    const certScrollDown = document.getElementById('certScrollDown');

    if (certScrollContainer && certScrollProgress) {
        function updateCertScrollProgress() {
            const scrollTop = certScrollContainer.scrollTop;
            const scrollHeight = certScrollContainer.scrollHeight - certScrollContainer.clientHeight;
            const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            // FIX: Set style.width instead of height for horizontal progress bar
            certScrollProgress.style.width = scrollPercentage + '%';
        }

        certScrollContainer.addEventListener('scroll', updateCertScrollProgress);
        // Initial setup
        updateCertScrollProgress();

        if (certScrollUp) {
            certScrollUp.addEventListener('click', () => {
                certScrollContainer.scrollBy({
                    top: -160,
                    behavior: 'smooth'
                });
            });
        }

        if (certScrollDown) {
            certScrollDown.addEventListener('click', () => {
                certScrollContainer.scrollBy({
                    top: 160,
                    behavior: 'smooth'
                });
            });
        }
    }
});
