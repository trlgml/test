const fetch = require('node-fetch');

// fetch('https://cc.oceanengine.com/creative_app_server/api/inspiration/advert/detail', {
fetch('http://localhost:3001/v2/test', {
  headers: {
    cookie: 'accessToken=1234abc; userId=1234',
    accept: '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'x-csrftoken': 'acd1qnIt0EUoDFqMR91unH9jsnz3pYaF',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001227) NetType/WIFI Language/zh_CN',
    'content-type': 'application/json;charset=utf-8',
    origin: 'https://cc.oceanengine.com',
    Host: 'cc.oceanengine.com',
  },
  body: JSON.stringify({ vid: 'v03033f10000btlg5g6nvj8cr1d5bkc0' }),
  method: 'POST',
  mode: 'cors',
}).then(async (result) => {
  const json = await result.json();

  console.log(json.data.video_info.video_url);
}).catch((err) => {
  console.log(2);
});
