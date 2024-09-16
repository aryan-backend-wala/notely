import { DateTime } from "luxon";

export function handleISOString(string){
  const dateTime = DateTime.fromISO(string)
  return dateTime.toFormat('MMMM dd, yyyy');
}