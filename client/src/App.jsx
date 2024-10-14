// src/App.js
import { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { ColorModeContext } from './config/themeContext';

function App() {
  const colorMode = useContext(ColorModeContext);

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h1" color="primary">Hello World!</Typography>
      <Button variant="contained" color="secondary" onClick={colorMode.toggleColorMode}>
        Toggle Theme
      </Button>
    </div>
  );
}

export default App;
