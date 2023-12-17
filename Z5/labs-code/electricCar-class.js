// 12.
// Create a class - ElectricCar that will extend the Car class
// Add a new field: batteryCapacity

// 13.
// Add getRemainingBattery method that will return % battery left after n amount of seconds
// This method should use a private method that will calculate battery drainage
// per second (let’s say its acceleration * batteryCapacity / 100000)

const Car = require("./car-class");

class ElectricCar extends Car {
  constructor(acceleration, maxSpeed, price, productionDate, batteryCapacity) {
    super(acceleration, maxSpeed, price, productionDate);
    this.batteryCapacity = batteryCapacity;
  }

  getRemainingBattery(time) {
    return (
      ((this.batteryCapacity - this.#calculateBatteryDrainagePerSec() * time) /
        this.batteryCapacity) *
      100
    );
  }

  #calculateBatteryDrainagePerSec() {
    return (this.batteryCapacity * this.acceleration) / 100000;
  }
}
