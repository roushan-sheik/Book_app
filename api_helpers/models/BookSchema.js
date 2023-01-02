import { models, model, Schema } from 'mongoose';

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
  },
});

const Book = models.book || model('book', BookSchema);
export default Book;
