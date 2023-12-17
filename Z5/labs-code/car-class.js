// 3.
// Write a class that will produce car objects
// Created object should have fields: acceleration, maxSpeed, wheels
// Created object should have method getSpeed

// 4.
// Add new fields:
// id
// price
// production date
// and a method changePrice

// 5.
// Add static method that for a given object, will check if the object is a car

// 6.
// Add new field: status
// Create Car status object with acceptable statuses (NEW, USED, REFUND)
// Add method changeStatus that accepts new status as a parameter
// Add static method to check if car is after return

const CAR_STATUS = require("./const");
let count = 0;

function getId() {
  count++;
  return count;
}

class Car {
  wheels = 4;
  status = CAR_STATUS.NEW;

  constructor(acceleration, maxSpeed, price, productionDate) {
    // this.id = Date.now();
    this.id = getId();
    this.acceleration = acceleration;
    this.maxSpeed = maxSpeed;
    this.price = price;
    this.productionDate = productionDate
      ? new Date(productionDate)
      : new Date();
  }

  getSpeed(time) {
    const calculatedSpeed = this.acceleration * time;
    return calculatedSpeed >= this.maxSpeed ? this.maxSpeed : calculatedSpeed;
  }

  changePrice(newPrice) {
    if (typeof newPrice !== "number") {
      throw new Error("Price should be a number!");
    }
    this.price = newPrice;
  }

  changeStatus(newStatus) {
    const acceptableStatuses = Object.values(CAR_STATUS);
    if (!acceptableStatuses.includes(newStatus)) {
      throw new Error("Incorrect status");
    }
    this.status = newStatus;
  }

  static isCar(inputObj) {
    return inputObj instanceof Car;
  }

  static isRefund(car) {
    if (!Car.isCar(car)) {
      throw new Error("Input should be a car!");
    }

    return car.status === CAR_STATUS.REFUND;
  }
}

module.exports = Car;
