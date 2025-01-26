import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>,
)
