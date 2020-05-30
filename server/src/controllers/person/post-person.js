export default function makePostPerson({ addPerson }) {
  return async function postPerson(httpRequest) {
    try {
      const { ...personInfo } = httpRequest.body;

      const people = await addPerson({ ...personInfo });
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
