import axios from 'axios';

describe('Testing /people endpoint', () => {
  it('Get people /', async () => {
    const res = await axios.get('http://localhost:4000/people');

    expect(res.status).toEqual(200);
  });
});

describe('Testing /people endpoint', () => {
  it('Adding person /', async () => {
    const before = await axios.get('http://localhost:4000/people');

    const after = await axios.post('http://localhost:4000/people', {
      first: 'Nick',
      last: 'Melon',
      education: 'Cherry School',
      occupation: 'Melon Eater',
    });
    expect(before.data.length + 1).toEqual(after.data.length);
  });
});

describe('Testing /people endpoint', () => {
  it('Deleting person /:id', async () => {
    const before = await axios.get('http://localhost:4000/people');

    const deleted = await axios.delete(
      `http://localhost:4000/people/${before.data[0].id}`
    );
    expect(before.data.length - 1).toEqual(deleted.data.length);
  });
});

describe('Testing /people endpoint', () => {
  it('Updating person /:id', async () => {
    const personData = {
      first: 'John',
      last: 'Doe',
      education: 'Very much',
      occupation: 'So wow',
    };

    const before = await axios.get('http://localhost:4000/people');
    const updated = await axios.patch(
      `http://localhost:4000/people/${before.data[0].id}`,
      personData
    );

    const updatedDetails = updated.data.find(
      (person) => person.id === before.data[0].id
    );
    // Deleting id as it's added after update
    delete updatedDetails.id;

    expect(updatedDetails).toEqual(personData);
  });
});
