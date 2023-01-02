import React from 'react';
import { Alert, Box } from '@mui/material';

const Modal = ({ message }) => {
  return (
    <Box component={'container'}>
    <Alert severity="success">{ message}</Alert>
    </Box>
  );
};

export default Modal;
