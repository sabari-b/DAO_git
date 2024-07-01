const mongoose = require("mongoose");
const { Web3 } = require('web3');
const web3 = new Web3();
require('dotenv').config();
const CryptoJS = require('crypto-js')

exports.userRegister = async (collection,type, data) => {
    // console.log("type, data ======= helper",type, data);
    try {
        let saveUser;
        let userData = {}
        userData = data

        console.log(process.env.encdcrKey,"process.env.encdcrKey");
        if(type == 1){
           
            let account = web3.eth.accounts.create();
            var walletprivate = account["privateKey"];
            var walletaddress = account["address"];
            const walletPrivateKey = CryptoJS.AES.encrypt(walletprivate, process.env.encdcrKey).toString();
            userData['wallerAddress'] = walletaddress
            userData['wallerPrivateKey'] = walletPrivateKey
            saveUser = await collection.create(userData);
            console.log("saveUser",saveUser);
            return({code:200,status:true,messge:`Register successfully..!`,data:saveUser.wallerAddress});
        }    
    } catch (error) {
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue);
            return({code:400,status:false,messge:` is already taken..!`});
          } else {
            return({code:500,status:false,messge:`Something went wrong..!`});
          }
    }
}