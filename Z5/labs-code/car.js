// Write a class that will produce car objects

class Car {
  acceleration;
  maxSpeed;
  wheels = 4;

  constructor(acceleration, maxSpeed) {
    this.acceleration = acceleration;
    this.maxSpeed = maxSpeed;
  }

  getSpeed(time) {
    const calculatedSpeed = this.acceleration * time;
    return calculatedSpeed >= this.maxSpeed ? this.maxSpeed : calculatedSpeed;
  }
}

const car = new Car(10, 200);
console.log(car.getSpeed(5));
