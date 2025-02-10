// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de entrada para elementos
const fadeInElements = document.querySelectorAll('.feature-card, .step, .hero, h2');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Efecto de typing para el tagline
const tagline = document.querySelector('.tagline');
const text = tagline.textContent;
tagline.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Iniciar efecto de typing cuando la página carga
document.addEventListener('DOMContentLoaded', typeWriter);

// Animación para los números en los steps
const stepNumbers = document.querySelectorAll('.step-number');
stepNumbers.forEach(number => {
    number.addEventListener('mouseover', () => {
        number.style.transform = 'rotate(360deg) scale(1.2)';
    });
    number.addEventListener('mouseout', () => {
        number.style.transform = 'rotate(0) scale(1)';
    });
});

// Efecto hover para las feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('i').style.transform = 'scale(1.2) rotate(10deg)';
    });
    card.addEventListener('mouseout', () => {
        card.querySelector('i').style.transform = 'scale(1) rotate(0)';
    });
});

// Contador de visitas en el localStorage
let visits = localStorage.getItem('visits') || 0;
visits = parseInt(visits) + 1;
localStorage.setItem('visits', visits);

// Animación del logo
const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)';
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)';
});

// Efecto parallax suave para el header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Botones sociales con efecto de brillo
const socialBtns = document.querySelectorAll('.social-btn');
socialBtns.forEach(btn => {
    btn.addEventListener('mouseover', (e) => {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    });
});

// Navbar scroll animation
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Modal and form functionality
const modal = document.getElementById('launchModal');
const getStartedBtn = document.querySelector('.primary-btn');
const closeModal = document.querySelector('.close-modal');
const betaForm = document.getElementById('betaForm');

getStartedBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

betaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const stayInformed = document.getElementById('stayInformed').checked;
    
    // Aquí puedes añadir la lógica para enviar el email al servidor
    console.log('Email:', email, 'Stay Informed:', stayInformed);
    
    // Mostrar mensaje de éxito
    alert('Thanks for joining our beta program! We\'ll be in touch soon.');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}); 