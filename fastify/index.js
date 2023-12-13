// Require the framework and instantiate it
require('dotenv').config()
const initApp = require("./system");
const routes = require("./routes");


const fastify = require('fastify')({ logger: true })
console.log(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`)
fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  url: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`
})
// Declare a route
fastify.get('/', function handler(request, reply) {
  reply.send({ hello: 'world' })
})

// initApp(fastify);
routes(fastify);


// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})