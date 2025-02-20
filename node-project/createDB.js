const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';

async function main() {

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    const usersCollection = db.collection('users');
    const user = { login: 'tom', password: 'tom123' };

    const insertResult =
        await usersCollection.insertOne(user);
    console.log('Inserted document =>', insertResult);

    const userTest = 'tom';
    const userID = await usersCollection.findOne({ login: userTest })
    console.log(userID._id)
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());