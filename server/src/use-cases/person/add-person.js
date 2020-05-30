import makePerson from '../../entities/person';
export default function makeAddPerson({ personCsv }) {
  return async function addPerson({ ...personInfo }) {
    const person = await makePerson({ ...personInfo });

    return personCsv.insert({
      last: person.getLastName(),
      first: person.getFirstName(),
      education: person.getEducation(),
      occupation: person.getOccupation(),
    });
  };
}
