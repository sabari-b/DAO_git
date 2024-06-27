const mongoose = require("mongoose");
const client = mongoose.Schema
const userDatas = new client({
   
    googleEmail: {
        type: String,
        set: (values) => values.toLowerCase()
    },
    microsoftEmail: {
        type: String,
        set: (values) => values.toLowerCase()
    },
    twitterEmail: {
        type: String,
        set: (values) => values.toLowerCase()
    },
    wallerAddress: {
        type: String
    },
    secret: {
        type: String
    }
},
{
    timestamps: true
})
module.exports = mongoose.model("userDatas", userDatas);
