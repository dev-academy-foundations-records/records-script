const { superFizzbuzz } = require('./super-fizzbuzz')

describe('superFizzbuzz', () => {
  it('should return an empty array when passed an empty array', () => {
    expect(superFizzbuzz([])).toStrictEqual([])
  })

  it('should return an array of [1, 2] as is', () => {
    expect(superFizzbuzz([1, 2])).toStrictEqual([1, 2])
  })

  it("should convert numbers divisble by 3 to 'Fizz'", () => {
    expect(superFizzbuzz([3, 7])).toStrictEqual(['Fizz', 7])
  })
  it("should convert numbers divisible by 5 to 'Buzz'", () => {
    expect(superFizzbuzz([1, 5])).toStrictEqual([1, 'Buzz'])
  })

  it("should convert numbers divisible by 3 and by 5 to 'FizzBuzz'", () => {
    expect(superFizzbuzz([30])).toStrictEqual(['FizzBuzz'])
  })
})
