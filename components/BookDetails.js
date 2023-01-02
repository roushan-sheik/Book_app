import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getBookFromId } from '../api_helpers/frontend/utils';
import { useState } from 'react';
import Form from './Form';
import { updateBook } from '../api_helpers/frontend/utils';
import { Alert } from '@mui/material';

const BookDetails = () => {
  const [book, setBook] = useState();
  const [alert, setAlert] = useState();
  const router = useRouter();

  useEffect(() => {
    getBookFromId(router.query.id)
      .then((data) => {
        setBook(data);
      })
      .catch((err) => console.log(err));
  }, [router.query.id]);

  const getFormData = (data) => {
    updateBook(router.query.id, data)
      .then((data) => setAlert(data))
      .then(() => router.push('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {book ? (
        <Form data={book.book} getFormData={getFormData} />
      ) : (
        <h4>Loading...</h4>
      )}
      {alert && <Alert message={alert} />}
    </div>
  );
};

export default BookDetails;
