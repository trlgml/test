const each = function (ary, callback) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = ary.length; i < l; i++) {
    callback.call(ary, i, ary[i]);
  }
};
each([1, 2, 3], (i, n) => {
  console.log(i, n);
});
