import { update } from "../../utils/crud/update";

export const handler = async (event, _context, _callback) => {
  return await update(event, process.env.DYNAMODB_TASK_TABLE);
};
