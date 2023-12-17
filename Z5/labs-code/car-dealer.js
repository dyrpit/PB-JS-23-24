// 7.
// Create a class - Car Dealer
// Class should have name field
// It should have a private field where cars are stored
// A getter availableCars to see all available cars for sell

// 8.
// Add new methods
// A method to add a car (that would check if the input object is a car)
// A method to remove a car by ID
// A getter that would return the total price of all cars in the storage

// 9.
// Add new methods
// A method to accept car return, method should mark car as refund
// Add a static method, that would check if a given car is a refund car (it will have ”REFUND” status)

// 10.
// Add new method orderFromFactory
// Method should be asynchronous
// Method should accept cars amount to order as a parameter
// Handle error in this method in case something goes wrong

// 11.
// Add new method sell
// Method should accept id as a parameter end return found car
// Method should also remove car from storage, create transaction history entry in new private transactionsHistory field
// Method should include discount from base car price

const Car = require("./car-class");
const { orderCars } = require("./fake-api");
const CAR_STATUS = require("./const");

class CarDealer {
  #carsStorage;
  #transactionsHistory;

  constructor(name) {
    this.#carsStorage = [];
    this.#transactionsHistory = [];
    this.name = name;
  }

  acceptCarReturn(car) {
    car.changeStatus(CAR_STATUS.REFUND);
    this.#carsStorage.push(car);
  }

  addCar(newCar) {
    if (!Car.isCar(newCar)) {
      throw new Error("Input should be a car!");
    }

    this.#carsStorage.push(newCar);
  }

  removeCar(id) {
    this.#carsStorage = this.#carsStorage.filter((car) => car.id !== id);
  }

  getAvailableCars() {
    return this.#carsStorage;
  }

  async orderCarsFromFactory(carsAmount) {
    try {
      const orderedCars = await orderCars(carsAmount);
      orderedCars.forEach((car) => this.addCar(car));
      return this.#carsStorage;
    } catch (e) {
      console.error(e);
      return this.#carsStorage;
    }
  }

  sell(id) {
    const carToSell = this.#carsStorage.find((car) => car.id === id);

    if (!carToSell) {
      throw new Error("Sorry this car has already been sold");
    }

    this.removeCar(id);
    this.#useDicount(carToSell);
    this.#transactionsHistory.push(carToSell);

    return carToSell;
  }

  get availableCars() {
    return this.#carsStorage;
  }

  get totalCarsPrice() {
    return this.#carsStorage.reduce((sum, car) => {
      return (sum += car.price);
    }, 0);
  }

  static isCarAfterRefund(car) {
    return Car.isRefund(car);
  }

  #useDicount(car) {
    if (car.price >= 200_000) {
      car.changePrice(car.price * 0.9);
    } else if (car.price >= 150_000) {
      car.changePrice(car.price * 0.95);
    } else {
      car.changePrice(car.price * 0.98);
    }
  }
}
