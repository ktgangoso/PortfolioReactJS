// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Home from './components/home.tsx';
import { Box } from '@mui/material';
import About from './components/About.tsx';
import Skills from './components/skills.tsx';
import Resume from './components/Resume.tsx';
import Portfolio from './components/Portfolio.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <App />

      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Home /> 
        <About />
        <Skills />
        <Resume />
        <Portfolio/>
      </Box>
    </Box>
  </StrictMode>
);
