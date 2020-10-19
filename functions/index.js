const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HWgwqINJAxxq3wOzYmHILsUqkRY3uZL1EQx7U5MUp16XufhKkDB1J2dENd6lrmDLc4astXvqn2YMhlDNfgoMxrZ00rtn2SbrL"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send("Hello, world!"));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,  // in subunits (cents)
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - Listen command
export.api = functions.https.onRequest