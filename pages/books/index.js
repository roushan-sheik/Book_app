import React from 'react';
import { GetAllBooks } from '../../api_helpers/frontend/utils';
import BookList from '../../components/BookList';

const Home = ({ books }) => {
  return <BookList data={books}></BookList>;
};
export default Home;

export const getServerSideProps = async () => {
  const books = await GetAllBooks();

  return {
    props: {
      books,
    },
  };
};
