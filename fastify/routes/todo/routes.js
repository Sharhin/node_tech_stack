const { createRestRoutes } = require("../../utils")

function TodoRoutes(fastify) {
  const { getUrl, getOneUrl, postUrl, putUrl, deleteUrl } = createRestRoutes('/todo');
  fastify.get(getUrl, async function (req, reply) {
    const todo = this.mongo.db.collection('todo');
    try {
      return await todo.find({}).toArray();
    } catch (err) {
      console.log("err", err)
      return err
    }
  })

  fastify.get(getOneUrl, async function (req, reply) {
    const todo = this.mongo.db.collection('todo');
    try {
      const _id = new this.mongo.ObjectId(req.params.id)
      return await todo.findOne({ _id });
    } catch (err) {
      console.log("err", err)
      return err
    }
  })

  fastify.route({
    method: 'POST',
    url: postUrl,
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: "string" },
          description: { type: "string" }
        },
      },
    },
    handler: async function (req, res) {
      const { name, description } = req.body;
      const todo = this.mongo.db.collection('todo');
      const result = await todo.insertOne({
        name, description
      });
      return await todo.findOne({ _id: result.insertedId });
    }
  })

  fastify.route({
    method: 'PUT',
    url: putUrl,
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: "string" },
          description: { type: "string" }
        },
      },
    },
    handler: async function (req, res) {
      const { name, description } = req.body;
      const todo = this.mongo.db.collection('todo');
      const _id = new this.mongo.ObjectId(req.params.id)
      await todo.updateOne(
        {
          _id
        },
        {
          $set: { name, description }
        });
      return await todo.findOne({ _id });
    }
  });

  fastify.route({
    method: 'PATCH',
    url: putUrl,
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: "string" },
          description: { type: "string" }
        },
        additionalProperties: false,
      },
    },
    handler: async function (req, res) {
      req.body;
      const key = Object.keys(req.body)[0];
      const value = req.body[key];

      const todo = this.mongo.db.collection('todo');
      const _id = new this.mongo.ObjectId(req.params.id)
      await todo.updateOne(
        {
          _id
        },
        {
          $set: { [key]: value }
        });
      return await todo.findOne({ _id });
    }
  });

  fastify.route({
    method: 'DELETE',
    url: deleteUrl,
    handler: async function (req, res) {
      const todo = this.mongo.db.collection('todo');
      const _id = new this.mongo.ObjectId(req.params.id)
      return { deleted: _id }
    },
  });
}

module.exports = TodoRoutes;  