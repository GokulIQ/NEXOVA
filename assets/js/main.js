/**
 * Main Interactions & Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll State
    const header = document.querySelector('.clay-header');
    
    const checkScroll = () => {
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    if(header) {
        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Check on init
    }

    // Counter Animations
    const counters = document.querySelectorAll('.counter-value');
    
    const runCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
            current += increment;
            if(current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    };
    
    // Intersection Observer for Counters
    const observerOptions = {
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

});


// Auth State Check for Header
document.addEventListener('DOMContentLoaded', () => {
    const storedUserStr = localStorage.getItem('agency_user');
    const isLoggedIn = localStorage.getItem('agency_logged_in') === 'true';

    if (isLoggedIn && storedUserStr) {
        const user = JSON.parse(storedUserStr);
        const headerActionContainer = document.querySelector('.navbar .d-flex.align-items-center.order-lg-3') || document.querySelector('.navbar .d-flex.align-items-center');
        
        if (headerActionContainer) {
            // Remove Auth Links completely to avoid Bootstrap !important override
            const unauthLinks = headerActionContainer.querySelectorAll('.unauth-link');
            unauthLinks.forEach(link => link.remove());
            
            // Also ensure Let's talk is removed if it somehow still exists
            const letsTalkBtn = headerActionContainer.querySelector('a.clay-btn-primary');
            if (letsTalkBtn) {
                letsTalkBtn.remove();
            }

            // Create Profile Dropdown for Desktop
            const profileDropdown = document.createElement('div');
            profileDropdown.className = 'nav-item dropdown d-none d-lg-block ms-2';
            const firstName = user.name ? user.name.split(' ')[0] : 'User';
            profileDropdown.innerHTML = `
                <a class="nav-link dropdown-toggle clay-btn d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="padding: 0.5rem 1rem;">
                    <i class="bi bi-person-circle fs-5"></i>
                    <span class="fw-bold">${firstName}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" style="position: absolute; right: 0;">
                    <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i> Profile</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i> Settings</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#" id="logoutBtn"><i class="bi bi-box-arrow-right me-2"></i> Logout</a></li>
                </ul>
            `;
            headerActionContainer.appendChild(profileDropdown);

            // Handle Logout for Desktop
            document.getElementById('logoutBtn').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('agency_logged_in', 'false');
                window.location.reload();
            });
        }
        
        // Handle Mobile Offcanvas
        const mobileAuthContainer = document.getElementById('mobileAuthContainer');
        if (mobileAuthContainer) {
            const firstName = user.name ? user.name.split(' ')[0] : 'User';
            mobileAuthContainer.innerHTML = `
                <div class="p-3 mb-3" style="background: var(--clr-bg); border-radius: var(--clay-radius-sm);">
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <i class="bi bi-person-circle fs-2 text-primary"></i>
                        <span class="fw-bold fs-5">${firstName}</span>
                    </div>
                    
                    <!-- <a href="#" class="clay-btn w-100 mb-2"><i class="bi bi-person me-2"></i> Profile</a> -->
                    <!-- <a href="#" class="clay-btn w-100 mb-2"><i class="bi bi-gear me-2"></i> Settings</a> -->
                    <a href="#" class="clay-btn w-100 text-danger" id="mobileLogoutBtn"><i class="bi bi-box-arrow-right me-2"></i> Logout</a>
                </div>
            `;
            
            document.getElementById('mobileLogoutBtn').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('agency_logged_in', 'false');
                window.location.reload();
            });
        }
    }
});

