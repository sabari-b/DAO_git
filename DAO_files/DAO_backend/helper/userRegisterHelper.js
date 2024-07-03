const mongoose = require("mongoose");
const { Web3 } = require('web3');
const web3 = new Web3();
require('dotenv').config();
const CryptoJS = require('crypto-js')

exports.userRegister = async (collection,type, data) => {
    // console.log("type, data ======= helper",type, data);
    try {
        let saveUser;
        let userData = {};
        let dublicateUser = false;

        if(type == 1){
            // Google Login
            userData["googleEmail"] = data.googleEmail;
            userData["googleprofilePicture"] = data.googleprofilePicture

            let findUser = await collection.findOne({googleEmail:data.googleEmail})
            if(findUser){
                dublicateUser = true
            }
        }else if(type == 2){
            // Microsoft Login
            userData["microsoftEmail"] = data.microsoftEmail
        }else if(type == 3){
            // Twitter Login
            userData["twitterUsername"] = data.username;
            userData["twitterUserId"] = data.id;

            let findUser = await collection.findOne({twitterUsername:data.username,twitterUserId:data.id})
            if(findUser){
                dublicateUser = true
            }
            console.log("findUser",findUser);
        }
        if(dublicateUser==false){
            let account = web3.eth.accounts.create();
            var walletprivate = account["privateKey"];
            var walletaddress = account["address"];
            const walletPrivateKey = CryptoJS.AES.encrypt(walletprivate, process.env.encdcrKey).toString();
            userData['wallerAddress'] = walletaddress;
            userData['wallerPrivateKey'] = walletPrivateKey;
            saveUser = await collection.create(userData);
            return({code:200,status:true,message:`Register successfully..!`,data:saveUser.wallerAddress});
        }else{
            return({code:400,status:false,message:` is already taken..!`});
        }

    } catch (error) {
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue);
            return({code:400,status:false,message:` is already taken..!`});
          } else {
            return({code:500,status:false,message:`Something went wrong..!`});
          }
    }
}