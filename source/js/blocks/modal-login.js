import {closeModal} from '../utils/modal';

const modalLoginInit = () => {
  window.addEventListener('load', () => {
    let modalLogin = document.querySelectorAll('.modal--login');

    if (modalLogin) {
      modalLogin.forEach((modal) => {
        let modalRegistrationBtn = modal.querySelector(`[data-modal="registration"]`)

        modalRegistrationBtn.addEventListener('click', () => {
          closeModal(modal);
        })
      })
    }
  })
}

export {modalLoginInit};

