(() => {
    const grid = document.getElementById('portfolio-grid');
    if (!grid || !Array.isArray(window.NEXOVA_PROJECTS)) return;

    grid.innerHTML = window.NEXOVA_PROJECTS.map((project, index) => `
        <div class="col-md-6 col-lg-4 portfolio-item" data-category="${project.categoryFilter}" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
            <div class="clay-card p-0 h-100 d-flex flex-column" style="overflow: hidden;">
                <div class="position-relative" style="border-radius: var(--clay-radius-sm) var(--clay-radius-sm) 0 0;">
                    <img src="${project.image}" alt="${project.imageAlt}" class="img-fluid w-100" style="height: 220px; object-fit: cover;">
                </div>
                <div class="p-4 d-flex flex-column flex-grow-1">
                    <div class="d-flex justify-content-between align-items-center mb-2 gap-2">
                        <span class="text-primary fw-bold small">${project.category}</span>
                        <span class="badge bg-secondary bg-opacity-10 text-primary border border-primary-subtle">${project.technology}</span>
                    </div>
                    <h4 class="mb-3 fw-bold">${project.title}</h4>
                    <p class="text-muted-clay small mb-4 flex-grow-1">${project.description}</p>
                    <a href="portfolio-details.html?id=${encodeURIComponent(project.id)}" class="clay-btn clay-btn-primary w-100 text-center">View Project Details</a>
                </div>
            </div>
        </div>`).join('');
})();
