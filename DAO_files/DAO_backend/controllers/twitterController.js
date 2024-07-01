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
              <!DOCTYPE html>
              <html>
              <body>
                <p>You have been authenticated with this platform. You can close the window now.</p>
                <script>
               (function() {
                console.log("script working")
                  try {
                    const parentOrigin = "http://localhost:3000/";
                    if (window.opener && typeof window.opener.postMessage === 'function') {
                    window.opener.postMessage({ token: ${JSON.stringify(
                                accessToken
                              )}, status: "Login successful" }, "http://localhost:3000/");
                    } else {
                      console.error("Unable to communicate with the parent window.");
                    }
                  } catch (e) {
                    console.error("An error occurred while sending message to the parent window:", e);
                  }
                  // Close the window after 3 seconds
                  setTimeout(() => {
                    window.close();
                  }, 3000);
                })()
                </script>
              </body>
              </html>
            `);
          } catch (error) {
            console.log("callback error",error);
            res.send(`
              <!DOCTYPE html>
              <html>
              <body>
                <h1 style="text-align:center;margin-bottom:15px;">Oops...Something went wrong while connecting X. </h1>
                <h2 style="text-align:center;margin-bottom:15px;">Please close the window. try again</h2>
              </body>
              </html>
            `);
          }
    }
    async login(req,res) {
        // console.log("sacascsac");
        const authUrl = authClient.generateAuthURL({
            state: STATE,
            code_challenge_method: "s256",
          });
          res.redirect(authUrl);
    }
}

module.exports = new twitterControllers();