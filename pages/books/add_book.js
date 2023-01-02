import React from 'react';
import Form from '../../components/Form';
import { sendBook } from '../../api_helpers/frontend/utils';
const AddBook = () => {
  const getFormData = (data) => {
    sendBook(data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return <Form getFormData={getFormData} />;
};

export default AddBook;
