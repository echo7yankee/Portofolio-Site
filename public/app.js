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

});


