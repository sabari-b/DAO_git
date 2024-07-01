
const mongoose = require("mongoose");
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const { Web3 } = require('web3');

const UsersCollection = mongoose.model("userDatas");

const config = require('../services/config');
const RegHelper = require('../helper/userRegisterHelper')

class UserController{
    async registerUser(req,res){
        try {
            let bData = req.body
            let response = await RegHelper.userRegister(UsersCollection,bData.type,bData.data);
            if(response.status){
                res.status(response.code).send({status:response.status,message:response.messge,data:response.data})
            }else{
                res.status(response.code).send({status:response.status,message:response.messge})
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Something went wrong"})
        }
    }
}

module.exports = new UserController()