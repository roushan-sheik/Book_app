import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { deleteBook } from '../api_helpers/frontend/utils';
import { Fragment } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Book = ({ book }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { title, author, imageUrl, _id, price } = book;
  const handleDelete = () => {
    deleteBook(_id)
      .then(() => setOpen(true))
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <Card
        sx={{
          width: '100%',
          height: '100%',
          boxShadow: '5px, 5px, 10px #ccc',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          transition: '.5s',
        }}
      >
        <div style={{ width: '100%', height: '40%', overflow: 'hidden' }}>
          <img src={imageUrl} alt="Image" width="100%" height={'100%'} />
        </div>
        <CardContent sx={{ width: '100%', height: '30%' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Author: {author}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Price: {price}$
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardActions
          sx={{ overflow: 'hidden', marginTop: '45px', marginLeft: '4px' }}
        >
          <Link href={`/books/${_id}`}>
            <Button endIcon={<EditIcon />} size="small" color="info">
              Edit
            </Button>
          </Link>
          <Button
            endIcon={<DeleteForeverIcon />}
            onClick={handleDelete}
            size="small"
            color="error"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
      {/* // snacbar alert message */}
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            setOpen(false);
            router.push('/books');
          }}
        >
          <Alert
            onClose={() => {
              setOpen(false);
            }}
            severity="success"
            sx={{ width: '100%' }}
          >
            Successfully deleted
          </Alert>
        </Snackbar>
      )}
    </Fragment>
  );
};

export default Book;
