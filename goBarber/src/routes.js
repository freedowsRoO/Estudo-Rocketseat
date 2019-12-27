const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ name: 'jefferson'})
})

module.exports = routes;