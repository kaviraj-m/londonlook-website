import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItemButton, ListItemText, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import XavierSansBlack from '../assets/Xavier Sans Black.ttf';

// Add font-face declaration
const fontFace = `
  @font-face {
    font-family: 'Xavier Sans Black';
    src: url(${XavierSansBlack}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

// Add style element to head
const style = document.createElement('style');
style.appendChild(document.createTextNode(fontFace));
document.head.appendChild(style);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: shrink ? 'white' : 'transparent',
          transition: 'all 0.3s ease-in-out',
          boxShadow: shrink ? '0px 2px 10px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: shrink ? '10px 20px' : '25px 20px',
            transition: 'all 0.3s ease-in-out',
          }}>
          {/* Replace Typography with Box containing image */}
          <Box
            component="img"
            src="/logo.jpg"
            alt="London Look"
            sx={{
              height: { 
                xs: '22px',
                sm: '45px',
                md: '50px'
              },
              width: 'auto',
              objectFit: 'contain',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              borderRadius: { xs: '8px', sm: '12px' },
              padding: { xs: '3px', sm: '4px' },
              background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              '&:hover': {
                transform: { 
                  xs: 'translateY(-1px) scale(1.01)',
                  sm: 'translateY(-2px) scale(1.02)'
                },
                boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
              }
            }}
            onClick={() => navigate('/')}
          />

          {/* Rest of the code remains the same */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px' }}>
            {menuItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => navigate(item.path)}
                sx={{
                  color: 'black',
                  textTransform: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif',
                  position: 'relative',
                  '&:hover': { color: '#ff9900' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-5px',
                    left: '50%',
                    backgroundColor: '#ff9900',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Button
            sx={{
              color: 'black',
              fontSize: '18px',
              fontWeight: 'bold',
              fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif',
              letterSpacing: '1px',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
            }}
          >
            <PhoneIcon sx={{ fontSize: '20px', mr: 1 }} /> 83001 92051
          </Button>

          <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: 'black' }} onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, backgroundColor: '#fff', height: '100vh', padding: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton sx={{ color: 'black' }} onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ textAlign: 'center' }}>
            {menuItems.map((item) => (
              <ListItemButton key={item.name} onClick={() => { navigate(item.path); setMobileOpen(false); }}>
                <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '18px', fontWeight: 'bold', color: 'black', fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif' }} />
              </ListItemButton>
            ))}

            <ListItemButton>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'black',
                  fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif',
                  textAlign: 'center',
                  mt: 2,
                }}
              >
                <PhoneIcon sx={{ fontSize: '20px', mr: 1, verticalAlign: 'middle' }} />
                83001 92051
              </Typography>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
