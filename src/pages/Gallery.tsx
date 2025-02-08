import { Box, Grid, Typography } from '@mui/material';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
];

const Gallery = () => {
  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        School Gallery
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {images.map((src, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <img src={src} alt={`Gallery ${index}`} width="100%" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
