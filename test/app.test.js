const { sum, subtract, multiply, divide, isEven, isPositive } = require('../src/app');

// SUM TESTS
test('adds 2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('adds -5 + 10 = 5', () => {
    expect(sum(-5, 10)).toBe(5);
});

test('adds 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
});

// SUBTRACT TESTS
test('subtracts 10 - 5 = 5', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('subtracts 5 - 10 = -5', () => {
    expect(subtract(5, 10)).toBe(-5);
});

// MULTIPLY TESTS
test('multiplies 3 * 4 = 12', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('multiplies -2 * 5 = -10', () => {
    expect(multiply(-2, 5)).toBe(-10);
});

test('multiplies 0 * 100 = 0', () => {
    expect(multiply(0, 100)).toBe(0);
});

// DIVIDE TESTS
test('divides 20 / 4 = 5', () => {
    expect(divide(20, 4)).toBe(5);
});

test('divides 15 / 3 = 5', () => {
    expect(divide(15, 3)).toBe(5);
});

test('divides by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow("Division by zero not allowed");
});

// IS EVEN TESTS
test('checks 4 is even', () => {
    expect(isEven(4)).toBe(true);
});

test('checks 7 is not even', () => {
    expect(isEven(7)).toBe(false);
});

test('checks 0 is even', () => {
    expect(isEven(0)).toBe(true);
});

// IS POSITIVE TESTS
test('checks 5 is positive', () => {
    expect(isPositive(5)).toBe(true);
});

test('checks -5 is not positive', () => {
    expect(isPositive(-5)).toBe(false);
});

test('checks 0 is not positive', () => {
    expect(isPositive(0)).toBe(false);
});

// FAIL CASE FOR DEMO
test('adds 2 + 2 = 5 (FAIL CASE)', () => {
    expect(sum(2, 2)).toBe(5); // This will fail
});
