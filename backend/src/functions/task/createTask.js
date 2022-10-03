import { create } from "../../utils/crud/create";

export const handler = async (event, _context, _callback) => {
  const body = JSON.parse(event.body);
  const item = {
    title: body.title,
    status: 0,
    toDate: body?.toDate || "",
    description: body?.description || "",
  };
  return await create(event, process.env.DYNAMODB_TASK_TABLE, item);
};
