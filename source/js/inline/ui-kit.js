/* eslint-disable no-console */
//  Кнопки плюс и минус -- Начало --

const initCount = () => {
  const goodsCards = document.querySelectorAll('.goods-card');
  if (goodsCards.length > 0) {
    goodsCards.forEach((goodsCard) => {
      const counterWarning = goodsCard.querySelector('.notification');
      const input = goodsCard.querySelector('.goods-card__input input');
      goodsCard.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('goods-card__btn')) {
          initCounter(target);
        }
      });
      const initCounter = (btn) => {
        let counter = input.value;
        if (btn.classList.contains('goods-card__btn--minus')) {
          if (counter > 0) {
            counter--;
            input.value = counter;
          } else {
            if (counterWarning) {
              counterWarning.classList.add('is-active');
              setTimeout(() => {
                counterWarning.classList.remove('is-active');
              }, 3000);
              console.log('Не может быть отрицательным!');
            }
            console.log('Не может быть отрицательным!');
          }
        }
        if (btn.classList.contains('goods-card__btn--plus')) {
          counter++;
          input.value = counter;
        }
      };
    });
  }
};

initCount();

//  Кнопки плюс и минус -- Конец --

// Вставляем пробелы между разрядами цифр в ценах Старт

const setSpaces = () => {
  const numbers = document.querySelectorAll('.number-spaced');
  if (numbers.length) {
    console.log(numbers);
    numbers.forEach((number) => {
      const spaced = number.innerText.replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
      );
      number.innerText = spaced;
    });
  }
};

setSpaces();

// Вставляем пробелы между разрядами цифр в ценах Конец
