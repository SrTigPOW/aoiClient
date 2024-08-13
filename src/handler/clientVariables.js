// Loads the environment variables defined in the `.env` file using the `dotenv` package.
// If you're not familiar with this, it's advisable not to modify it.
require('dotenv').config();
const prefix = process.env.PREFIX

module.exports = (client) => {
  client.variables({
     prefix: prefix,
  }, "main");
}
