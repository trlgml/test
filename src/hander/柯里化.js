const selfCurrying = (fn) => {
  const len = fn.length;
  const curry = (...args) => {
    if (args.length >= len) {
      return fn(...args);
    }
    return (...arg) => curry(...args, ...arg);
  };
  return curry;
};

const fn = (a, b, c, d, e) => {
  console.log(a, b, c, d, e);
};
const currying = selfCurrying(fn);

currying(1, 2, 3, 4, 5);
currying(1, 2, 0, 4)(5);
currying(1, 9, 3)(4, 5);
currying(1, 2, 3)(4)(5);
currying(1, 2)(6, 4, 5);
currying(1, 2)(3)(10)(5);
currying(5)(2)(3)(4)(5);
