const functions = require('firebase-functions');
const https = require('http');

exports.getNeeds = functions.https.onRequest((req, res) => {
    const url = "http://118.31.226.79/get_needs"
    // ...
    var req = http.request(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => { data += chunk; });
        resp.on('end', () => {
            var result = JSON.parse(data);
            response.send({ fulfillmentText: "Firebase 🔥 API Is Running..." });
          });
    }).on("error", (err) => { console.log("Error: " + err.message); });
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
