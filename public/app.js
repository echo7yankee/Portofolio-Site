//btn massive and jumbotron animation
(function (){
    const jumbotron = document.querySelector('.jumbotron');
    const massiveBtn = document.querySelector('.massive__button');
    const jumbotronTop = jumbotron.getBoundingClientRect().top;
    window.addEventListener('scroll', () => {
        if(window.scrollY > jumbotronTop) {
            jumbotron.classList.add('active-jumbotron')
            massiveBtn.classList.add('active-btn');
        }else {
            jumbotron.classList.remove('active-jumbotron')
            massiveBtn.classList.remove('active-btn');
        }
    });
}());

(function (){
    const links = document.querySelectorAll(".nav__item");
    const dropdownFollow = document.querySelector('.dropdown-background');
    const nav = document.querySelector('.nav');
    
    function enter() {
        this.classList.add('active-layout')
        setTimeout(() =>{
            if(this.classList.contains('active-layout')) {
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

    links.forEach((link) => link.addEventListener('mouseenter', enter));
    links.forEach((link) => link.addEventListener('mouseleave', leave));
}());



