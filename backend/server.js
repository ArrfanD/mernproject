const app = require('./app');

const dotenv = require('dotenv');

const connectdatabase = require('./config/database')

// config
dotenv.config({path: '../backend/config/config.env'});

//connect to database
connectdatabase();

app.listen(4000, () => {
    console.log(`the serevr is running at port: http//localhost:4000`);
});