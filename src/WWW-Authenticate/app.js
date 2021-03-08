const http = require('http')

const server = http.createServer()

server.on('request', function (request, response) {
  // Buffer.from('MTox', 'base64').toString()
  // Buffer.from('1:1').toString('base64')
  const { authorization = '' } = request.headers
  const [, base64] = authorization.split(' ')

  const userName = 'admin'
  const password = 'admin'
  const realBase64 = Buffer.from(`${userName}:${password}`).toString('base64')

  const status = realBase64 === base64 ? 200 : 401

  response.writeHead(status, {
    "WWW-Authenticate": "Basic realm='.'",
    "Content-Type": "text/plain"
  });
  response.write("ok");
  response.end()
})

server.listen(3000, function () {
  console.log('启动成功')
})