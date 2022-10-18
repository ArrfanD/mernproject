const mongoose = require('mongoose');



const connectdatabase = () => {
    mongoose.connect("mongodb://localhost:27017/ECOMMERCE", {useNewUrlParser: true, useUnifiedTopology: true}).then((data) => {
        console.log(`MongoDb connected with server: ${data.connection.host}`)
       }).catch(err => console.log(err));
}

module.exports = connectdatabase;