import {openModal} from '../utils/modal';
import {closeModal} from '../utils/modal';

const modalFeedbackInit = () => {
  window.addEventListener('load', () => {
    let modalFeedback = document.querySelectorAll('.modal--feedback');

    if (modalFeedback) {
      let modalSuccess = document.querySelector('.modal--success');

      modalFeedback.forEach((modal) => {
        modal.addEventListener('submit', (e) => {
          let modalFeedbackFrom = modal.querySelector('form');

          e.preventDefault();

          closeModal(modal);
          modalFeedbackFrom.reset();

          openModal(modalSuccess);
        });
      });
    }
  });
};

export {modalFeedbackInit};

