class Calculator {
  constructor() {
    //properties
    this.pi = 3.141592653589793;
    this.e = 2.718281828459045;
  }

  //getter

  //methods

  ratio(x, y, width) {
    const widthRatio = width / x;
    const heightRatio = widthRatio * y;
    return `height is ${heightRatio} on ratio ${x}:${y}`;
  }

  percentage(x, y) {
    return (x * y) / 100;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  muliply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (y === 0) return "Warning: Divisor is zero";
    return x / y;
  }

  modulation(x, y) {
    if (y === 0) return "Warning: Divisor is zero";
    return x % y;
  }

  elevate(x, y) {
    return x ** y;
  }

  sqrt(x) {
    return Math.sqrt(x);
  }
}

const calculate = new Calculator();

console.log(calculate.pi);
console.log(calculate.e);

console.log(calculate.add(9, 8));
console.log(calculate.subtract(9, 7));
console.log(calculate.muliply(78, 877));
console.log(calculate.divide(78, 8));
console.log(calculate.modulation(56, 9));
console.log(calculate.elevate(2, 3));
console.log(calculate.sqrt(16));
