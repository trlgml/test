// 函数节流指的是某个函数在一定时间间隔内只执行一次
const selfThrottle = (fn, wait) => {
  let time = 0;
  return (...args) => {
    const currentTime = +new Date();
    if (currentTime - time > wait) {
      time = currentTime;
      fn.apply(this, args);
    }
  };
};

const fn = (data = 0) => {
  console.log(data);
};

const throttle = selfThrottle(fn, 1000);
throttle(1); // 执行
throttle(2); // 不会执行
throttle(3); // 不会执行

setTimeout(() => {
  throttle(4); // 执行
}, 3000);
