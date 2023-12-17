// Hardcode a car object
// The object should have properties: acceleration and maxSpeed
// The object should have a method: getSpeed that accepts time in seconds as parameter
// The method should return us speed that the car will have after the time

const car = {
  acceleration: 10,
  maxSpeed: 200,
  getSpeed(time) {
    const calculatedSpeed = this.acceleration * time;
    return calculatedSpeed >= this.maxSpeed ? this.maxSpeed : calculatedSpeed;
  },
};

car.getSpeed(2);
