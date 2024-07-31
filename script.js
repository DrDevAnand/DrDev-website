document.addEventListener('DOMContentLoaded', () => {
    const introText = document.getElementById('intro-text');

    // Simulate loading content
    setTimeout(() => {
        introText.textContent = 'Welcome to Dr. Dev! We specialize in innovative technology solutions. Explore our site to learn more about what we offer and how we can help you achieve your goals.';
    }, 1000); // 1 second delay to simulate loading
});
