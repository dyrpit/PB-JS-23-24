const payments = [];

function savePayment(payment) {
  payments.push(payment);
}

function getPayment(paymentId) {
  const payment = payments.find((p) => p.id === paymentId);

  if (!payment) {
    throw new Error('Payment not found');
  }

  return payment;
}

function getPayments() {
  return payments;
}

export { savePayment, getPayment, getPayments };
