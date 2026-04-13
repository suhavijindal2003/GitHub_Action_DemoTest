const sum = require('../src/app');

test('adds 2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('adds 2 + 2 = 5 (FAIL CASE)', () => {
    expect(sum(2, 2)).toBe(5); // This will fail
});