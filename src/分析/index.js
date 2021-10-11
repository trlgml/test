const superagent = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');

superagent
  .get('http://www.5151sc.com/income-77.html')
  .end((error, response) => {
    // 获取页面文档数据
    const content = response.text;
    // cheerio也就是nodejs下的jQuery  将整个文档包装成一个集合，定义一个变量$接收
    const $ = cheerio.load(content);
    // 定义一个空数组，用来接收数据
    const result = [];
    // 分析文档结构  先获取每个li 再遍历里面的内容(此时每个li里面就存放着我们想要获取的数据)
    $('#cika tr').each((index, value) => {
      const address = $(value).find('td');
      const obj = {};
      address.each((textIndex, text) => {
        if (textIndex === 1) {
          obj.image = $(text).find('div').attr('data-original');
        }
        obj[textIndex] = $(text).text();
      });
      result.push(obj);
    });
    // // 将数组转换成字符串
    fs.writeFile('jnb.json', JSON.stringify(result), 'utf-8', (error) => {
      // 监听错误，如正常输出，则打印null
      if (error == null) {
        console.log('恭喜您，数据爬取成功!请打开json文件，先Ctrl+A，再Ctrl+K,最后Ctrl+F格式化后查看json文件(仅限Visual Studio Code编辑器)');
      }
    });
  });
