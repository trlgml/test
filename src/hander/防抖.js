// 在短时间内多次触发同一个函数，只执行最后一次。
const selfDebounce = (fn, wait = 1000, immediate = true) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    // 默认首次立即执行
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, wait);
  };
};

const fn = (data = 0) => {
  console.log(data);
};

const debounce = selfDebounce(fn, 1000, true);
debounce(1); // 执行
debounce(2); // 不会执行
debounce(3); // 执行
