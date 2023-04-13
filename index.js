const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

const app = express();

// middleWare
app.use(cors());
app.use(express());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.w9y9xep.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const productsCollection = client
      .db("Ema-jahn_ProductCollection")
      .collection("products");

    app.get("/products", async (req, res) => {
        const page=parseInt(req.query.page);
        const size=parseInt(req.query.size);
       console.log(page,size)
      const qurey = {};
      const cursor = productsCollection.find(qurey);
      const products = await cursor.skip(page*size).limit(size).toArray();
      const count = await productsCollection.estimatedDocumentCount();
      res.send({count,products});
    });
  } catch {
    (error) => {
      console.log(error.name);
    };
  } finally {
  }
};

run();

 

app.get("/", (req, res) => {
  res.send("The Ema-jahn-server is running");
});

app.listen(port, () => {
  console.log(`The Emah-Jahon server is running on port ${port}`.bgGreen);
});
