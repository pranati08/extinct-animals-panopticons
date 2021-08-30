import nextConnect from 'next-connect';
import middleware from '../middle/db';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  let doc = await req.db.collection('demo').insertOne({_id:data}, {upsert: true})
  res.json({message: 'ok'});
})

export default handler;