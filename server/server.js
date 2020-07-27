const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
//configure database
const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the db


function run() {
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(()=>{
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log("Could not connect to the database. Exiting now...", err)
        process.exit();
    })

    const app = express();
    //parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true}))
    // parse requests of content-type: application/json
    app.use(bodyParser.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.json({"message": "welcome"})
    });

    require('./app/routes.js')(app);
    app.listen(3001, () => {
        console.log("Server is listening on port 3001");
    });
}
run();