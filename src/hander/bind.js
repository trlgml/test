Function.prototype.selfBind = function (content = {}, ...rest) {
  const _this = this;
  return function (...argvs) {
    _this.apply(content, [...rest, ...argvs]);
  };
};

const fn = function (...data) {
  console.log(this, data);
};

fn.selfBind({ a: 1 }, '123', '456')('567');
