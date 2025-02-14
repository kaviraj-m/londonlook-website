import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0a1929',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <Box>
            <Link href="/" color="inherit" underline="hover">Home</Link>
          </Box>
          <Box>
            <Link href="/about" color="inherit" underline="hover">About Us</Link>
          </Box>
          <Box>
            <Link href="/admissions" color="inherit" underline="hover">Admissions</Link>
          </Box>
          <Box>
            <Link href="/gallery" color="inherit" underline="hover">Gallery</Link>
          </Box>
          <Box>
            <Link href="/contact" color="inherit" underline="hover">Contact Us</Link>
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Typography variant="body2">No.6, Seshyaa Road, Rajagopalapuram, Pudukkottai - 622003</Typography>
          <Typography variant="body2">Phone: +91 83001 92051</Typography>
          <Typography variant="body2">Email: info@londonlookschool.com</Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box>
            <IconButton href="#" color="inherit"><Facebook /></IconButton>
            <IconButton href="#" color="inherit"><Twitter /></IconButton>
            <IconButton href="#" color="inherit"><Instagram /></IconButton>
            <IconButton href="#" color="inherit"><YouTube /></IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="body2">© 2025 London Look School. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
