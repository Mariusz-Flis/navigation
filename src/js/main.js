const navSlide = () => {
    const burgerMenu = document.querySelector('.nav__burgerMenu');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__list');
    //Przełacznik navigacji
    burgerMenu.addEventListener('click',() => {
        nav.classList.toggle('nav__active');

        navLinks.forEach((link, index)=> {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +0.5}s`;
            }
        });

        //Burger animacja
       burgerMenu.classList.toggle('toggle');

    });   
}
navSlide();

//const navigationSwitcher = document.querySelector('.siteHeader__navSwitcher--js')

//navigationSwitcher.addEventListener('click', (e) => { 
//const navigationList = document.querySelector('.siteHeader__navList--js');
//navigationList.classList.toggle('siteHeader__navList--visible');
//});