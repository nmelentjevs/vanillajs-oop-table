import { View } from './View';
import {
  modalStyle,
  modalCloseButtonStyle,
  modalConfirmButtonStyle,
} from '../styles/injectedStyles';
import transition from '../utils/transition';
import clearHistory from '../utils/clearHistory';

export class ConfirmModal extends View {
  constructor() {
    super(...arguments);
  }

  handleRemoveModal = () => {
    this.remove();
  };

  handleCloseModal = () => {
    transition('modal').fade('out', 50);
    clearHistory();
  };

  handleConfirmDelete = () => {
    const removeRow = document.querySelector(
      `.people-table__body-row-${this.model.get('id')}`
    );
    if (removeRow) removeRow.remove();
    this.model.delete();
    this.handleCloseModal();
  };

  handleOutsideModalClick = (event) => {
    const innerModal = document.querySelector('.confirm-modal');
    const isClickInside = innerModal?.contains(event.target);

    if (!isClickInside) {
      this.handleCloseModal();
    }
  };

  handleEscKey = (event) => {
    const key = event.key;

    if (key === 'Escape') {
      this.handleCloseModal();
    }
    if (key === 'Enter') {
      this.handleConfirmDelete();
    }
  };

  regionsMap() {
    return {
      deleteButton: '.close-modal',
      confirmModal: '.modal-container',
    };
  }

  handleDeleteHover() {
    const deleteBtn = document.querySelector('.confirm-delete');
    deleteBtn.style.background = 'green';
    deleteBtn.style.color = 'white';
  }

  handleDeleteLeave() {
    const deleteBtn = document.querySelector('.confirm-delete');
    deleteBtn.style.background = 'white';
    deleteBtn.style.color = 'green';
  }

  eventsMap() {
    return {
      'click:.close-modal': this.handleCloseModal,
      'click:.confirm-delete': this.handleConfirmDelete,
      'mouseover:.confirm-delete': this.handleDeleteHover,
      'mouseleave:.confirm-delete': this.handleDeleteLeave,
    };
  }

  onRender() {
    document.addEventListener('keydown', this.handleEscKey);
    const outerModal = document.querySelector('#modal');
    outerModal.addEventListener('click', this.handleOutsideModalClick);
    document.addEventListener('scroll', this.handleRemoveModal);
  }

  template() {
    return `
        <div id='confirm-modal' class='confirm-modal' style='${modalStyle}'>
          <h3>Are you sure you want to delete #${this.model.get('id')}?</h3>
          <button class='close-modal' style='${modalCloseButtonStyle}'><i class="fas fa-times"></i></button>
          <button class='confirm-delete' style='${modalConfirmButtonStyle}'>Confirm</button>
        </div>
    `;
  }
}
