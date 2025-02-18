// src/components/Banner.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Banner = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#047857',
      padding: '0.75rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2
    }}>
      <Typography sx={{ color: 'white' }}>
        The State of AWS Cost Optimization in India - Insights from 150+ Professionals on AWS Cost management
      </Typography>
      <Button 
        endIcon={<ArrowForwardIcon />}
        sx={{ 
          backgroundColor: 'white',
          color: '#047857',
          '&:hover': {
            backgroundColor: '#F3F4F6'
          }
        }}
      >
        Get my free copy
      </Button>
    </Box>
  );
};