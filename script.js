document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark / Light Mode Funksiyasi
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Foydalanuvchining avvalgi tanlovini tekshirish
    const savedTheme = localStorage.getItem('turdibek_theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('turdibek_theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // 2. Mobile Menu (Hozircha faqat bosilganda animatsiya, real loyihada menyu ochiladi)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    mobileMenuBtn.addEventListener('click', () => {
        // Bu joyga mobil menyuni ochish mantig'ini yozish mumkin
        alert("Mobile menyu ochildi! Loyihani React/Next.js ga o'tkazganda bu yerni state bilan boshqaramiz.");
    });
});