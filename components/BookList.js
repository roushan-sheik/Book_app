import React from 'react';
import { Grid } from '@mui/material';
import Book from './Book';

const BookList = ({ data }) => {
  return (
    <Grid container spacing={3} padding={2}>
      {data.map((book) => {
        return (
          <Grid
            item
            key={book._id}
            width="100%"
            height={'500px'}
            sm={6}
            md={4}
            lg={3}
          >
            <Book book={book} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BookList;
