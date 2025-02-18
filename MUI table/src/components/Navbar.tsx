import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Menu, MenuItem, Fade } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setAnchorEl(null);
    }, 300); // Delay to match the transition duration

    return () => clearTimeout(timer); // Cleanup timer if component re-renders
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #E5E7EB',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          padding: '0.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/654cc1953659fbce12c35b03/6569aeea89e524678da19e76_Logo%20nav%20bar.svg"
              alt="Astuto Logo"
              sx={{ height: 32 }}
            />
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{
              color: 'black',
              fontWeight: 500,
              fontSize: '1rem',
              '&:hover': {
                color: 'green', // Change color to green on hover
              },
            }}
          >
            Product
          </Button>
          <Button
            sx={{
              color: 'black',
              fontWeight: 500,
              fontSize: '1rem',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            Pricing
          </Button>
          <Button
            sx={{
              color: 'black',
              fontWeight: 500,
              fontSize: '1rem',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            Finops
          </Button>
          <Button
            sx={{
              color: 'black',
              fontWeight: 500,
              fontSize: '1rem',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            About
          </Button>
          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{ position: 'relative', display: 'inline-block' }}
          >
            <Button
              sx={{
                color: 'black',
                fontWeight: 500,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: 'green',
                },
              }}
              endIcon={<ArrowDropDownIcon />}
            >
              Resources
            </Button>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
              MenuListProps={{
                'aria-labelledby': 'resources-button',
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiMenuItem-root': {
                    transition: 'background-color 0.3s ease',
                  },
                  '& .MuiMenuItem-root:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                },
              }}
            >
              <MenuItem onClick={handleClose} sx={{ '&:hover': { color: 'green' } }}>
                Blog
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ '&:hover': { color: 'green' } }}>
                Customer Success Stories
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            sx={{
              color: '#374151',
              fontWeight: 500,
              fontSize: '1rem',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#10B981',
              color: 'white',
              borderRadius: '0.375rem',
              fontWeight: 600,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#059669',
              },
            }}
          >
            Book a Demo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
