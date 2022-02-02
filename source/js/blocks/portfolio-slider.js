const portfolioSlider = () => {
  let portfolioSliderCheck = document.querySelectorAll('.portfolio__slider');

  if (portfolioSliderCheck.length) {
    portfolioSliderCheck.forEach((slider, i) => {
      slider.classList.add(`portfolio__slider--${i}`)

      const portfolioSliderInit = new Swiper(`.portfolio__slider--${i}`, {
        loop: true,
        slidesPerView: 'auto',
      
        navigation: {
          nextEl: `.portfolio__slider--${i} .portfolio__slider-btn--next`,
          prevEl: `.portfolio__slider--${i} .portfolio__slider-btn--prev`,
        },

        breakpoints: {
          // when window width is >= 0px
          0: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 4,
            spaceBetween: 30
          },
        }
      });
    })
  }
};

export {portfolioSlider};