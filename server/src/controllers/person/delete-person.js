export default function makeDeletePerson({ removePerson }) {
  return async function deletePerson(httpRequest) {
    try {
      const { id } = httpRequest.params;

      const people = await removePerson(id);
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
