class Calculator {
  calculate(x, y, operation) {
    switch (operation) {
      case 'add':
        return x + y;
      case 'sub':
        return x - y;
      case 'div':
        return x / y;
      case 'mult':
        return x * y;
      default:
        return NaN;
    }
  }
}

const calculator = new Calculator();

console.log(calculator.calculate(1, 2, 'add'));
console.log(calculator.calculate(1, 2, 'div'));

class NewCalculator {
  add(x, y) {
    return x + y;
  }

  sub(x, y) {
    return x - y;
  }

  div(x, y) {
    return x / y;
  }

  mult(x, y) {
    return x * y;
  }
}

const newCalculator = new NewCalculator();

class Adapter {
  #calculator = new NewCalculator();

  calculate(x, y, operation) {
    switch (operation) {
      case 'add':
        return this.#calculator.add(x, y);
      case 'sub':
        return this.#calculator.sub(x, y);
      case 'div':
        return this.#calculator.div(x, y);
      case 'mult':
        return this.#calculator.mult(x, y);
      default:
        return NaN;
    }
  }
}

const adapter = new Adapter();

console.log(adapter.calculate(1, 2, 'add'));
console.log(adapter.calculate(1, 2, 'div'));
