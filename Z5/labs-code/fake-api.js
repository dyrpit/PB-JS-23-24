const Car = require("./car-class");

function orderCars(carsQuantity = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return carsQuantity > 5
        ? reject("Order rejected!")
        : resolve(
            [...Array(carsQuantity)].map((_) => new Car(10, 200, 125_000))
          );
    }, 5000);
  });
}

module.exports = { orderCars };
