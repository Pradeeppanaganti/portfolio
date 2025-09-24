// Pradeep Kumar Panaganti - Portfolio JavaScript

// Add smooth animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Add click animations to links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Add a welcome message
    setTimeout(() => {
        console.log('Welcome to Pradeep Kumar Panaganti\'s Portfolio!');
    }, 1000);
});

// Add some interactive features
function showWelcomeMessage() {
    alert('Welcome to my portfolio! 🚀');
}

// You can add more interactive features here
// Example: form handling, animations, etc.