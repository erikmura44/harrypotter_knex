var environment = 'development';
// targets development information from knexfile.js
var config = require('../knexfile')[environment];
//require knexfile.js, using the environment variable
module.exports = require('knex')(config);
//require knex module, use configuration we just built out
