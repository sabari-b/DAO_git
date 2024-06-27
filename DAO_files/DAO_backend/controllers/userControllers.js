
const config = require('../services/config');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

class UserController{
    async registerUser(req,res){
        const { email, password } = req.body;

        const encryptedPassword = CryptoJS.AES.encrypt(password, config.encdcrKey).toString();

        try {
            const existingUser = await userDatas.findOne({ email });

            if (existingUser) {
            return res.send({ status: false, message: 'User with this email is already registered' });
            }
            const user = new userDatas({
                email,
                password: encryptedPassword,
            });

            // console.log("blockchainAddress",user,"\n blockchainAddress",blockchainAddress);
            await user.save();
            res.send({
                status: true,
                message: 'User created successfully.',
            });
        } catch (err) {
            console.error(err);
            res.send({ status: false, message: 'Failed creation' });
        }
    }
}

module.exports = new UserController()