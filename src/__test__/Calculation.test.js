import { Calculation } from "../class/Calculation";


describe('Conjunto de test para calcular serie fibonacci', () => {

  test('Validar serie fibonacci con numero 0', () => {
    const objFibonacci = new Calculation(0);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(0);
  });

  test('Validar serie fibonacci con numero 1', () => {
    const objFibonacci = new Calculation(1);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(1);
  });

  test('Validar serie fibonacci con numero 2', () => {
    const objFibonacci = new Calculation(2);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(1);
  });
  test('Validar serie fibonacci con numero 3', () => {
    const objFibonacci = new Calculation(3);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(2);
  });

  test('Validar serie fibonacci con numero 4', () => {
    const objFibonacci = new Calculation(4);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(3);
  });

  test('Validar serie fibonacci con numero 5', () => {
    const objFibonacci = new Calculation(5);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(5);
  });

  test('Validar serie fibonacci con numero 6', () => {
    const objFibonacci = new Calculation(6);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(8);
  });

  test('Validar serie fibonacci con numero 7', () => {
    const objFibonacci = new Calculation(7);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(13);
  });

  test('Validar serie fibonacci con numero 8', () => {
    const objFibonacci = new Calculation(8);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(21);
  });

  test('Validar serie fibonacci con numero 9', () => {
    const objFibonacci = new Calculation(9);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(34);
  });

  test('Validar serie fibonacci con numero 10', () => {
    const objFibonacci = new Calculation(10);
    const value = objFibonacci.getFinobacci();
    expect(value).toBe(55);
  });

})