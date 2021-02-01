const conn = require("../db/dbconfig");

const index = async () => {
    const data = { message: 'API base em node' }
    return data
}

module.exports = {
    index
}