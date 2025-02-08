import { Container, TextField, Button, Typography } from '@mui/material';

const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
        Send Message
      </Button>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>
        Address:
      </Typography>
      <Typography>
        No.6, Seshyaa Road, Rajagopalapuram, Pudukkottai - 622003 (Behind Indian Bank)
      </Typography>
    </Container>
  );
};

export default ContactPage;
