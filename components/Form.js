     import {
  Box, Button, Checkbox, FormLabel,
  TextField, Typography
} from '@mui/material';

      import { useRouter } from 'next/router';
import React, { useState } from 'react';

const labelSx = {    marginTop: '10px' };
const Form = ({ data, getFormData }) => {
  const router = useRouter();

          const [inputs, setInputs] = useState(
    data
      ? {
          title: data.title,
          author: data.author,
          imageUrl: data.imageUrl,
          price: data.price,
          featured: data.featured,
        }
      : {
          title: '',
          author: '',
          imageUrl: '',
          price: '',
          featured: false,
        }
  );
  const handleChange = (e) => {
    setInputs((prevState) => ({
            ...prevState,
             [e.target.name]: e.target.value,
    }));   
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData(inputs);
    setInputs({
      title: '',
      author: '',
      imageUrl: '',
      price: '',
      featured: false,
    });
    router.push('/books');
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit}
      className="w-screen md:w-[50%] shadow-xl rounded-lg"
      style={{ height: '100%', margin: 'auto' }}
    >
      <Typography
        // color={'#0a1929'}
        color={'#0984e3'}
        variant={'h4'}
        mt={4}
        textAlign="center"
        fontWeight={'bold'}
      >
        {data ? 'Book Details' : 'Add Book'}
      </Typography>
      <Box display={'flex'} flexDirection={'column'} padding={3}>
        <FormLabel sx={labelSx}>Title:</FormLabel>
        <TextField name="title" value={inputs.title} onChange={handleChange} />
        <FormLabel sx={labelSx}>Author:</FormLabel>
        <TextField
          name="author"
          value={inputs.author}
          onChange={handleChange}
        />
        <FormLabel sx={labelSx}>ImageUrl:</FormLabel>
        <TextField
          name="imageUrl"
          value={inputs.imageUrl}
          onChange={handleChange}
        />
        <FormLabel sx={labelSx}>Price:</FormLabel>
        <TextField name="price" value={inputs.price} onChange={handleChange} />
        <FormLabel sx={labelSx}>Featured:</FormLabel>
        <Checkbox
          className="mr-auto"
          checked={inputs.featured}
          onChange={(e) => {
            setInputs((prevState) => ({
              ...prevState,
              featured: e.target.checked,
            }));
          }}
        />
        <Button type="submit" className="text-[#0a1929]" variant={'contained'}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
