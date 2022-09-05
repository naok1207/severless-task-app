export const handler = async (event, _context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      result: "success",
      event: event,
    }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  });
};
