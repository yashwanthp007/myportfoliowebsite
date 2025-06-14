document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animation
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden-fade');
        } else {
            // Optional: Add back hidden-fade if you want elements to fade out when scrolled away
            // entry.target.classList.add('hidden-fade');
        }
    });
}, { threshold: 0.1 }); // Adjust threshold as needed

sections.forEach(section => {
    observer.observe(section);
});

// Typewriter effect for hero title
const heroTitle = document.querySelector('#hero h1');
const text = " I'm Yashwanth Peddiraju";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }
}

// Start typewriter effect when the page loads
window.addEventListener('load', typeWriter);

// Populate email body with textarea content
document.getElementById('sendEmailBtn').addEventListener('click', function(e) {
    const message = document.getElementById('emailMessage').value;
    this.href = `mailto:yashwanthpeddiraju007@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(message)}`;
});
