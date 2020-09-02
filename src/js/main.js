require.config({
  baseUrl: 'js/lib',
  paths: {
    jquery: 'jquery.min',
    t: 't',
  },
});

// 执行基本操作
require(['jquery', 't'], ($, t) => {
  // some code here
});
