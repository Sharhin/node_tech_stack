const createRestRoutes = (baseUrl) => {
  return {
    getUrl: baseUrl,
    getOneUrl: baseUrl + '/:id',
    postUrl: baseUrl,
    updateUrl: baseUrl + '/:id',
    deleteUrl: baseUrl + '/:id'
  }
}

module.exports = {
  createRestRoutes
}