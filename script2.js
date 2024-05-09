const swiper = new Swiper('.js-testimonios-slider', {
grabCursor: true,
spaceBetween:30,
pagination:{
    el: '.js-testimonios-pagination',
    clickable: true
},
breakpoints:{
    767:{
        slidesPerView: 2
    }
}
});