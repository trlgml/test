const Redis = require('ioredis');
const Redlock = require('redlock');

const redis = new Redis({ host: '127.0.0.1', port: '6379' });

const redlock = new Redlock([redis], {
  retryCount: -1,
  retryDelay: 500,
});

redlock.on('clientError', (err) => {
  console.error('A redis error has occurred:', err);
});

const withLock = async (resource, ttl, handler) => {
  // 获得锁
  const lock = await redlock.lock(resource, ttl);
  try {
    // 处理业务
    return await handler();
  } finally {
    // 解开锁
    await lock.unlock().catch((err) => {
      console.log(err);
    });
  }
};
/**
 * 模拟sleep
 * @param {*} time
 */
const sleep = (time) => new Promise((r) => {
  setTimeout(() => {
    r('ok');
  }, time);
});

const resource = 'locks:account:322456';// key
const ttl = 6 * 1000;// 毫秒，到时间会删除锁

withLock(resource, ttl, async () => sleep(5000));
// 会一直等上面释放锁在执行，主动释放，或者到ttl的时间
withLock(resource, ttl, async () => sleep(2000));
