import { View } from './View';
import { PersonRow } from './PersonRow';
import { Person } from '../models';
import { ConfirmModal } from './ConfirmModal';
import transition from '../utils/transition';

export class PersonForm extends View {
  constructor() {
    super(...arguments);
  }

  onSaveClick = () => {
    // Get form inputs
    const inputs = Array.from(this.parent.querySelectorAll('input'));

    const person = {};
    const errors = [];
    inputs.map((input) => {
      if (!input.value.length) {
        // Highlight not filled fields
        errors.push(input.getAttribute('name'));
        input.style.borderLeft = '2px solid #ff6961';
      } else {
        // Add to person model
        person[input.getAttribute('name')] = input.value;
        // Return border to normal in case user fixed a field
        input.style.border = '2px solid rgba(0, 0, 0, 0)';
      }
    });
    if (!errors.length > 0) {
      // Iterate throught inputs and reset them
      inputs.map((input) => {
        input.value = '';
      });
      // Get new row id to display
      const lastRowId = parseInt(
        document
          .querySelector('.people-table__body')
          .lastElementChild.getAttribute('row-id')
      );
      const tableBody = document.querySelector('.people-table__body');
      const newPerson = Person.buildPerson({ ...person, id: lastRowId + 1 });

      // Create person model event listeners
      newPerson.on('delete', () => {
        const modal = document.querySelector('.modal');
        const confirmModal = new ConfirmModal(modal, newPerson);
        history.pushState(
          {},
          `Editing ${newPerson.id}`,
          `http://localhost:3000/?editing=${newPerson.attributes.get('id')}`
        );

        confirmModal.render();
        transition('modal').fade('in', 100);
      });
      newPerson.on('confirm-delete', () => personRow.remove());
      const newPersonRow = document.createElement('tr');
      newPersonRow.setAttribute('row-id', lastRowId + 1);

      // Append tr with new row id class to body
      tableBody.appendChild(newPersonRow);

      // Create new row class and render it inside tr
      const personRow = new PersonRow(newPersonRow, newPerson);
      personRow.render();

      // Save to backend
      this.model.sync.save({ ...person });
    }
  };

  eventsMap() {
    return {
      'click:.save-model': this.onSaveClick,
    };
  }
  template() {
    return `
        <h1>Add Person Details</h1>
        <label for='first' class='person-add__label'>First Name</label>
        <input type='text' name='first' class='person-add__input' placeholder="${this.model.get(
          'first'
        )}"/>
        <label for='last' class='person-add__label'>Last Name</label>
        <input type='text' name='last' class='person-add__input' placeholder="${this.model.get(
          'last'
        )}"/>
        <label for='education' class='person-add__label'>Education</label>
        <input type='text' name='education' class='person-add__input' placeholder="${this.model.get(
          'education'
        )}"/>
        <label for='occupation' class='person-add__label'>Occupation</label>
        <input type='text' name='occupation' class='person-add__input' placeholder="${this.model.get(
          'occupation'
        )}"/>
        <button class="person-add__button save-model">Save Person</button>
    `;
  }
}
