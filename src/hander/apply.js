Function.prototype.selfApply = function (content = {}, argvs) {
  const fn = Symbol('fn');
  content[fn] = this;
  const result = content[fn](...argvs);
  delete content[fn];
  return result;
};

const fn = function (...data) {
  console.log(this, data);
};

fn.selfApply({ a: 1 }, ['123', '456']);
