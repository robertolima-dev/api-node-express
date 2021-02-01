require('dotenv').config();

module.exports = {
    client: "mysql2",
    debug: false,
    connection: {
        host: process.env.APP_DB_HOST,
        user: process.env.APP_DB_USER,
        password: process.env.APP_DB_PASSWORD,
        database: process.env.APP_DB_DATABASE
    },
    pool: { min: 2, max: 10 },
    migrations: {
        directory: "migrations",
        tableName: "migrations",
    },
};