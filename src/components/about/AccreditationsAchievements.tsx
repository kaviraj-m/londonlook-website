import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const achievements = [
  {
    title: "Best Emerging School Award",
    year: "2023",
    image: "https://www.mountabuschool.com/gree.png",
    description: "Recognized as the best emerging school in Tamil Nadu for excellence in education."
  },
  {
    title: "ISO 9001:2015 Certification",
    year: "2022",
    image: "https://www.mountabuschool.com/gree.png",
    description: "Certified for maintaining high educational standards and quality management."
  },
  {
    title: "Affiliated with CBSE",
    year: "Since 2020",
    image: "https://www.mountabuschool.com/gree.png",
    description: "Proudly affiliated with the Central Board of Secondary Education (CBSE)."
  },
  {
    title: "Best Infrastructure Award",
    year: "2021",
    image: "https://www.mountabuschool.com/gree.png",
    description: "Awarded for our world-class infrastructure and modern learning environment."
  }
];

export default function AccreditationsAchievements() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" color="primary.dark" gutterBottom>
        Accreditations & Achievements
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={4} sx={{ px: 2 }}>
        London Look School is proud to be recognized for its excellence in academics, infrastructure, and quality education.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 5, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
              <CardMedia component="img" height="180" image={achievement.image} alt={achievement.title} />
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="secondary.dark">
                  {achievement.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {achievement.year}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
