// Select the menu button and navigation menu
const menuButton = document.getElementById("open-button");
const menu = document.querySelector(".menu");

// Toggle the menu visibility
menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuButton.classList.toggle("active");
});

document.querySelectorAll('.icon-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust offset if navbar overlaps
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.social-links a').forEach((icon) => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#4caf50';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = 'white';
    });
});

// Message de confirmation pour le formulaire
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = this;
    form.style.transform = 'scale(1.1)';
    form.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
        form.style.transform = 'scale(1)';
        alert('Message envoyé avec succès!');
    }, 300);
});