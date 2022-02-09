// 普通
// const Flower = function () { };
// const xiaoming = {
//   sendFlower(target) {
//     const flower = new Flower();
//     target.receiveFlower(flower);
//   },
// };
// const A = {
//   receiveFlower(flower) {
//     console.log(`收到花 ${flower}`);
//   },
// };
// xiaoming.sendFlower(A);

// 代理模式一

// const Flower = function () { };
// const xiaoming = {
//   sendFlower(target) {
//     const flower = new Flower();
//     target.receiveFlower(flower);
//   },
// };
// const A = {
//   receiveFlower(flower) {
//     console.log(`收到花 ${flower}`);
//   },
// };
// const B = {
//   receiveFlower(flower) {
//     A.receiveFlower(flower);
//   },
// };
// xiaoming.sendFlower(B);

// 代理模式二
const Flower = function () { };
const xiaoming = {
  sendFlower(target) {
    target.receiveFlower();
  },
};
const A = {
  receiveFlower(flower) {
    console.log(`收到花 ${flower}`);
  },
  listenGoodMood(fn) {
    setTimeout(() => { // 假设 10 秒之后 A 的心情变好
      fn();
    }, 10000);
  },
};
const B = {
  receiveFlower() {
    A.listenGoodMood(() => { // 监听a状态，之后买花送花
      const flower = new Flower();
      A.receiveFlower(flower);
    });
  },
};
xiaoming.sendFlower(B);
