import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const url = 'mongodb+srv://ferbamba:r1erYjhLkC4vA4p6@cluster0.kycm0.mongodb.net/test';
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function db(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('study');
  //client.close()
  return next();
}

const middleware = nextConnect();
middleware.use(db);
export default middleware;