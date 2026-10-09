import { MongoClient } from 'mongodb';
const uri=process.env.MONGODB_URI;
if(!uri) throw new Error('Missing MONGODB_URI environment variable');
const globalForMongo=globalThis as unknown as { mongoPromise?: Promise<MongoClient> };
const clientPromise=globalForMongo.mongoPromise??new MongoClient(uri).connect();
if(process.env.NODE_ENV!=='production')globalForMongo.mongoPromise=clientPromise;
export default clientPromise;
