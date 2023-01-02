import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const handleChange = (event, val) => {
    setValue(val);
    if (val == 0) {
      router.push('/');
    } else if (val == 1) {
      router.push('/books');
    } else if (val == 2) {
      router.push('/books/add_book');
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#0a1929' }}>
      <Toolbar>
        <MenuBookIcon sx={{ fontSize: '26px', cursor: 'pointer' }} />
        <Box display="flex" margin={'auto'}>
          <Tabs textColor="inherit" onChange={handleChange} value={value}>
            <Tab label="Home" />
            <Tab label="All books" />
            <Tab label="add book" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
