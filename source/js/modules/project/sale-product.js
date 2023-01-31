const initSwiperSaleProducts = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#swiperSaleProducts', {
      loop: true,
      cssMode: true,
      autoplay: {
        delay: 2000,
      },

      pagination: {
        el: '.swiper-pagination',
      },
      mousewheel: true,
      keyboard: true,
    });
  }
};

export {initSwiperSaleProducts};
