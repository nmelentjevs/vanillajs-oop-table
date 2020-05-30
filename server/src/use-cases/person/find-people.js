export default function makeFindPeople({ personCsv }) {
  return async function findPeople() {
    const people = await personCsv.findAll();

    if (!people) {
      throw new RangeError('Data not found.');
    }

    return people;
  };
}
