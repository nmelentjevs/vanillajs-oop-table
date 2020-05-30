import makeAddPerson from './add-person';
import makeEditPerson from './edit-person';
import makeRemovePerson from './remove-person';
import makeFindPeople from './find-people';
import { personCsv } from '../../data-access';

const addPerson = makeAddPerson({ personCsv });
const editPerson = makeEditPerson({ personCsv });
const findPeople = makeFindPeople({ personCsv });
const removePerson = makeRemovePerson({ personCsv });

const personService = Object.freeze({
  addPerson,
  editPerson,
  findPeople,
  removePerson,
});

export default personService;
export { addPerson, editPerson, findPeople, removePerson };
