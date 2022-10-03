export const success = (message = "") => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({
      message: message || "OK",
    }),
  };
  console.log({ response });
  return response;
};

export const error = (err, message = "") => {
  const response = {
    statusCode: 500,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({
      message: message || "NG",
    }),
  };
  console.log(err);
  console.log({ response });
  return response;
};
