/**
 * 获取格式化的日期, 例如: 今天, 昨天, 2020-01-01
 * @param dateTime
 */
export function getFormatDate(dateTime: Date) {

  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const weekday = dateTime.toLocaleString('zh-CN', options);

  return `${getDate(dateTime)}, ${weekday}`;
}

function getDate(date: Date) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (date.getDate() === today.getDate()) {
    return '今天';
  } else if (date.getDate() === yesterday.getDate()) {
    return '昨天';
  } else {
    return date.toLocaleDateString();
  }
}
