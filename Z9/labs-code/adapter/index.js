import { getTimeDifferenceInHours } from './date.service.js';

const datePast = new Date('2022-01-24');
const dateToday = new Date();

const differenceInHours = getTimeDifferenceInHours(datePast, dateToday);
console.log(differenceInHours);
