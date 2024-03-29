const strategies = {
  S(salary) {
    return salary * 4;
  },
  A(salary) {
    return salary * 3;
  },
  B(salary) {
    return salary * 2;
  },
};
const calculateBonus = function (level, salary) {
  return strategies[level](salary);
};
console.log(calculateBonus('S', 20000));
console.log(calculateBonus('A', 10000));
