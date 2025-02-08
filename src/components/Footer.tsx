import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#1976d2',
        color: 'white',
      }}
    >
      <Typography variant="body1">© 2025 London Look School</Typography>
      <Typography variant="body2">
        No.6, Seshyaa Road, Rajagopalapuram, Pudukkottai - 622003
      </Typography>
    </Box>
  );
};

export default Footer;
