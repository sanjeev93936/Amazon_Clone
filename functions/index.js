const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51NaNBCSBt6epGL28VYXqTeBFLK6JeUknOPq9JnXjXeh3v0jCykov2ebkEhZeV586KJIQQMTuHYeH4jna6AIktcSR00n6QnGP8C"
  );

  //API

  //APP CONFIG
  const app = express();

  //-Middlewers
app.use(cors({ origin: true }));
app.use(express.json());

  //-API routers
  app.get("/", (request, response) => response.status(200).send("hello world"));
  app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "inr",
    });

      // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  
  });
  

  //-Listen command
  exports.api = functions.https.onRequest(app);
//http://127.0.0.1:5001/fir-e4689/us-central1/api

