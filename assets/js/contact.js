/**
 * Contact Form Validation & Mock Submission
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('contact-success');

    if (contactForm) {
        const fields = contactForm.querySelectorAll('input, select, textarea');
        const trimmedFields = contactForm.querySelectorAll('input[type="text"], input[type="email"]');

        fields.forEach((field) => {
            field.addEventListener('input', () => {
                successMsg.classList.add('d-none');
                if (contactForm.classList.contains('was-validated')) {
                    field.setAttribute('aria-invalid', String(!field.validity.valid));
                }
            });
        });
        trimmedFields.forEach((field) => {
            field.addEventListener('blur', () => {
                field.value = field.value.trim();
                if (contactForm.classList.contains('was-validated')) {
                    field.setAttribute('aria-invalid', String(!field.validity.valid));
                }
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();
            successMsg.classList.add('d-none');
            trimmedFields.forEach((field) => {
                field.value = field.value.trim();
            });

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
                fields.forEach((field) => field.removeAttribute('aria-invalid'));
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.add('d-none');
                }, 5000);

            } else {
                contactForm.classList.add('was-validated');
                fields.forEach((field) => {
                    field.setAttribute('aria-invalid', String(!field.validity.valid));
                });
                contactForm.querySelector(':invalid').focus();
            }
        });
    }
});
