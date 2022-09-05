export const main = async (event, context, callback) => {
  console.log("--- Sample Log ---");
  console.log("event: ", event);
  console.log("context: ", context);
  console.log("callback: ", callback);

  callback(null, event);
};
