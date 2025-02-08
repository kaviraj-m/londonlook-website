import { Box, Typography } from '@mui/material';

const VirtualTour = () => {
  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Take a Virtual Tour
      </Typography>
      <iframe
        width="80%"
        height="400px"
        src="https://www.youtube.com/embed/your_video_id"
        title="Virtual School Tour"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default VirtualTour;
