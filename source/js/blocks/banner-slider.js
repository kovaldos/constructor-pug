const bannerSlider = () => {
  let bannerSliderCheck = document.querySelectorAll('.banner__slider');

  if (bannerSliderCheck.length) {
    bannerSliderCheck.forEach((slider, i) => {
      slider.classList.add(`banner__slider--${i}`)

      const bannerSliderInit = new Swiper(`.banner__slider--${i}`, {
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: `.banner__slider--${i} .banner__slider-btn--next`,
          prevEl: `.banner__slider--${i} .banner__slider-btn--prev`,
        },
      });
    })
  }
};

export {bannerSlider};