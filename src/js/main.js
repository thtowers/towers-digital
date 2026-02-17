/* Main JavaScript */

/**
 * Validates and handles form submissions or interactions
 */
const init = () => {
    console.log('Towers Digital - Site initialized');
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    });

    // Mobile Menu Toggle (Basic implementation, can be expanded)
    // Add logic here if menu toggle is needed for mobile
};

document.addEventListener('DOMContentLoaded', init);
