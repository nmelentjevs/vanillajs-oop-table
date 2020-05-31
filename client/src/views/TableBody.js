import { View } from './View';
import { PersonRow } from './PersonRow';
import { ConfirmModal } from './ConfirmModal';
import transition from '../utils/transition';

export class PeopleTableBody extends View {
  constructor(root, model, data) {
    super(root, model);
    this.data = data;
    this.data.forEach((row) => {
      const id = row.get('id');
      this.regions[id] = `.people-table__body-row-${id}`;
    });
  }

  renderTableBody() {
    return this.data
      .map((row) => {
        const id = row.get('id');
        return `<tr row-id='${id}' class='people-table__body-row people-table__body-row-${id}'></tr>`;
      })
      .join('');
  }

  regionsMap() {
    return this.regions;
  }

  onRender() {
    this.data.map((person) => {
      const personRow = new PersonRow(this.regions[person.get('id')], person);

      person.on('delete', () => {
        const modal = document.querySelector('.modal');
        const confirmModal = new ConfirmModal(modal, person);
        history.pushState(
          {},
          `Editing ${personRow.id}`,
          `http://localhost:3000/?editing=${person.attributes.get('id')}`
        );

        confirmModal.render();
        transition('modal').fade('in', 100);
      });

      personRow.render();
    });
  }

  template() {
    return this.renderTableBody();
  }
}
