import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #E5E7EB' }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0.5rem 2rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Box 
              component="img" 
              src="https://cdn.prod.website-files.com/654cc1953659fbce12c35b03/6569aeea89e524678da19e76_Logo%20nav%20bar.svg" 
              alt="Astuto Logo" 
              sx={{ height: 32 }}
            />
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button sx={{ color: '#374151' }}>Product</Button>
            <Button sx={{ color: '#374151' }}>Pricing</Button>
            <Button sx={{ color: '#374151' }}>Finops</Button>
            <Button sx={{ color: '#374151' }}>About</Button>
            <Button sx={{ color: '#374151' }}>Resources</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button sx={{ color: '#374151' }}>Log in</Button>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#10B981',
              '&:hover': {
                backgroundColor: '#059669'
              }
            }}
          >
            Book a Demo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};