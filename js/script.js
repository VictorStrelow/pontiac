document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const menuItems = document.querySelectorAll('.sidebar .menu-item');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        
        if (href === page || (page === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });
});