import { View } from './View';
import { PeopleTableHeading } from './TableHeading';
import { PeopleTableBody } from './TableBody';

export class PeopleTable extends View {
  constructor(root, model, data) {
    super(root, model);
    this.data = data;
  }

  regionsMap() {
    return {
      tableHeading: '.people-table__head',
      tableBody: '.people-table__body',
    };
  }

  onRender() {
    new PeopleTableHeading(this.regions.tableHeading, this.model).render();
    new PeopleTableBody(this.regions.tableBody, this.model, this.data).render();
  }

  template() {
    return `
        <thead class="people-table__head"></thead>
        <tbody class="people-table__body"></tbody>
    `;
  }
}
