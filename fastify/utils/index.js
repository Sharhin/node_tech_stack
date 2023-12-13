const createRestRoutes = (baseUrl) => {
  return {
    getUrl: baseUrl,
    getOneUrl: baseUrl + '/:id',
    postUrl: baseUrl,
    putUrl: baseUrl + '/:id',
    updateUrl: baseUrl + '/:id',
    deleteUrl: baseUrl + '/:id'
  }
}

module.exports = {
  createRestRoutes
}