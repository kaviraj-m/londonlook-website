import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItemButton, ListItemText, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';

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
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: shrink ? '10px 20px' : '25px 20px',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Pacifico", cursive',
              fontWeight: 'bold',
              color: 'black',
              letterSpacing: '2px',
            }}
          >
            London Look
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
