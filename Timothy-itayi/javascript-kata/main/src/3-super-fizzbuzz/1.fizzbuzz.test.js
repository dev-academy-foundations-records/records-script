const { fizzbuzz } = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it("should return 'FizzBuzz' when passed a number divisible by 3 and by 5", () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
    expect(fizzbuzz(105)).toBe('FizzBuzz')
  })

  it("should return 'Fizz' when passed a number divisible by 3", () => {
    expect(fizzbuzz(6)).toBe('Fizz')
    expect(fizzbuzz(42)).toBe('Fizz')
  })

  it("should return 'Buzz' when passed a number divisible by 5", () => {
    expect(fizzbuzz(5)).toBe('Buzz')
    expect(fizzbuzz(40)).toBe('Buzz')
  })

  it('should return the number you pass it if not divisible by 3 or 5', () => {
    expect(fizzbuzz(7)).toBe(7)
    expect(fizzbuzz(17)).toBe(17)
  })
})
