const indexController = require("../controllers/indexController");

module.exports = app => {

    app.get('/', (req, res) => indexController.index(req, res))

}