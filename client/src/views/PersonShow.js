import { View } from './View';
export class PersonShow extends View {
  template() {
    return `
      <div>
        <h1>Add Person Detail</h1>
      </div>
    `;
  }
}

{
  /* <div>Person Name: ${this.model.get('first')}</div>
<div>Person Age: ${this.model.get('last')}</div>
<div>Person Name: ${this.model.get('gender')}</div>
<div>Person Age: ${this.model.get('occupation')}</div>
<div>Person Name: ${this.model.get('education')}</div> */
}
