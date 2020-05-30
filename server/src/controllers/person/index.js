import personService from '../../use-cases/person';
import makePostPerson from './post-person';
import makePatchPerson from './patch-person';
import makeGetPeople from './get-people';
import makeDeletePerson from './delete-person';
const { addPerson, editPerson, findPeople, removePerson } = personService;

const postPerson = makePostPerson({ addPerson });
const patchPerson = makePatchPerson({ editPerson });
const getPeople = makeGetPeople({ findPeople });
const deletePerson = makeDeletePerson({ removePerson });

const personController = Object.freeze({
  postPerson,
  patchPerson,
  getPeople,
  deletePerson,
});

export default personController;
export { postPerson, patchPerson, getPeople, deletePerson };
