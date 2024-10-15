const product_color_all= new Swiper(".product_color_all",{
    slidesPerView: 1,
    slidesPerShow: 1,
    
    navigation: {
        prevEl: '.color_all .swiper-button-prev',
        nextEl: '.color_all .swiper-button-next',
    },
    loop:true,
})
const color_all= new Swiper(".color_all",{
    slidesPerView: 4,
    pagination: {
		el: ".product_color_wrap .swiper-pagination",
		type: 'progressbar',
        innerWidth: '125px',
        outerWidth: '625px',
    },
})
const item_all= new Swiper(".item_all",{
    slidesPerView: 4,
    navigation: {
        prevEl: '.withitem_wrap .swiper-button-prev',
        nextEl: '.withitem_wrap .swiper-button-next',
    },
    loop:true,
})
const picture_all= new Swiper(".picture_all",{
    slidesPerView: 4,
    spaceBetween: 20,
    loop:true,
})