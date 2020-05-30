import { View } from './View';
import { Person } from '../models';
import { PeopleTable } from './PeopleTable';
import { PersonAdd } from './PersonAdd';
import { ConfirmModal } from './ConfirmModal';
import { PersonForm } from './PersonForm';
import transition from '../utils/transition';
import getParams from '../utils/getParams';
import { modalContainerStyles } from '../styles/injectedStyles';

export class App extends View {
  regionsMap() {
    return {
      personAdd: '.person-add',
      peopleTable: '.people-table',
      modal: '.modal',
    };
  }

  onRender() {
    const people = Person.buildPersonCollection();

    const peopleTable = new PeopleTable(
      this.regions.peopleTable,
      this.model,
      people.models
    );
    new PersonForm(this.regions.personAdd, this.model).render();
    people.fetch().then(() => {
      peopleTable.render();

      // Check query for modal editing
      let leftOnEditingId;
      try {
        leftOnEditingId = getParams(window.location.href).editing;
      } catch (error) {
        leftOnEditingId = false;
      }

      // If left on editing open modal with that id
      if (
        leftOnEditingId &&
        people.models.some((p) => p.attributes.get('id') === leftOnEditingId)
      ) {
        const savedPerson = Person.buildPerson({ id: leftOnEditingId });
        const confirmModal = new ConfirmModal(this.regions.modal, savedPerson);
        confirmModal.render();
        transition('modal').fade('in', 100);
      }
    });
  }
  template() {
    return `
      <div class='container'>
        <div class="person-add"></div>
        <table class="people-table"></table>
        <div id='modal' class="modal" style='${modalContainerStyles}'></div>
      </div>
    `;
  }
}
