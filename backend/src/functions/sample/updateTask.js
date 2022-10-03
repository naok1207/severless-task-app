import { update } from "../../utils/crud/update";

export const handler = async (event, _context, _callback) => {
  const body = JSON.parse(event.body);
  const pk = body.pk;

  const ExpressionAttributeNames = {
    "#t": "title",
    "#s": "status",
    "#a": "toDate",
    "#d": "description",
  };

  const ExpressionAttributeValues = {
    ":newTitle": body.title,
    ":newStatus": body?.status || 0,
    ":newToDate": body?.toDate || "2022-01-01",
    ":newDescription": body?.description,
  };

  const UpdateExpression =
    "SET #t = :newTitle, #s = :newStatus, #a = :newToDate, #d = :newDescription";

  return await update(
    event,
    process.env.DYNAMODB_TASK_TABLE,
    pk,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    UpdateExpression
  );
};
