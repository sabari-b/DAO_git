const Mongoose = require('mongoose');
require('dotenv').config()
   
const mongoDbUrl = {
    DB_HOST: `${process.env.HOST_URL}`
}

Mongoose
.connect(mongoDbUrl.DB_HOST)
.then(() => {
    console.log('successfully connected mongo db atlas')
})
.catch((err) => console.log("Database can't be connected: " + err));
