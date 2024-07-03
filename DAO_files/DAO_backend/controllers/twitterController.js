const { Client, auth } = require("twitter-api-sdk");
require("dotenv").config();
const RegHelper = require("../helper/userRegisterHelper");
const mongoose = require("mongoose");
const UsersCollection = mongoose.model("userDatas");
const axios = require("axios");

const authClient = new auth.OAuth2User({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  callback: "http://localhost:3000/callback",
  scopes: ["tweet.read", "users.read"],
});
const client = new Client(authClient);
const STATE = "my-state";
let accessToken = "";

class twitterControllers {
  async callBackUrl(req, res) {
    try {
      const { code, state } = req.query;
      if (state !== STATE) return res.status(500).send("State isn't matching");
      accessToken = (await authClient.requestAccessToken(code)).token
        .access_token;
      let token = accessToken;
      const headers = {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      };
      let response = await axios.get(
        "https://api.twitter.com/2/users/me",
        { headers: headers }
      );
      let userRegister = await RegHelper.userRegister(UsersCollection,3,response.data.data)
      console.log("userRegister",userRegister);
      if(userRegister.status){
        res.send({code:userRegister.code,status:userRegister.status,message:userRegister.message,data:userRegister.data});
      }else{
        res.send({code:userRegister.code,status:userRegister.status,message:userRegister.message});
      }
    } catch (error) {
      res.send({code:500,status:false,message:"Something went wrong"});
    }
  }
  async login(req, res) {
    const authUrl = authClient.generateAuthURL({
      state: STATE,
      code_challenge_method: "s256",
    });
    res.redirect(authUrl);
  }
}

module.exports = new twitterControllers();