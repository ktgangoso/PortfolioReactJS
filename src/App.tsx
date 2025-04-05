import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import HomeIcon from '@mui/icons-material/HomeOutlined';
import AboutIcon from '@mui/icons-material/PersonOutlineOutlined';
import SkillsIcon from '@mui/icons-material/SettingsOutlined';
import ResumeIcon from '@mui/icons-material/ArticleOutlined';
import PortfolioIcon from '@mui/icons-material/FilterOutlined';
import ContactIcon from '@mui/icons-material/EmailOutlined';
import HireMeIcon from '@mui/icons-material/GetAppOutlined';

import './App.css';

const socialIcons = [
  { icon: <FacebookIcon />, color: '#007bff' },
  { icon: <GitHubIcon />, color: '#007bff' },
  { icon: <LinkedInIcon />, color: '#0A66C2' },
];

const navLinks = [
  { icon: <HomeIcon />, label: 'Home', href: '/dashboard' },
  { icon: <AboutIcon />, label: 'About', href: '/products' },
  { icon: <SkillsIcon />, label: 'Skills', href: '/orders' },
  { icon: <ResumeIcon />, label: 'Resume', href: '/users' },
  { icon: <PortfolioIcon />, label: 'Portfolio', href: '/users' },
  { icon: <ContactIcon />, label: 'Contact', href: '/users' },
  { icon: <HireMeIcon />, label: 'Hire Me', href: '/users' },
];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const typedEl = useRef(null); // ✅ Moved inside App



  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const drawerContent = (
    <Box
      sx={{
        width: 'auto',
        p: 2,
        bgcolor: '#040b14',
        height: '100vh',
        color: '#fff',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '1.5rem',
          mb: 2,
        }}
      >
        Kevin Gangoso
      </Typography>

      {/* Social Icons */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
        {socialIcons.map(({ icon, color }, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: '50%',
              bgcolor: '#5b5b5b',
              color: '#fff',
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              width: 30,
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': { bgcolor: color },
            }}
          >
            {icon}
          </Box>
        ))}
      </Box>

      {/* Navigation Links */}
      <List>
        {navLinks.map(({ icon, label, href }, index) => (
          <ListItemButton
            key={index}
            component="a"
            href={href}
            onClick={() => setDrawerOpen(false)}
          >
            {icon}
            <ListItemText primary={label} sx={{ ml: 1 }} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Menu Button (mobile only) */}
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 2,
            bgcolor: 'white',
            boxShadow: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? drawerOpen : true}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default App;
