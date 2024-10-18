document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoItems = document.querySelectorAll('.video-item');
    const subscriptionForm = document.getElementById('subscription-form');
    const contactForm = document.getElementById('contact-form');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            videoItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Email Subscription Form Submission
    subscriptionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email-subscription').value;

        // Send email to Google Sheets
        const response = await fetch('YOUR_GOOGLE_SCRIPT_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            alert('Subscription successful!');
            subscriptionForm.reset();
        } else {
            alert('There was an error. Please try again.');
        }
    });

    // Contact Form Submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email-contact').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Send contact data to Google Sheets
        const response = await fetch('https://script.google.com/macros/s/AKfycbxFnR_amUpqfnvnbmqta1W3-yTwMMehP278YvPYh3lkH4H9wU9hv3J35XgASIIlujN1aw/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message }),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('There was an error. Please try again.');
        }
    });
});
