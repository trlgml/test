// 多态 给不同对象发送相同消息，可以做出不同的反馈

function make(animal) {
  animal.sound();
}
const Duck = function () { };
Duck.prototype.sound = function () {
  console.log('Duck make');
};
const Chicken = function () { };

Chicken.prototype.sound = function () {
  console.log('Chicken make');
};

make(new Duck());
make(new Chicken());

// 封装
const myObject = (function () {
  // eslint-disable-next-line no-underscore-dangle
  const __name = 'sven'; // 私有(private)变量
  return {
    getName() {
      return __name;
    },
  };
}());

console.log(myObject.getName());
// eslint-disable-next-line no-underscore-dangle
console.log(myObject.__name);

// 继承
