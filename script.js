const diff = (a, b) => {
  return a > b ? a - b : b - a;
};

const prod = (a, b) => {
  return a * b;
};

const sum = (a, b) => {
  return a + b;
};

const average = (a, b, func) => {
  return sum(a, b) / 2;
};

console.log(average(10, 20, sum));
console.log(diff(10, 22));

    