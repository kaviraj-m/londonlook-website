import { useState } from "react";
import { Container, Typography, Stepper, Step, StepLabel, Paper, Box, TextField, Button, Grid } from "@mui/material";
import { School, EventAvailable, Description, Payment } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#1976d2', // primary color
    },
  },
});

const steps = [
  { label: "Fill the admission inquiry form", icon: <School fontSize="large" color="primary" /> },
  { label: "Attend counseling or visit the school", icon: <EventAvailable fontSize="large" color="secondary" /> },
  { label: "Submit required documents", icon: <Description fontSize="large" color="success" /> },
  { label: "Pay the fees & confirm admission", icon: <Payment fontSize="large" color="warning" /> },
];

export default function AdmissionProcess() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your inquiry has been submitted successfully!");
  };
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <StyledPaper elevation={4} sx={{ 
        p: { xs: 2, md: 6 }, 
        borderRadius: 4, 
        textAlign: "center",
        background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
      }}>
        <Typography 
          variant="h3" 
          fontWeight={700} 
          color="primary.dark" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 3
          }}
        >
          Admission Process
        </Typography>
        <Typography 
          variant="body1" 
          color="textSecondary" 
          sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
        >
          Follow these simple steps to secure admission at London Look School.
        </Typography>

        <Stepper 
          orientation="vertical" 
          sx={{ 
            '& .MuiStepConnector-line': {
              minHeight: 40,
              borderLeftWidth: 3
            }
          }}
        >
          {steps.map((step, index) => (
            <Step key={index} active={true}>
              <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                <Box 
                  sx={{ 
                    mr: 3,
                    transform: 'scale(1.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.3)' }
                  }}
                >
                  {step.icon}
                </Box>
                <StepLabel>
                  <Typography variant="h6" fontWeight={600}>
                    {step.label}
                  </Typography>
                </StepLabel>
              </Box>
            </Step>
          ))}
        </Stepper>
      </StyledPaper>

      <StyledPaper elevation={4} sx={{ 
        p: { xs: 2, md: 6 }, 
        borderRadius: 4, 
        mt: 8,
        background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
      }}>
        <Typography 
          variant="h4" 
          fontWeight={700} 
          color="primary.dark" 
          gutterBottom 
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Admission Inquiry Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Submit Inquiry
              </Button>
            </Grid>
          </Grid>
        </form>
      </StyledPaper>
    </Container>
  );
}
