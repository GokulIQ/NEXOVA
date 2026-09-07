/**
 * Portfolio Filtering Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const filterBtns = document.querySelectorAll('#portfolio-filters .clay-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if(filterBtns.length > 0 && portfolioItems.length > 0) {
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active', 'clay-btn-primary'));
                btn.classList.add('active', 'clay-btn-primary');
                
                const filterValue = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.classList.remove('hide');
                        setTimeout(() => item.style.display = 'block', 0);
                    } else {
                        const categories = item.getAttribute('data-category').split(' ');
                        if (categories.includes(filterValue)) {
                            item.classList.remove('hide');
                            setTimeout(() => item.style.display = 'block', 0);
                        } else {
                            item.classList.add('hide');
                            setTimeout(() => item.style.display = 'none', 400); // Wait for transition
                        }
                    }
                });
            });
        });

        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 50
            });
        }
    }
});
