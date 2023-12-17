// Create function to produce car objects
// Created object should have properties: acceleration and maxSpeed
// The object should have a method: getSpeed that accepts time in seconds as parameter
// The method should be available to every created object

function Car(acceleration, maxSpeed) {
  this.acceleration = acceleration;
  this.maxSpeed = maxSpeed;
}

Car.prototype.getSpeed = function (time) {
  const calculatedSpeed = this.acceleration * time;
  return calculatedSpeed >= this.maxSpeed ? this.maxSpeed : calculatedSpeed;
};

const car = new Car(10, 200);
car.getSpeed(3);

const carWithoutNew = Car(10, 200);
carWithoutNew.getSpeed(3);
