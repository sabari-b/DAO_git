const { Client, auth } = require("twitter-api-sdk");
require('dotenv').config();


const authClient = new auth.OAuth2User({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    callback: "http://localhost:5000/callback",
    scopes: ["tweet.read", "users.read"],
}); 
const client = new Client(authClient);
const STATE = "my-state";
let accessToken = "";

class twitterControllers {
    async callBackUrl(req,res) {
        try {
            const { code, state } = req.query;
            if (state !== STATE) return res.status(500).send("State isn't matching");
            accessToken = (await authClient.requestAccessToken(code)).token
              .access_token;
            console.log("AccessToken: " + JSON.stringify(accessToken));
        
            res.send(`
              <html>
              <body>
                <p>You have been authenticated with this platform. You can close the window now.</p>
                <script>
                  // Pass the access token and status to the parent window
                  window.opener.postMessage({ token: ${JSON.stringify(
                    accessToken
                  )}, status: "Login successful" }, "*");
        
                  // Close the window after a delay
                  setTimeout(() => {
                    window.close();
                  }, 3000); // 3 seconds delay
                </script>
              </body>
              </html>
            `);
          } catch (error) {
            console.log(error);
          }
    }
    async login(req,res) {
        // console.log("sacascsac");
        const authUrl = authClient.generateAuthURL({
            state: STATE,
            code_challenge_method: "s256",
          });
          console.log(authUrl);
          res.redirect(authUrl);
    }
}

module.exports = new twitterControllers();