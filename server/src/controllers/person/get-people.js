export default function makeGetPeople({ findPeople }) {
  return async function getPeople() {
    try {
      const people = await findPeople();

      if (!(people.length > 0)) {
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 404,
          body: {
            error: 'Data not found',
          },
        };
      }
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: people,
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      if (e.name === 'RangeError') {
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 404,
          body: {
            error: e.message,
          },
        };
      }
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
