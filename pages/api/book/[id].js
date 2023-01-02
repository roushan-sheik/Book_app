import connectDB from '../../../api_helpers/database/connectDB';
import {
  updateBook,
  deleteBook,
  getBookById,
} from '../../../api_helpers/controllers/books_controller';

// updata and delete ============>
export default async function handeler(req, res) {
  await connectDB().catch((error) => console.log('connection faild'));
  if (req.method === 'PUT') {
    updateBook(req, res);
  } else if (req.method === 'DELETE') {
    deleteBook(req, res);
  } else if (req.method === 'GET') {
    getBookById(req, res);
  }
}
