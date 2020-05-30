export default function makeEditPerson({ personCsv }) {
  return async function editPerson({ id, ...changes } = {}) {
    if (!id) {
      throw new Error('You must supply an id.');
    }

    const people = await personCsv.update({
      id,
      ...changes,
    });

    return people;
  };
}
