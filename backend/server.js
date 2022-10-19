const app = require('./app');
const dotenv = require('dotenv');
const connectdatabase = require('./config/database')

// config
dotenv.config({path: '../backend/config/config.env'});

//connect to database
connectdatabase();

//server listen at port
app.listen(4000, () => {
    console.log(`the server is running at port: 4000`);
});