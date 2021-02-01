const indexModel = require('../models/indexModel')

const index = async (req, res) => {
    const response = await indexModel.index()
    res.json(response)
}

module.exports = {
    index
}