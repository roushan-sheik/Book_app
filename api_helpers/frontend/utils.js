import axios from 'axios';

// Get All books ====================>
export const GetAllBooks = async () => {
  const res = await axios.get('http://localhost:3000/api/books');
  if (res.status !== 200) {
    return new Error('Internal Server Error');
  }
  const data = res.data?.books;

  return data;
};

// Get Featured Books =======================>
export const getFeaturedBook = async () => {
  const books = await GetAllBooks();
  if (books.length == 0) {
    return [];
  }
  const featuredBooks = books.filter((book) => book.featured === true);
  return featuredBooks;
};
// Send book to the database Post req =============>
export const sendBook = async (data) => {
  const res = await axios.post('http://localhost:3000/api/books', {
    title: data.title,
    author: data.author,
    imageUrl: data.imageUrl,
    price: data.price,
    featured: data.featured,
  });
  if (res.status !== 201) {
    return new Error('Database request rejected');
  }
  const resData = await res.data;
  return resData;
};
// Get book by id  ===============>
export const getBookFromId = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/book/${id}`);
  if (res.status !== 200) {
    return new Error('Unable to fetch book from given id');
  }
  const data = await res.data;
  return data;
};
// Updat book ================>
export const updateBook = async (id, data) => {
  const res = await axios.put(`http://localhost:3000/api/book/${id}`, {
    title: data.title,
    author: data.author,
    imageUrl: data.imageUrl,
    price: data.price,
    featured: data.featured,
  });
  if (res.status !== 200) {
    return new Error('Unable to update the book');
  }
  const upData = await res.data;
  return upData;
};
// delete book ====================>
export const deleteBook = async (id) => {
  const res = await axios.delete(`http://localhost:3000/api/book/${id}`);
  if (res.status !== 200) {
    return new Error('Un able to delete book ');
  }
  const dlData = await res.data;
  return dlData;
};
