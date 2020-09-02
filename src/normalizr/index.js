const normalizr = require('normalizr')
const { normalize, denormalize, schema } = normalizr
console.log(schema);

const item = new schema.Entity('items');
const item = new schema.Entity('items');
// const comment = new schema.Entity('comment', {
//   firstThing: item,
//   secondThing: item,
// });

const valuesSchema = new schema.Values({

});

const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };

const result = normalize(data, valuesSchema)
console.log(result);
// const deresult = denormalize(123, comment, result.entities)
// console.log(deresult);

const a = Object.freeze({ a: 1 })
console.log(a);
a.a = 10
console.log(a);
console.log(2);