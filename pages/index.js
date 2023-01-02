import React from 'react';
import BookList from '../components/BookList';
import Book from '../api_helpers/models/BookSchema';
import connectDB from './../api_helpers/database/connectDB';

const Home = ({ books }) => {
  return <BookList data={books}></BookList>;
};
export default Home;

export const getStaticProps = async () => {
  await connectDB();
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    return new Error(error);
  }
  const text = JSON.stringify(books);
  const data = JSON.parse(text);
  const featuredBooks = data.filter((book) => book.featured === true);
  console.log(featuredBooks);

  return {
    props: {
      books: featuredBooks,
    },
  };
};
