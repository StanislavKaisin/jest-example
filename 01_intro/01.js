function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) {
        console.log("Success");
      } else {
        console.error(`Value is ${value}, but expectation is ${exp}`);
      }
    },
  };
}

const sum = (a, b) => {
  // return a + b + 1;
  return a + b + 0;
};

const nativeNull = () => null;

// console.log(sum(1, 2));

// expect(sum(1, 2)).toBe(3);

module.exports = { sum: sum, nativeNull: nativeNull };
// console.log(module);
