function registerDb(fastify) {
  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    // url: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?authSource=admin`
  })
}

module.exports = registerDb;