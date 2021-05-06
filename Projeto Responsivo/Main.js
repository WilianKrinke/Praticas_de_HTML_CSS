(function () {
   var $body = document.querySelector('body');
   $body.classList.remove('no-js');
   $body.classList.add('js');  

   var menu = new Menu({
    container: '.header__nav',
    toggleBtn: '.header__btnMenu',
    widthEnable: 1024
   })

   var carouselImg = new Carousel({
       container: '.laptop-slider .slidershow',
       itens: 'figure',
       btnPrev: '.prev',
       btnNxt: '.next'
   })

   var carouselquotes = new Carousel({
    container: '.quote-slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNxt: '.next'
})
   
})()