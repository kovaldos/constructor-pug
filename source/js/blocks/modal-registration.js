import {closeModal} from '../utils/modal';

const modalRegistrationInit = () => {
  window.addEventListener('load', () => {
    let modalRegistration = document.querySelectorAll('.modal--registration');

    if (modalRegistration) {
      modalRegistration.forEach((modal) => {
        let modalLoginBtn = modal.querySelector(`[data-modal="login"]`)

        modalLoginBtn.addEventListener('click', () => {
          closeModal(modal);
        })
      })
    }
  })
}

export {modalRegistrationInit};

