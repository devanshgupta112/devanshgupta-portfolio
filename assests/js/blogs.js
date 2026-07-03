// Blogs Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // 1. Newsletter Form Handler
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = e.target.querySelector('.newsletter-input');
            const email = emailInput ? emailInput.value : '';
            alert(`Thank you for subscribing with email: ${email}`);
            e.target.reset();
        });
    }

    // 2. Blog Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (filterBtns.length > 0 && blogCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-category');
                
                blogCards.forEach(card => {
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
            });
        });
    }

    // 3. Blogs Scroll Container Controls
    const blogsScrollContainer = document.getElementById('blogsScrollContainer');
    const blogsScrollProgress = document.getElementById('blogsScrollProgress');
    const blogsScrollUp = document.getElementById('blogsScrollUp');
    const blogsScrollDown = document.getElementById('blogsScrollDown');

    if (blogsScrollContainer && blogsScrollProgress) {
        // Update scroll progress bar
        function updateScrollProgress() {
            const scrollTop = blogsScrollContainer.scrollTop;
            const scrollHeight = blogsScrollContainer.scrollHeight - blogsScrollContainer.clientHeight;
            const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            blogsScrollProgress.style.width = scrollPercentage + '%';
        }

        blogsScrollContainer.addEventListener('scroll', updateScrollProgress);
        // Initial call to set progress bar
        updateScrollProgress();

        // Scroll controls buttons
        if (blogsScrollUp) {
            blogsScrollUp.addEventListener('click', () => {
                blogsScrollContainer.scrollBy({
                    top: -200,
                    behavior: 'smooth'
                });
            });
        }

        if (blogsScrollDown) {
            blogsScrollDown.addEventListener('click', () => {
                blogsScrollContainer.scrollBy({
                    top: 200,
                    behavior: 'smooth'
                });
            });
        }
    }
});