const visual_all = new Swiper('.visual_all', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay:{delay:2000},

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const sport_product_all = new Swiper(".sport_product_all",{
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay:{delay:2000},
    loop:true,
})

const item_product_all = new Swiper(".item_product_all",{
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay:{delay:2000},
    loop:true,
})