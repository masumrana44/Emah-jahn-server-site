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

const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.w9y9xep.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
 

const run=async()=>{
    try{
      throw Error('HELLO DEAR')
    }
    catch{
     (error)=>{
        console.log(error.name)
     }
    }
    finally{

    }
}

run()
 

// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.get("/", (req, res) => {
  console.log("The Emah-jahon server is running");
});

app.listen(() => {
  console.log(`The Emah-Jahon server is running on port ${port}`.bgGreen);
});
