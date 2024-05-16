const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const url = process.env.URL;
const dbName = process.env.DBNAME;


let db = null;

async function connectDB() {
    if (db) return db;
    const client = new MongoClient(url, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to MongoDB');
    return db;
}

module.exports = connectDB;