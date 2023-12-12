const { createRestRoutes } = require("../../utils")

function TodoRoutes(fastify) {
  const { getUrl } = createRestRoutes('/todo');
  fastify.get('/todo', async function (req, reply) {
    const todo = this.mongo.client.db('test').collection('todo');
    try {
      const id = new this.mongo.ObjectId("657870308cfc5e10e8f88151")
      return await todo.find({}).toArray();
    } catch (err) {
      console.log("err", err)
      return err
    }
  })

}

module.exports = TodoRoutes;  