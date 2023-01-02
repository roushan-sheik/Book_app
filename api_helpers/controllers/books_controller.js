import Book from '../models/BookSchema';

// getAllBooks ==================>
export const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    return new Error(error);
  }
  if (!books) {
    res.status(500).json({ message: 'Internal server error!' });
  }
  if (books.length === 0) {
    res.status(404).json({ message: 'No books found' });
  }
  res.status(200).json({ books });
};

// add book =====================>
export const addBook = async (req, res) => {
  const { title, author, price, imageUrl, featured } = req.body;
  if (
    !title &&
    title.trim() === '' &&
    !author &&
    author.trim() === '' &&
    !price &&
    !imageUrl &&
    imageUrl.trim() === '' &&
    !featured &&
    featured.trim() === ''
  ) {
    res.status(422).json({ message: 'Invalid inputs' });
  }
  let book;
  try {
    book = new Book({ title, author, price, imageUrl, featured });
    book = await book.save();
  } catch (error) {
    return new Error(error);
  }
  if (!book) {
    res.status(500).json({ message: 'Internal server error' });
  }
  res.status(201).json({ book });
};

// update book

export const updateBook = async (req, res) => {
  const id = req.query.id;
  const { title, author, price, imageUrl, featured } = req.body;
  if (
    !title &&
    title.trim() === '' &&
    !author &&
    author.trim() === '' &&
    !price &&
    !imageUrl &&
    imageUrl.trim() === '' &&
    !featured &&
    featured.trim() === ''
  ) {
    res.status(422).json({ message: 'Invalid inputs' });
  }

  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      price,
      imageUrl,
      featured,
    });
  } catch (error) {
    return new Error(error);
  }
  if (!book) {
    res.status(500).json({ message: 'Internal server error' });
  }
  res.status(200).json({ message: 'Updated successfully' });
};

// Delete Book ============>

export const deleteBook = async (req, res) => {
  const id = req.query.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (error) {
    return new Error(error);
  }
  if (!book) {
    res.status(500).json({ message: 'Unable to delete!' });
  }
  res.status(200).json({ message: 'Deleted Successfully' });
};

// Get Book by Id ==================>

export const getBookById = async (req, res) => {
  const id = req.query.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    return new Error(error);
  }
  if (!book) {
    res.status(404).json({ message: 'No book found from given id' });
  }
  res.status(200).json({ book });
};
