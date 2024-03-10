import { getPayments } from './repository.service.js';

function displayPayments() {
  const payments = getPayments();

  payments.forEach((payment) => {
    console.table(payment);
  });
}

export { displayPayments };
export default displayPayments;
