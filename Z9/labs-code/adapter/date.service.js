import { differenceInHours } from 'date-fns';
import dayjs from 'dayjs';

// function getTimeDifferenceInHours(dateStart, dateEnd) {
//   return differenceInHours(dateStart, dateEnd);
// }

function getTimeDifferenceInHours(dateStart, dateEnd) {
  const date1 = dayjs(dateStart);
  const date2 = dayjs(dateEnd);
  return date1.diff(date2, 'hour');
}

export { getTimeDifferenceInHours };
