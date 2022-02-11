require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const uri =
//   "mongodb+srv://" +
//   process.env.DB_USER +
//   ":" +
//   process.env.DB_PASS +
//   "@" +
//   process.env.DB_HOST;

// const client = new mongodb.MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// let collection = null;

// client
//   .connect()
//   .then(() => {
//     return client.db("PortfolioData").collection("AllData");
//   })
//   .then((__collection) => {
//     collection = __collection;
//     return "";
//   });

app.use(express.static("build"));

app.listen(process.env.PORT || 3000);
