// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll with Web Animations API
document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('hidden');
    });
});

// Form Submission with Fetch (Mock)
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Simulate API call
    try {
        console.log('Sending:', data);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Mock delay
        alert('Message sent successfully!');
        e.target.reset();
    } catch (error) {
        alert('Something went wrong. Try again!');
    }
});

// Animate on Scroll
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.animate([
                { opacity: 0, transform: 'translateY(20px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], {
                duration: 800,
                easing: 'ease-out',
                fill: 'forwards'
            });
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.1 });
document.querySelectorAll('.content-section').forEach(section => observer.observe(section));