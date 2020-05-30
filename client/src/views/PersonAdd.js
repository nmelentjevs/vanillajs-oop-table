import { View } from './View';
import { PersonForm } from './PersonForm';
export class PersonAdd extends View {
  regionsMap() {
    return {
      personForm: '.person-form',
    };
  }
  onRender() {
    new PersonForm(this.regions.personForm, this.model).render();
  }
  template() {
    return `
      <div class="person-form"></div>
    `;
  }
}
