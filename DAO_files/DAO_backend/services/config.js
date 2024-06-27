const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, '../.env') })


//local url
module.exports = {
    PORT:  5000,
    JWT_SECRET:"asdfghjklqwertyuioZXCVBNM<>",
    encdcrKey: "rdctvygbnj@#$%^&*"
    // MongoCluster:"mongodb+srv://Dictys:jhjCsStYjNLWrqpW@dictys.jxrmfbw.mongodb.net/Dictys?retryWrites=true&w=majority&appName=Dictys",
   
}

// //Staging url
// module.exports = {
//     PORT:  3000,
//     JWT_SECRET:"asdfghjklqwertyuioZXCVBNM<>",
//     // MongoCluster:"mongodb+srv://Dictys:jhjCsStYjNLWrqpW@dictys.jxrmfbw.mongodb.net/Dictys?retryWrites=true&w=majority&appName=Dictys",
//  encdcrKey: "rdctvygbnj@#$%^&*"
   
// }

// //===============Live config==============//
// module.exports = {
//     PORT:  3000,
//     JWT_SECRET:"asdfghjklqwertyuioZXCVBNM<>",
//     // MongoCluster:"mongodb+srv://Dictys:jhjCsStYjNLWrqpW@dictys.jxrmfbw.mongodb.net/Dictys?retryWrites=true&w=majority&appName=Dictys",
    // encdcrKey: "rdctvygbnj@#$%^&*"
// }

