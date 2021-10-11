const selfDeepCopy = (object) => {
  const target = {};
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (typeof element === 'object') {
        target[key] = selfDeepCopy(object[key]);
      }
      target[key] = object[key];
    }
  }
  return target;
};

const obj = {
  a: 1,
  b: { k: 1 },
  c: [1, 2],
  d: () => {

  },
  e: null,
  f: Symbol('f'),
  g: 'www',
  h: true,
  i: undefined,
};

console.log(selfDeepCopy(obj));
console.log(JSON.stringify(obj, null, 2));
console.log(Object.assign(obj));
