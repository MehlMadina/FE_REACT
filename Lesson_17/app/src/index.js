import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { createTheme } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={createTheme(theme)}>
       <App />
  </ThemeProvider>
 
);


