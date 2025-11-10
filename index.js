const express = require('express')
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster1.h19g7bt.mongodb.net/?appName=Cluster1`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();

     // All collection and Database
    const db = client.db("assignment10");
    const usersCollention = db.collection("users");
    

    // ALl Methords 
    app.post('/users', async (req, res)=>{
      const newUser = req.body;
      const result = await usersCollention.insertOne(newUser);
      res.send(result);

    })

    












    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(port, () => {
  console.log(`Server is hitting on port ${port}`);
});


