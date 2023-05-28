function sum(a, b) {
  return a + b;
}

describe('sum', () => {
  beforeAll(() => {
    // будет выполняться перед всеми тестами
  });

  beforeEach(() => {
    // будет выполняться перед каждым тестом
  });

  it('should add two numbers', function () {
    expect(sum(1, 2)).toBeDefined();
    expect(sum(1, 2)).toBe(5);
    expect(sum(2, 4)).toBe(6);
  });
});

// 🕮 <cyberbiont> a4a01b26-6683-425f-9f6a-1196485b3659.md

// function erraneous() {
//   if (true !== false) throw new Error('error happened');
// }

// describe('erraneous', () => {
//   it('throws exception', () => {
//     expect(erraneous().toThrow());
//   });
// });
