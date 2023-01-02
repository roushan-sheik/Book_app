// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '../../api_helpers/database/connectDB';
import {
  getAllBooks,
  addBook,
} from '../../api_helpers/controllers/books_controller';

export default async function handler(req, res) {
  await connectDB().catch((error) => console.log('Connection faild'));
  if (req.method === 'GET') {
    return getAllBooks(req, res);
  } else if (req.method === 'POST') {
    return addBook(req, res);
  }
}
