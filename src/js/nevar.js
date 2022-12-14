@@include('./partials/swiper-bundle.min.js')
@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')

const swiperMain = new Swiper(".swiper-main", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const menuMobile = document.getElementById('menu-mobile');
menuMobile.addEventListener('click', function (){
    let menuMobileBlock = document.getElementsByClassName('menu-mobile');
    menuMobileBlock[0].classList.toggle('open');
})



