require('dotenv').config();
const prefix = process.env.PREFIX

module.exports = (client) => {
  client.variables({
     prefix: prefix,
  }, "main");
}
