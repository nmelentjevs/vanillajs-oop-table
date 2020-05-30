export default function makePersonCsv({ readCsv, writeCsv, dataPath }) {
  return Object.freeze({
    findAll,
    insert,
    remove,
    update,
  });

  async function findAll() {
    const people = await readCsv(dataPath);
    return people.sort((a, b) => a.id - b.id);
  }

  async function insert(personInfo) {
    let people = await readCsv(dataPath);
    const id = people.sort((a, b) => b.id - a.id)[0].id;
    people.push({ id: parseInt(id) + 1, ...personInfo });
    await writeCsv(dataPath, people);
    return people;
  }
  async function update(personInfo) {
    let people = await readCsv(dataPath);
    const updated = people.map((p) => {
      if (p.id === personInfo.id) {
        return { ...p, ...personInfo };
      }
      return p;
    });
    await writeCsv(dataPath, updated);
    return updated;
  }

  async function remove(id) {
    let people = await readCsv(dataPath);
    const updated = people.filter((p) => p.id !== id);
    await writeCsv(dataPath, updated);
    return updated;
  }
}
