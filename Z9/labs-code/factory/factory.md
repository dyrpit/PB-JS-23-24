# Factory

Using factory design pattern, create different types of payment methods. The payment factory should have the following types of payment methods:

- Credit Card
- PayPal
- Bank Tranfer

Payment Factory should have method `createPayment`. This method should accept two parameters:

- type: string
- paymentDetails: some object

The method should return the instance of the payment method based on the type. If the type is not found, it should throw an error.

## Tasks:

1. Create PaymentFactory class. Implement the `createPayment` method on the PaymentFactory class. This method should accept a type parameter that indicates the type of payment method to be created.
2. Define three payment classes: CreditCard, PayPal and BankTransfer. Each payment class should have a constructor that accepts the necessary payment details (eg. card number, bank account, details).

For CreditCard, the constructor should accept:

- card number
- expiry date and
- cvv

For PayPal, the constructor should accept:

- email
- password

For BankTransfer, the constructor should accept:

- account number
- sort code

3. Write example usage for every payment method.
