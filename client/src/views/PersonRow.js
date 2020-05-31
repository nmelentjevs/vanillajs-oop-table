import { View } from './View';

export class PersonRow extends View {
  handleDeleteClick = () => {
    this.model.trigger('delete');
  };

  handleEditClick = (e) => {
    e.target.contentEditable = true;
    if (!this.inEditing(e.target)) {
      this.startEditing(e.target);
    }
  };

  startEditing(td) {
    const activeEditing = this.findEditing();
    if (activeEditing) {
      this.cancelEditing(activeEditing);
    }

    td.classList.add('in-editing');
    td.setAttribute('data-old-value', td.innerHTML);
    this.createButtonToolbar(td);
  }

  cancelEditing = (td) => {
    td.innerHTML = td.getAttribute('data-old-value');

    td.classList.remove('in-editing');
    // this.removeToolbar(td);
  };

  finishEditing = (td) => {
    td.classList.remove('in-editing');
    this.removeToolbar(td);
    this.model.set({ [td.getAttribute('data-title')]: td.textContent.trim() });
    this.model.save();
  };

  inEditing(td) {
    if (!td.classList.contains('edit-person')) return true;
    return td.classList.contains('in-editing');
  }

  findEditing() {
    const tds = document.querySelectorAll('.edit-person');
    return Array.from(tds).find((td) => this.inEditing(td));
  }

  createButtonToolbar(td) {
    const toolbar = document.createElement('div');
    toolbar.className = 'button-toolbar';

    toolbar.innerHTML = `
      <div class='button-toolbar__wrapper' contenteditable='false'>
        <button class="button-toolbar__wrapper-btn button-toolbar__wrapper-btn-save"><i class='fa fa-check'></i></button>
        <button class="button-toolbar__wrapper-btn button-toolbar__wrapper-btn-cancel"><i class="fas fa-ban"></i></button>
      </div>
    `;

    td.appendChild(toolbar);

    const btnSave = toolbar.querySelector('.button-toolbar__wrapper-btn-save');
    const btnCancel = toolbar.querySelector(
      '.button-toolbar__wrapper-btn-cancel'
    );
    btnSave.addEventListener('click', () => this.finishEditing(td));
    btnCancel.addEventListener('click', () => this.cancelEditing(td));
  }

  removeToolbar(td) {
    const toolbar = td.querySelector('.button-toolbar');
    toolbar.remove();
  }

  regionsMap() {
    return {
      deleteButton: '.delete-person',
    };
  }

  eventsMap() {
    return {
      'click:.delete-person': this.handleDeleteClick,
      'click:.edit-person': this.handleEditClick,
    };
  }

  template() {
    return `<td data-title='id'>${this.model.get('id')}</td>
              <td class='edit-person' data-title='first'>${this.model.get(
                'first'
              )}</td>
              <td class='edit-person' data-title='last'>${this.model.get(
                'last'
              )}</td>
              <td class='edit-person' data-title='occupation'>${this.model.get(
                'occupation'
              )}</td>
              <td class='edit-person' data-title='education'>${this.model.get(
                'education'
              )}</td>
            <td><span class='delete-person btn-close'>Delete</span></td>`;
  }
}
