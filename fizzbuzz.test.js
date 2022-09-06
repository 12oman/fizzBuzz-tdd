// import testing lib
// import fizzbuzz
const index = require('./index')

test('test setup working', () => {
    expect(true).toBeTruthy()
  })

// 
test('when given the number 3 fizzbuzz should return fizz', () => {
    expected = "fizz"
    actual = index.fizzBuzz(3)
    expect(actual).toBe(expected)
  })
  test('when given the number 4 fizzbuzz should return the number 4', () => {
    expected = 4
    actual = index.fizzBuzz(4)
    expect(actual).toBe(expected)
  })

// when given the numer 5 fizzbuzz should return buzz
// when given the number 15 fizzbuzz should return fizzbuzz
