const sum = (a, b) => a + b

describe('Testing sum.js', () => {
  test('Check that 1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
  
  test('Check that 2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})