require("dotenv").config();
const express           = require('express');
const consign           = require('consign');
const bodyParser        = require('body-parser');
const expressValidator  = require('express-validator');
const cors              = require('cors');
const { tokenValidator } = require('./src/services/validator')
var cron = require('node-cron');


let app = express();

app.use(
    bodyParser.urlencoded({
        limit: '10mb',
        extended: true,
        parameterLimit: 10000
    })
)
app.use(bodyParser.json({ limit: '10mb' }))
app.use(expressValidator())
app.use(cors())

app.use((req, res, next) => {
    if(req.headers.token && tokenValidator(req.headers.token)) {
        res.header("Access-Control-Allow-Origin", process.env.CORS_WEB);
        res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE, HEAD, PATH");
        res.header("Access-Control-Allow-Headers", process.env.CORS_WEB);
        next();
    } else {
        const data = { permission: 'denied' }
        res.json(data)
    }
})

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

consign()
    .include("src/routes")
    // .then("db/knexfile.js")
    // .then("db/knexfile.js")
    // .then("controllers")
    // .then("utils")
    .into(app);
    

app.set("port", 5001);
app.listen(5001, () => {
  console.log("server is listening on: " + app.get("port"));
});