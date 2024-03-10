import displayPayments from './services/display.service.js';
import { createPayment, completePayment } from './services/payment.service.js';
import { validateDTO } from './services/validator.service.js';
import * as RepositoryService from './services/repository.service.js';

const mockedPaymentDTOs = [
  {
    request_amount: 100,
    currency: 'USD',
    user_id: 'user-1',
  },
  {
    request_amount: 150,
    currency: 'USD',
    user_id: 'user-2',
  },
  {
    request_amount: 75,
    currency: 'USD',
    user_id: 'user-3',
  },
];

const paymentDtoSchema = {
  request_amount: 'number',
  currency: 'string',
  user_id: 'string',
};

async function processIncomingPayment(paymentDTO) {
  validateDTO(paymentDtoSchema, paymentDTO);
  const newPayment = await createPayment(paymentDTO);
  RepositoryService.savePayment(newPayment);
  return newPayment;
}

function processPaymentSuccess(paymentConfimrationDTO) {
  const payment = RepositoryService.getPayment(paymentConfimrationDTO.transaction_id);

  completePayment(payment);

  return payment;
}

Promise.all(
  mockedPaymentDTOs.map((paymentDTO) =>
    processIncomingPayment(paymentDTO).then((payment) => {
      processPaymentSuccess({ transaction_id: payment.id });
    })
  )
).then(() => {
  displayPayments({ user_id: 'user-1' });
});
