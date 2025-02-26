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
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Xavier Sans Black", sans-serif',
              fontWeight: 'normal',
              letterSpacing: '2px',
              '& span': {
                display: 'inline-block',
                fontFamily: '"Xavier Sans Black", sans-serif',
                textShadow: '2px 2px 0 #FFF, -2px -2px 0 #FFF, 2px -2px 0 #FFF, -2px 2px 0 #FFF',
                filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))',
                padding: '0 1px',
              },
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              '& span.letter': {
                fontFamily: '"Xavier Sans Black", sans-serif',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              },
              '& span:nth-of-type(1)': { color: '#E31E24' }, // Red L
              '& span:nth-of-type(2)': { color: '#FF1493' }, // Pink O
              '& span:nth-of-type(3)': { color: '#1E3F8F' }, // Navy Blue N
              '& span:nth-of-type(4)': { color: '#FF69B4' }, // Pink D
              '& span:nth-of-type(5)': { color: '#00BFF3' }, // Light Blue O
              '& span:nth-of-type(6)': { color: '#FF8C00' }, // Orange N
              '& span:nth-of-type(7)': { color: '#8B4513', marginLeft: '12px' }, // Brown L
              '& span:nth-of-type(8)': { color: '#FF0000' }, // Red O
              '& span:nth-of-type(9)': { color: '#FF1493' }, // Pink O
              '& span:nth-of-type(10)': { color: '#1E3F8F' }, // Navy Blue K
              fontSize: { xs: '1.4rem', sm: '2rem' }, // Increased font size
              transform: 'skew(-5deg)', // Slight tilt like the image
            }}
          >
            <span>L</span>
            <span>O</span>
            <span>N</span>
            <span>D</span>
            <span>O</span>
            <span>N</span>
            <span>L</span>
            <span>O</span>
            <span>O</span>
            <span>K</span>
          </Typography>

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
