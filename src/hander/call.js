Function.prototype.selfCall = function (content = {}, ...rest) {
  const fn = Symbol('fn');
  content[fn] = this;
  const result = content[fn](...rest);
  delete content[fn];
  return result;
};

const fn = function (...data) {
  console.log(this, data);
};

fn.selfCall({ a: 1 }, '123', '456');
