export default function makeRemovePerson({ personCsv }) {
  return async function editPerson(id) {
    if (!id) {
      throw new Error('You must supply an id.');
    }

    const people = await personCsv.remove(id);
    return people;
  };
}
