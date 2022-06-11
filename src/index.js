import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import { AuthProvider } from './AuthContext';
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { ThemeProvider } from "@mui/material/styles"

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById("root")
);
