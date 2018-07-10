//btn massive and jumbotron animation
{
    const jumbotron = document.querySelector('.jumbotron');
    const massiveBtn = document.querySelector('.massive__button');
    const jumbotronTop = jumbotron.getBoundingClientRect().top;
    const mobile = document.querySelector('.mobile');
    const mobileTwo = document.querySelector('.mobile-two');
    window.addEventListener('scroll', () => {
        if (window.scrollY > jumbotronTop) {
            jumbotron.classList.add('active-jumbotron')
            massiveBtn.classList.add('active-btn');
            mobile.classList.add('active-mobile');
            mobileTwo.classList.add('active-mobile');
        } else {
            jumbotron.classList.remove('active-jumbotron')
            massiveBtn.classList.remove('active-btn');
            mobile.classList.remove('active-mobile');
            mobileTwo.classList.remove('active-mobile');
        }
    });
}

{
    const links = document.querySelectorAll(".nav__item");
    const dropdownFollow = document.querySelector('.dropdown-background');
    const nav_links = document.querySelectorAll('.nav__link');
    const nav = document.querySelector('.nav');

    function enter() {
        this.classList.add('active-layout')
        setTimeout(() => {
            if (this.classList.contains('active-layout')) {
                this.classList.add('active-fadein');
            }
        }, 150);
        dropdownFollow.classList.add('active-open');

        const dropdown = this.querySelector('.dropdown');
        const dropdownPos = dropdown.getBoundingClientRect();
        const navPos = nav.getBoundingClientRect();


        const coords = {
            height: dropdownPos.height,
            width: dropdownPos.width,
            top: dropdownPos.top + window.scrollY,
            left: dropdownPos.left + window.scrollX
        };

        dropdownFollow.style.setProperty('width', `${coords.width}px`);
        dropdownFollow.style.setProperty('height', `${coords.height}px`);
        dropdownFollow.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

    }

    function leave() {
        this.classList.remove('active-layout')
        this.classList.remove('active-fadein');
        dropdownFollow.classList.remove('active-open');
    }

    links.forEach(link => link.addEventListener('mouseenter', enter));
    links.forEach(link => link.addEventListener('mouseleave', leave));
    nav_links.forEach(navLink => navLink.addEventListener('click', (e) => {
        e.preventDefault();
    }))
}


//Contact Modal
{
    const modal = document.querySelector('.contact');
    const openModal = document.querySelector('.nav__icons--contact');
    const closeModal = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    const form = document.querySelector('.contact__form');

    openModal.addEventListener('click', () =>{
        modal.classList.add('layout');
        setTimeout(() => {
            if(modal.classList.contains('layout')) {
                modal.classList.add('open-layout');
                overlay.classList.add('overlay-open');
            }
        },150);
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('layout');
        modal.classList.remove('open-layout');
        overlay.classList.remove('overlay-open');
    });

    overlay.addEventListener('click', () => {
        modal.classList.remove('open-layout');
        modal.classList.remove('layout');
        overlay.classList.remove('overlay-open');
    });

    form.addEventListener('click', (e) => {
        e.preventDefault();
    });
}


//Slide in divs
{
    const slideIn = document.querySelectorAll('.slide-in');
    function slideProjects() {
        slideIn.forEach(slide => {
            if(window.scrollY > slide.getBoundingClientRect().top / .350) {
                slide.classList.add('active-slide');
            }else {
                slide.classList.remove('active-slide');
            }
        });
    };
    window.addEventListener('scroll', slideProjects);
}

//Dynamic date

{
    let date = new Date().getFullYear();
    let date_span = document.getElementById('date').innerHTML = `${date}`;
}