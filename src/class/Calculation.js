
export class Calculation {

  //Serie fibonacci: secuencia numerica que empieza con los numeros 0 y 1, se suman los dos ultimos numeros para sacar el siguiente numero.

  constructor(n) {
    this.n = n;
  }

  getFinobacci() {
    return this.calculationFibonacci();
  }

  calculationFibonacci() {
    this.fibo = [0, 1];
    for (this.x = 2; this.x <= this.n; this.x++) {
      this.fibo[this.x] = this.fibo[this.x - 2] + this.fibo[this.x - 1];
    }
    return this.fibo[this.n];
  }
}