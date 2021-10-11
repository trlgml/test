function selfNew(fn, ...rest) {
  const obj = Object.create(fn.prototype);
  const rel = fn.apply(obj, rest);
  return rel instanceof Object ? rel : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = selfNew(Person, 'G', 31);
console.log(person);
console.log(person.name);
console.log(person.age);
