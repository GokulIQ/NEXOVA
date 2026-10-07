document.addEventListener('DOMContentLoaded', () => {
    const projects = window.NEXOVA_PROJECTS || [];
    const projectId = new URLSearchParams(window.location.search).get('id');
    const project = projects.find(item => item.id === projectId);

    if (!project) {
        window.location.replace('portfolio.html');
        return;
    }

    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    document.title = `${project.title} | NEXOVA Portfolio`;
    setText('port-breadcrumb', project.title);
    setText('port-title', project.title);
    setText('port-description', project.description);
    setText('port-client', project.client);
    setText('port-category', project.category);
    setText('port-technology', project.technology);
    setText('port-services', project.services);
    setText('port-overview', project.overview);
    setText('port-challenge', project.challenge);
    setText('port-solution', project.solution);

    const image = document.getElementById('port-image');
    if (image) {
        image.src = project.image;
        image.alt = project.imageAlt;
        image.style.display = 'block';
    }

    (project.metrics || []).forEach((metric, index) => {
        setText(`port-metric${index + 1}`, metric.value);
        setText(`port-metric${index + 1}-label`, metric.label);
    });
});
