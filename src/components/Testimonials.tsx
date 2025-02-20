import { Box, Typography, Card, CardContent, Avatar, Grid, Container } from "@mui/material";

const testimonials = [
  {
    name: "Arun Kumar",
    review: "London Look School has transformed my child’s learning experience. The teachers are amazing, and the environment is inspiring!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Meena Raj",
    review: "A fantastic place where kids learn with creativity. My daughter enjoys every class and has improved tremendously.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Vijay Anand",
    review: "The balance between academics and extracurriculars is perfect. London Look School truly understands child development.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Lakshmi Priya",
    review: "Safe, nurturing, and a great curriculum! My son now loves going to school every day.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Chandran",
    review: "London Look School focuses on both academics and personality development. We are happy with our choice!",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 10, textAlign: "center" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" color="#2C3E50" gutterBottom>
          What Parents Say
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ mb: 5, px: 2, maxWidth: "600px", mx: "auto" }}
        >
          Hear from parents who have experienced the quality education and care at London Look School.
        </Typography>

        {/* ✅ Responsive Grid Layout with Equal-Sized Cards */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  width: "100%",
                  minHeight: "250px", // Ensures equal height
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                    border: "3px solid #2C3E50",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" sx={{ fontStyle: "italic", fontSize: "16px", color: "#555" }}>
                    "{testimonial.review}"
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2, color: "#2C3E50" }}>
                    - {testimonial.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
