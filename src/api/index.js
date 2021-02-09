import { Router } from 'express';
import posts from './routes/posts';

export default ({ config, db, s3 }) => {
	let api = Router();

	api.get('/', (req, res) => {
		res.json({ 'msg': 'it works!' });
  });
  
	api.use('/posts', posts({ config, db, s3 }));

	return api;
}