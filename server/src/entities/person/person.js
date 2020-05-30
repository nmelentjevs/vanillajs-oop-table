export default function buildMakePerson({ Id }) {
  return function makePerson({ first, last, education, occupation } = {}) {
    if (!first || !last) {
      throw new Error('Please enter a full name!');
    }

    return Object.freeze({
      getFirstName: () => first,
      getLastName: () => last,
      getEducation: () => education,
      getOccupation: () => occupation,
    });
  };
}
