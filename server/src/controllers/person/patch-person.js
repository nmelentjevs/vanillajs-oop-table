export default function makePatchPerson({ editPerson }) {
  return async function patchPerson(httpRequest) {
    try {
      const { id } = httpRequest.params;
      const { ...personInfo } = httpRequest.body;

      const toEdit = {
        id,
        ...personInfo,
      };
      const people = await editPerson(toEdit);
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
