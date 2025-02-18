import { Box } from '@mui/material';
import { DataTable } from './components/Table';
import { generateMockData } from './utils/generateMockData ';
import './App.css'

function App() {
  const data = generateMockData();

  return (
    <Box sx={{ p: 3 }}>
    <DataTable data={data} />
  </Box>
  )
}

export default App
