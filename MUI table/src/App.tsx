import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { DataTable } from './components/Table';
import { generateMockData } from './utils/generateMockData ';
import Footer from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  const data = generateMockData();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isMobile:boolean = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
        {!scrolled && <Banner />}
        <Navbar scrolled={scrolled} isMobile={isMobile} />
        <Box sx={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <DataTable data={data} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;