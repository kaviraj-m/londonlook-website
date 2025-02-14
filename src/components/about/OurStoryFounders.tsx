import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";

const founders = [
  {
    name: "Dr. R. Venkatesan",
    role: "Founder & Chairman",
    image: "https://img.freepik.com/premium-vector/male-teacher-teacher-s-desk_679557-1380.jpg",
    bio: "Dr. R. Venkatesan envisioned a world-class institution in Tamil Nadu, blending academic excellence with moral values. His leadership has shaped countless young minds with a strong foundation in discipline and ethics."
  },
  {
    name: "Ms. K. Meenakshi",
    role: "Co-Founder & Director",
    image: "https://img.freepik.com/premium-vector/male-teacher-teacher-s-desk_679557-1380.jpg",
    bio: "With over 20 years of experience in education, Ms. K. Meenakshi is dedicated to fostering holistic development in students. Her passion for education and innovative learning methodologies have transformed the school into a center of excellence."
  }
];

export default function OurStoryFounders() {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" fontWeight={700} color="primary.dark" gutterBottom>
          Our Story & Founders
        </Typography>
        <Typography variant="body1" color="textSecondary" maxWidth="md" margin="auto">
          Established in Tamil Nadu, London Look School is committed to providing an innovative and nurturing environment.
          Our mission is to cultivate leaders who excel academically, ethically, and socially.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {founders.map((founder, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                borderRadius: 3, 
                boxShadow: 5, 
                transition: '0.3s', 
                '&:hover': { boxShadow: 10, transform: 'scale(1.05)' } 
              }}
            >
              <CardMedia component="img" height="280" image={founder.image} alt={founder.name} />
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="secondary.dark">
                  {founder.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {founder.role}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {founder.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
