const axios = require('axios');
const { query } = require('gql-query-builder');

axios.post('http://localhost:3002', query({
  operation: 'tests',
  fields: ['id', 'name'],
})).then((result) => {
  console.log(result.data);
}).catch((err) => {

});
