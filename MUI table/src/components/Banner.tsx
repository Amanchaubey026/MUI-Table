import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#047857',
        padding: '0.75rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography
        sx={{
          color: 'white',
          fontSize: '1rem',
          fontWeight: 500,
        }}
      >
        The State of AWS Cost Optimization in India - Insights from 150+ Professionals on AWS Cost management
      </Typography>
      <Button
        endIcon={<ArrowForwardIcon />}
        sx={{
          backgroundColor: 'white',
          color: '#047857',
          borderRadius: '0.375rem',
          fontWeight: 600,
          padding: '0.5rem 1rem',
          '&:hover': {
            backgroundColor: '#F3F4F6',
          },
        }}
      >
        Get my free copy
      </Button>
    </Box>
  );
};
