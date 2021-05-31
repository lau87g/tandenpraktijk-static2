const navMenuSetup = () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('#sidebar');
    const shade = document.querySelector('#shade');
    const menuLinks = document.querySelectorAll('#sidebar nav a');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
        shade.classList.toggle('active');
        menuLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `menuLinkFade 0.3s ease forwards ${0.4 + (index / 12)}s`;
            }
        })
    });

    shade.addEventListener('click', () => {
        menu.classList.toggle('active');
        shade.classList.toggle('active');
        menuLinks.forEach(link => {
            link.style.animation = '';
        })
    });
}

navMenuSetup();



const beforeAfterSetup = () => {
    const beforeAfterButton = document.querySelector('.before-after-switch');
    const beforeAfterSection = document.querySelector('.before-after-section');
    if(beforeAfterSection) {
        beforeAfterButton.addEventListener('click', () => {
            beforeAfterSection.classList.toggle('afterActive');
        });
    }
}

beforeAfterSetup();