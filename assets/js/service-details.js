document.addEventListener('DOMContentLoaded', () => {
    const services = window.NEXOVA_SERVICES || [];
    const params = new URLSearchParams(window.location.search);
    const selectedService = services.find(service => service.id === params.get('service')) || services[0];
    if (!selectedService) return;

    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    setText('service-title', selectedService.title);
    setText('service-description', selectedService.description);
    setText('service-breadcrumb', selectedService.title);
    document.title = `${selectedService.title} | NEXOVA Services`;

    const image = document.getElementById('service-image');
    if (image) {
        image.src = selectedService.image;
        image.alt = selectedService.imageAlt;
    }

    const main = document.querySelector('main');
    const hero = main && main.querySelector('section');
    if (!main || !hero) return;

    main.querySelectorAll('section').forEach(section => {
        if (section !== hero) section.remove();
    });

    const deliverables = selectedService.deliverables || selectedService.features.map((title, index) => ({
        title,
        description: 'A focused part of the service, planned around your goals and delivered with clear review points.',
        icon: ['bi-stars', 'bi-grid', 'bi-lightning', 'bi-check2-circle'][index % 4]
    }));
    const faqs = selectedService.faqs || [];
    const accordionId = `service-faq-${selectedService.id}`;

    const details = document.createElement('section');
    details.className = 'py-5';
    details.innerHTML = `<div class="container">
        <div class="row g-4 g-xl-5 align-items-start">
            <div class="col-lg-8">
                <div class="mb-4" data-aos="fade-up">
                    <span class="section-subtitle">Service Overview</span>
                    <h2 class="fw-bold mb-3">What We Offer</h2>
                    <p class="text-muted-clay fs-5 mb-0">${selectedService.overview || selectedService.description}</p>
                </div>
                <div class="row g-3 g-md-4">
                    ${deliverables.map((item, index) => `<div class="col-sm-6" data-aos="fade-up" data-aos-delay="${(index % 2) * 80}">
                        <article class="clay-card service-feature-card h-100 p-4">
                            <i class="bi ${item.icon} fs-2 text-primary d-inline-block mb-3" aria-hidden="true"></i>
                            <h3 class="h5 fw-bold mb-2">${item.title}</h3>
                            <p class="text-muted-clay small mb-0">${item.description}</p>
                        </article>
                    </div>`).join('')}
                </div>
            </div>
            <aside class="col-lg-4" data-aos="fade-left">
                <div class="clay-card service-details-card p-4 p-xl-4">
                    <h2 class="h5 fw-bold mb-4">Service Details</h2>
                    <dl class="mb-4">
                        <div class="d-flex justify-content-between gap-3 py-3 border-bottom border-secondary-subtle"><dt class="text-muted-clay fw-normal mb-0">Timeline</dt><dd class="fw-bold text-end mb-0">${selectedService.timeline || 'Scoped to your project'}</dd></div>
                        <div class="d-flex justify-content-between gap-3 py-3 border-bottom border-secondary-subtle"><dt class="text-muted-clay fw-normal mb-0">Starting At</dt><dd class="fw-bold text-end mb-0">${selectedService.startingAt || 'Custom quote'}</dd></div>
                        <div class="d-flex justify-content-between gap-3 py-3"><dt class="text-muted-clay fw-normal mb-0">Deliverables</dt><dd class="fw-bold text-end mb-0">${selectedService.deliverableSummary || 'Defined in your proposal'}</dd></div>
                    </dl>
                    <a href="contact.html" class="clay-btn clay-btn-primary w-100">${selectedService.ctaLabel || 'Request a Quote'}</a>
                </div>
            </aside>
        </div>
        <div class="row mt-5 pt-2">
            <div class="col-lg-8">
                <h2 class="fw-bold mb-4" id="service-faq-heading">Frequently Asked Questions</h2>
                <div class="accordion service-faq" id="${accordionId}">
                    ${faqs.map((faq, index) => `<div class="clay-card p-2 mb-3">
                        <div class="accordion-item bg-transparent border-0">
                            <h3 class="accordion-header" id="${accordionId}-heading-${index}">
                                <button class="accordion-button ${index ? 'collapsed' : ''} bg-transparent fw-bold text-reset shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#${accordionId}-answer-${index}" aria-expanded="${index === 0}" aria-controls="${accordionId}-answer-${index}">${faq.question}</button>
                            </h3>
                            <div id="${accordionId}-answer-${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${accordionId}-heading-${index}" data-bs-parent="#${accordionId}">
                                <div class="accordion-body text-muted-clay pt-0">${faq.answer}</div>
                            </div>
                        </div>
                    </div>`).join('')}
                </div>
            </div>
        </div>
        <div class="clay-card service-final-cta p-4 p-md-5 text-center mt-5" data-aos="zoom-in">
            <h2 class="fw-bold mb-3">${selectedService.ctaTitle || 'Ready to get started?'}</h2>
            <p class="text-muted-clay fs-5 mb-4 mx-auto" style="max-width: 720px;">${selectedService.ctaDescription || 'Let’s discuss your project and create a solution tailored to your business.'}</p>
            <a href="contact.html" class="clay-btn clay-btn-primary px-4">${selectedService.ctaLabel || 'Request a Quote'} <i class="bi bi-arrow-right"></i></a>
        </div>
    </div>`;
    hero.after(details);

    if (window.AOS && typeof window.AOS.refreshHard === 'function') window.AOS.refreshHard();
});
