const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);
async function run() {
  try {
    const db = client.db("test");
    const collection = db.collection("users");
    let user = {
      name: "Itgenik100",
    };
    const result = await collection.insertOne(user);
    console.log(`Был вставлен документ с _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);