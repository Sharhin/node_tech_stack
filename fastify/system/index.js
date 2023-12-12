const registerDB = require('./db')

const initApp = (fastify) => {
  registerDB(fastify);
}

module.exports = initApp; 