/**
 * Returns true if the date is before today
 * @param date
 */
export function isBeforeToday(date: Date) {
  const today = new Date();
  const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return dateOnly < todayOnly;
}
