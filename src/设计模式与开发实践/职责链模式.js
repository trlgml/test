const order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true && stock > 0) {
    console.log('500 元定金预购，得到 100 优惠券');
  } else {
    return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};

const order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true && stock > 0) {
    console.log('200 元定金预购，得到 50 优惠券');
  } else {
    return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};

const orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券');
  } else {
    console.log('手机库存不足');
  }
};

const Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
};
Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor;
};
Chain.prototype.passRequest = function () {
  const ret = this.fn.apply(this, arguments);
  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments);
  }
  return ret;
};

const chainOrder500 = new Chain(order500);
const chainOrder200 = new Chain(order200);
const chainOrderNormal = new Chain(orderNormal);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);
chainOrder500.passRequest(1, true, 500);
chainOrder500.passRequest(2, true, 500);
chainOrder500.passRequest(3, true, 500);
chainOrder500.passRequest(1, false, 0);

// const order300 = function () { // 具体实现略
// };
// chainOrder300 = new Chain(order300);
// chainOrder500.setNextSuccessor(chainOrder300);
// chainOrder300.setNextSuccessor(chainOrder200);
