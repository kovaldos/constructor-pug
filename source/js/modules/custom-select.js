/* eslint-disable no-invalid-this */

// Кастомный селект. Начало

const initCustomSelect = () => {
  const select = function () {
    let innerSelects = document.querySelectorAll('.custom-select__inner');
    let selectItem = document.querySelectorAll('.custom-select__label-item');

    innerSelects.forEach((item) => {
      item.addEventListener('click', selectToggle);
    });

    selectItem.forEach((item) => {
      item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle('_active');
    }

    function selectChoose() {
      let text = this.innerText;
      let location = this.closest('.custom-select');
      let currentText = location.querySelector('.custom-select__current ');
      currentText.innerText = text;
      location.classList.remove('_active');
    }
  };

  select();
};
// Кастомный селект. Конец
export {initCustomSelect};
