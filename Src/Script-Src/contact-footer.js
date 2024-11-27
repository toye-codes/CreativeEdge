document.addEventListener('DOMContentLoaded', () => {
    // 1. Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Basic form validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            // Remove any existing error states
            input.classList.remove('input-error');

            // Check if required fields are filled
            if (input.hasAttribute('required') && input.value.trim() === '') {
                input.classList.add('input-error');
                isValid = false;
            }

            // Email validation
            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    input.classList.add('input-error');
                    isValid = false;
                }
            }
        });

        // If form is valid, proceed with submission
        if (isValid) {
            showSubmissionMessage('Message sent successfully!', 'success');
            contactForm.reset();
        } else {
            showSubmissionMessage('Please fill out all required fields correctly.', 'error');
        }
    });

    // 2. Submission Message Functionality
    function showSubmissionMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.classList.add('submission-message', `message-${type}`);
        messageEl.textContent = message;

        // Style the message
        messageEl.style.position = 'fixed';
        messageEl.style.top = '20px';
        messageEl.style.left = '50%';
        messageEl.style.transform = 'translateX(-50%)';
        messageEl.style.padding = '15px 30px';
        messageEl.style.backgroundColor = type === 'success' ? '#4CAF50' : '#F44336';
        messageEl.style.color = 'white';
        messageEl.style.borderRadius = '5px';
        messageEl.style.zIndex = '1000';

        // Add to body
        document.body.appendChild(messageEl);

        // Remove message after 3 seconds
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 3000);
    }

    // 3. Social Media Icon Interaction
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', (event) => {
            // Add subtle scale effect
            event.target.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseleave', (event) => {
            // Reset to original state
            event.target.style.transform = 'scale(1)';
        });
    });

    // 4. Dynamic Copyright Year
    const copyrightYear = document.querySelector('.footer-bottom');
    const currentYear = new Date().getFullYear();
    
    copyrightYear.innerHTML = `© ${currentYear} Your Company Name. All Rights Reserved.`;

    // 5. Accessibility Enhancements
    // Add aria labels and roles for improved accessibility
    contactForm.setAttribute('aria-label', 'Contact Form');
    const submitButton = contactForm.querySelector('.submit-btn');
    submitButton.setAttribute('aria-label', 'Send Message');

    // Optional: Add custom styling for error states
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        .input-error {
            border: 2px solid #F44336;
            animation: shake 0.5s;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(styleEl);
});