import { View } from './View';
import { PersonForm } from './PersonForm';
import { PersonShow } from './PersonShow';
export class PersonAdd extends View {
  regionsMap() {
    return {
      personShow: '.person-show',
      personForm: '.person-form',
    };
  }
  onRender() {
    new PersonShow(this.regions.personShow, this.model).render();
    new PersonForm(this.regions.personForm, this.model).render();
  }
  template() {
    return `
        <div class="person-show"></div>
        <div class="person-form"></div>
    `;
  }
}
