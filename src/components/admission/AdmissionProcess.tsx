import { useState } from "react";
import { Container, Typography, Stepper, Step, StepLabel, Paper, Box, TextField, Button, Grid } from "@mui/material";
import { School, EventAvailable, Description, Payment } from "@mui/icons-material";

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
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h3" fontWeight={700} color="primary.dark" gutterBottom>
          Admission Process
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Follow these simple steps to secure admission at London Look School.
        </Typography>

        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index} active={true}>
              <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                <Box sx={{ mr: 2 }}>{step.icon}</Box>
                <StepLabel>
                  <Typography variant="h6" fontWeight={600}>
                    {step.label}
                  </Typography>
                </StepLabel>
              </Box>
            </Step>
          ))}
        </Stepper>
      </Paper>

      {/* Admission Inquiry Form */}
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, mt: 6 }}>
        <Typography variant="h4" fontWeight={700} color="primary.dark" gutterBottom textAlign="center">
          Admission Inquiry Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
              <Button type="submit" variant="contained" color="primary" size="large">
                Submit Inquiry
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
