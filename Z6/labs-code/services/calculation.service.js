import getExchangeRate from './currency.service.js';

import { FEE_RATE } from '../config.js';

async function calculateSettledAmount(requestAmount, currency) {
  const currencyRate = await getExchangeRate(currency);

  const requestAmountInPLN = requestAmount * currencyRate;

  const fee = requestAmountInPLN * FEE_RATE;

  return requestAmountInPLN + fee;
}

export { calculateSettledAmount };
export default calculateSettledAmount;
