// Function to format and display last updated date
function updateLastUpdatedDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    // Update all instances of last updated date
    const lastUpdatedElements = document.querySelectorAll('#lastUpdated');
    lastUpdatedElements.forEach(el => {
        el.textContent = formattedDate;
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', updateLastUpdatedDate);

// Smooth scroll navigation for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll event for navbar styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scroll for page navigation
document.querySelectorAll('a[href^="./"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Let the link navigate normally
        updateLastUpdatedDate();
    });
});

// Update last updated date when page becomes visible again
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateLastUpdatedDate();
    }
});
