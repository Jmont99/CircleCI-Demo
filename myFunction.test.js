const {sum, subtract} = require('./myFunction.js')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

test('subtract 1 from 2 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
});