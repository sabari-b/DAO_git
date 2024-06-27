var express = require('express');
var router = express.Router();
const twitterController = require('../controllers/twitterController')
const userController = require('../controllers/userControllers');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/register',userController.registerUser)
router.get('/callback',twitterController.callBackUrl);
router.get('/login',twitterController.login);


module.exports = router;
