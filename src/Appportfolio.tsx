import { useEffect, useState } from 'react';
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

import './App.css';

const socialIcons = [
  { icon: <FacebookIcon />, color: '#007bff' },
  { icon: <GitHubIcon />, color: '#007bff' },
  { icon: <LinkedInIcon />, color: '#0A66C2' },
];

const navLinks = [
  { icon: <HomeIcon />, label: 'Home', href: '../../#home' },
];

function Appportfolio() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/#');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const typedEl = useRef(null); // 


  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const drawerContent = (
    <Box
      sx={{
        width: 'auto',
        p: 2,
        bgcolor: '#040b14',
        height: '100vh',
        color: '#fff',
      }}>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
      }}>
        <Box sx={{
          height: "7rem",
          width: "7rem",
          backgroundColor: "rgba(160, 160, 160, 0.15)",
          borderRadius: "50%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
        }}>
          <Box
            component="main"
            sx={{
              p: 1,
              height: '5rem',
              width: "5rem",
              backgroundImage: 'url(/home/profile/my-profile-img.jpg)',
              backgroundSize: 'cover',
              color: '#fff',
              borderRadius: "50%",
            }} />
        </Box>
      </Box>


      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '1.5rem',
          mb: 2,
        }}>
        Kevin Gangoso
      </Typography>

      {/* Social Icons */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
        {socialIcons.map(({ icon, color }, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: '50%',
              backgroundColor: "rgba(160, 160, 160, 0.15)",
              color: '#fff',
              p: ".3rem",
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

      <List>
        {navLinks.map(({ icon, label, href }, index) => {
          const isActive = activeLink === href;

          return (
            <ListItemButton
              key={index}
              onClick={() => {
                if (href.startsWith('/#')) {
                  const id = href.replace('/#', '');
                  const target = document.getElementById(id);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    setActiveLink(href);
                    if (isMobile) setDrawerOpen(false);
                  }
                } else {
                  window.location.href = href;
                }
              }}
              sx={{
                px: 2,
                py: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                },
                transition: 'background-color 0.3s ease',
              }}
            >
              <Box
                component="span"
                sx={{
                  color: isActive ? '#007bff' : '#aaa',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {icon}
              </Box>
              <ListItemText
                primary={label}
                sx={{
                  ml: 1,
                  '& .MuiTypography-root': {
                    color: isActive ? '#fff' : '#aaa',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'color 0.3s ease',
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box >
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
          }}>
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
        }}>
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default Appportfolio;
