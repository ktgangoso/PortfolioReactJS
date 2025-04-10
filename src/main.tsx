// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Box } from '@mui/material';
import App from './App.tsx';
import Home from './components/home.tsx';
import About from './components/About.tsx';
import Skills from './components/skills.tsx';
import Resume from './components/Resume.tsx';
import Portfolio from './components/Portfolio.tsx';
import Contact from './components/Contact.tsx';
import Grocerease from './components/portfoliopage/Grocerease.tsx';
import Grocereasedash from './components/portfoliopage/Grocereasedash.tsx';
import Vinn from './components/portfoliopage/Vinn.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <App />

        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Routes>
            {/* Main homepage section, all-in-one scroll view */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Skills />
                  <Resume />
                  <Portfolio />
                  <Contact />
                </>
              }
            />

            {/* Grocerease specific portfolio page */}
            <Route path="/portfoliopage/Grocerease" element={<Grocerease />} />
            <Route path="/portfoliopage/Grocereasedash" element={<Grocereasedash />} />
            <Route path="/portfoliopage/Vinn" element={<Vinn />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  </StrictMode>
);
