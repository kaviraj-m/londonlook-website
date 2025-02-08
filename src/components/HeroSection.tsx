import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/school-banner.jpg)',
        backgroundSize: 'cover',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Welcome to London Look School
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: '20px' }}>
        A place where young minds grow and thrive.
      </Typography>
      <Button variant="contained" color="secondary">
        Learn More
      </Button>
    </Box>
  );
};

export default HeroSection;
