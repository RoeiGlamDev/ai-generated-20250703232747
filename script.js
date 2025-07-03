// Get all sections
const sections = document.querySelectorAll('section');

// Add fade-in animation to each section
sections.forEach((section) => {
    section.classList.add('fade-in');
});

// Get all products
const products = document.querySelectorAll('.product');

// Add event listener to each product
products.forEach((product) => {
    product.addEventListener('mouseover', () => {
        product.style.transform = 'scale(1.01)';
    });

    product.addEventListener('mouseout', () => {
        product.style.transform = 'scale(1)';
    });
});

// Get contact form
const form = document.querySelector('form');

// Add event listener to form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
});