const fs = require('fs')
const path = require('path')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const privateKey = fs.readFileSync(path.join(__dirname, 'rsa_private_key.pem'))
const publicKey = fs.readFileSync(path.join(__dirname, 'rsa_public_key.pem'))
console.log(privateKey);
console.log(publicKey);

const encodeData = crypto.publicEncrypt(
  publicKey,
  Buffer.from('aaaa'),
).toString('base64');
console.log('encode: ', encodeData);

//私钥解密
const decodeData = crypto.privateDecrypt(
  privateKey,
  Buffer.from(encodeData, 'base64'),
);
console.log('decode: ', decodeData.toString());


var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });
console.log(token);
jwt.verify(token, publicKey, function (err, decoded) {
  console.log(decoded.foo) // bar
});