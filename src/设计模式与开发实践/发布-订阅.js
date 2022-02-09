const salesOffices = {}; // 定义售楼处
salesOffices.clientList = {}; // 缓存列表，存放订阅者的回调函数
salesOffices.listen = function (key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn);
};

// 如果还没有订阅过此类消息，给该类消息创建一个缓存列表 // 订阅的消息添加进消息缓存列表
salesOffices.trigger = function (key, ...arg) {
  const fns = this.clientList[key] || [];
  fns.forEach((fn) => {
    fn(...arg);
  });
};
salesOffices.remove = function (key, fn) {
  const fns = this.clientList[key] || [];
  if (fns.length === 0) {
    return;
  }
  if (!fn) {
    this.clientList[key] = [];
  } else {
    fns.forEach((_fn, i) => {
      if (_fn === fn) {
        fns.splice(i, 1);
      }
    });
  }
};
const squareMeter88 = (price) => {
  console.log(`价格= ${price}`); // 输出: 2000000
};
const squareMeter110 = (price) => {
  console.log(`价格= ${price}`); // 输出: 3000000
};
salesOffices.listen('squareMeter88', squareMeter88);
salesOffices.listen('squareMeter110', squareMeter110);
salesOffices.trigger('squareMeter88', 2000000); // 发布 88 平方米房子的价格
salesOffices.trigger('squareMeter110', 3000000); // 发布 110 平方米房子的价格
salesOffices.remove('squareMeter88', squareMeter88);
salesOffices.trigger('squareMeter88', 2000000); // 发布 88 平方米房子的价格
salesOffices.trigger('squareMeter110', 3000000); // 发布 110 平方米房子的价格
