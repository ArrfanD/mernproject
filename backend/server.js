const app = require('./app');
const connectdatabase = require('./config/database');

//Handling Uncaught Exception 
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    server.close(()=> {
        process.exit(1);
    });
})


// config of dotenv to link env file
require('dotenv').config({path: './backend/config/config.env'});

//connect to database
connectdatabase();

//server listen at port
const server = app.listen(process.env.PORT, () => {
    console.log(`the server is running at port: ${process.env.PORT}`);
});

// Unhandled Promise Rejection Error Handling
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(()=> {
        process.exit(1);
    });
});