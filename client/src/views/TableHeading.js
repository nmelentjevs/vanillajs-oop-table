import { View } from './View';
export class PeopleTableHeading extends View {
  template() {
    return `
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Nane</th>
          <th scope="col">Last Name</th>
          <th scope="col">Occupation</th>
          <th scope="col">Education</th>
          <th scope="col">Actions</th>
        </tr>
    `;
  }
}
