import { useState } from "react";
import { TextField, Button, Container, Typography, Card, CardContent, Stack } from "@mui/material";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Submitted Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Card sx={{ boxShadow: 6, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight={700} textAlign="center" color="primary" gutterBottom>
            Inquiry Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Full Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                variant="outlined"
                fullWidth
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                label="Your Inquiry"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                Submit Inquiry
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
