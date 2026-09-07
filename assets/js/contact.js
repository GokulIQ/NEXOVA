/**
 * Contact Form Validation & Mock Submission
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (contactForm.checkValidity()) {
                // Form is valid
                const formData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    service: document.getElementById('service').value,
                    message: document.getElementById('message').value,
                    date: new Date().toISOString()
                };

                // Store enquiry locally (mock backend)
                let enquiries = Storage.get('agency_enquiries') || [];
                enquiries.push(formData);
                Storage.set('agency_enquiries', enquiries);

                // Show success, reset form
                successMsg.classList.remove('d-none');
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.add('d-none');
                }, 5000);

            } else {
                contactForm.classList.add('was-validated');
            }
        });
    }
});
