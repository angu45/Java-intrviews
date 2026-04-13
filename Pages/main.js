document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // --- १. मोबाईल मेनू टोगल ---
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        // बटन आयकॉन बदलण्यासाठी (पर्यायी)
        menuBtn.textContent = nav.classList.contains('active') ? '✖' : '☰';
    });

    // --- २. डार्क मोड टोगल ---
    // आधी सेव्ह केलेली थीम तपासा
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        let theme = 'light';
        if (body.classList.contains('dark-theme')) {
            theme = 'dark';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
        
        // युजरची चॉईस ब्राउझरमध्ये सेव्ह करा
        localStorage.setItem('theme', theme);
    });

    // स्क्रीन मोठी झाल्यावर मेनू बंद करणे (स्वच्छतेसाठी)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            menuBtn.textContent = '☰';
        }
    });
});
