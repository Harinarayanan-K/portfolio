let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

window.onscroll = () => {
    let fromTop = window.scrollY + 100;

    sections.forEach(section => {
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinks.forEach(link => link.classList.remove('active'));
            let correspondingLink = document.querySelector('header nav a[href="#' + section.getAttribute('id') + '"]');
            correspondingLink.classList.add('active');
        }
    });

    // If no section is active, remove active class from all links
    if (!Array.from(navLinks).some(link => link.classList.contains('active'))) {
        navLinks.forEach(link => link.classList.remove('active'));
    }
};
    