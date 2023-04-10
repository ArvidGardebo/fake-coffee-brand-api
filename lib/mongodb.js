import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

client = new MongoClient(uri, options);
clientPromise = client.connect().catch((err) => {
  console.log(`Failed to connect to MongoDB: ${err}`);
  process.exit(1);
});

export default clientPromise;
