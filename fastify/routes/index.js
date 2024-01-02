const TodoRoutes = require("./todo/routes");

function routes(fastify) {
  TodoRoutes(fastify)
}

module.exports = routes;