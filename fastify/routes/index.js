const TodoRoutes = require("./todo/routes");

function routes(fastify) {
  console.log("TodoRoutes", TodoRoutes)
  TodoRoutes(fastify)
}

module.exports = routes;