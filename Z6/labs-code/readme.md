# Payment App

## Requirements

1. Payment data comes in

**Payment creation DTO**

```typescript
interface PaymentCreationDTO {
  client_id: String;
  request_amount: Number;
  currency: String;
}

const example = {
  client_id: '123',
  request_amount: 100,
  currency: 'USD',
};
```

2. We create payment entity

**Payment entity**

```typescript
interface Payment {
  id: String;
  client_id: String;
  request_amount: Number;
  settled_amount: Number;
  currency: String;
  creation_date: Date;
  payment_date?: Date;
  status: String;
}

const example = {
  id: '321',
  client_id: '123',
  request_amount: 100,
  settled_amount: 425,
  currency: 'USD',
  creation_date: '2024-03-08T12:00:00Z',
  payment_date: '2024-03-08T14:00:00Z',
  status: 'SUCCESS',
};
```

3. Calculate amount based on formula (including currency exchange rate and fee) - in PLN

**Payment calculation service**

```javascript
const settledAmount = request_amount * exchangeRate;
const fee = settledAmount * feeRate;
```

[Currency rate API](https://currency-rate-cache.vercel.app/rate?base={BASE_CURRENCY}&symbol={CURRENCIES})

4. Save payment entity to repository

As a storage use simple array in memory.

5. Payment completed request comes in

**Payment confirmation DTO**

```typescript
interface PaymentConfirmationDTO {
  transaction_id: String;
}

const example = {
  transaction_id: '321cde',
};
```

Transaction should be marked as SUCCESS and payment_date should be set to current date.

6. Display module

Display data in a readable format.

7. Add filtering to display module
