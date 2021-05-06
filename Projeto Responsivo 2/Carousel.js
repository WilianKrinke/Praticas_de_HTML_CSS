function Carousel(config) {
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens;
    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev;
    this.btnNxt = (typeof config.btnNxt === 'string') ? this.container.querySelector(config.btnNxt) : config.btnNxt;

   var _this = this;
   var _currentSlide = 0;

   Init()
   function Init() {
       var _show = _this.container.querySelectorAll('.show')
       Array.prototype.forEach.call(_show, function(sh) {
           sh.classList.remove('show');
       })
       _this.itens[0].classList.add('show');
       _this.btnNxt.removeAttribute('style');
       _this.btnPrev.removeAttribute('style');

       addListener()
   }

   function addListener() {
       _this.btnNxt.addEventListener('click', showNextSlide)
       _this.btnPrev.addEventListener('click', showPrevSlide)
   }

   function showNextSlide() {
    _currentSlide++;
    showSlide();
   }

   function showPrevSlide() {
    _currentSlide--;
    showSlide();
   }

   function showSlide() {
       var qtd = _this.itens.length;
       var slide = _currentSlide % qtd;
       slide = Math.abs(slide);

       _this.container.querySelector('.show').classList.remove('show');
       _this.itens[slide].classList.add('show')
   }
};