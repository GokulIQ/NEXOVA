document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('services-list');
    if (!container || !Array.isArray(window.NEXOVA_SERVICES)) return;

    container.innerHTML = window.NEXOVA_SERVICES.map((service, index) => {
        const reversed = index % 2 === 1;
        const textAnimation = reversed ? 'fade-left' : 'fade-right';
        const imageAnimation = reversed ? 'fade-right' : 'fade-left';
        const imageColumn = `<div class="col-lg-6" data-aos="${imageAnimation}"><div class="service-visual"><img src="${service.image}" alt="${service.imageAlt}" loading="lazy"></div></div>`;
        const textColumn = `<div class="col-lg-6 ${reversed ? 'ps-lg-5' : 'pe-lg-5'}" data-aos="${textAnimation}">
            <span class="service-number fw-bold d-block mb-2">${service.number}</span>
            <h2 class="mb-3">${service.title}</h2>
            <p class="fs-5 mb-4">${service.description}</p>
            <ul class="service-features list-unstyled d-flex flex-column gap-2 mb-4">${service.features.map(feature => `<li><i class="bi bi-check-circle-fill text-primary me-2"></i>${feature}</li>`).join('')}</ul>
            <a href="service-details.html?service=${encodeURIComponent(service.id)}" class="clay-btn">View Service <i class="bi bi-arrow-right"></i></a>
        </div>`;
        return `<article class="row align-items-center g-4 service-row${reversed ? ' flex-lg-row-reverse' : ''}" id="${service.id}">${reversed ? textColumn + imageColumn : textColumn + imageColumn}</article>`;
    }).join('');
    if (window.AOS && typeof window.AOS.refreshHard === 'function') window.AOS.refreshHard();
});
