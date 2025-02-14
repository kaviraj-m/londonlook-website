import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const infrastructureItems = [
  {
    title: "Spacious Classrooms",
    image: "https://www.americanprogress.org/wp-content/uploads/sites/2/2021/05/SchoolInfrastructureReport.jpg",
    description: "Well-ventilated, tech-enabled classrooms designed to encourage interactive learning."
  },
  {
    title: "Library",
    image: "https://www.americanprogress.org/wp-content/uploads/sites/2/2021/05/SchoolInfrastructureReport.jpg",
    description: "A well-stocked library with a vast collection of books to enhance knowledge and curiosity."
  },
  {
    title: "Play Area",
    image: "https://www.americanprogress.org/wp-content/uploads/sites/2/2021/05/SchoolInfrastructureReport.jpg",
    description: "Safe and engaging outdoor play areas to promote physical activity and social development."
  },
  {
    title: "Science & Computer Labs",
    image: "https://www.americanprogress.org/wp-content/uploads/sites/2/2021/05/SchoolInfrastructureReport.jpg",
    description: "Modern science and computer labs equipped with the latest technology for practical learning."
  },
  {
    title: "Transport Facilities",
    image: "https://www.americanprogress.org/wp-content/uploads/sites/2/2021/05/SchoolInfrastructureReport.jpg",
    description: "Safe and reliable school transport covering multiple routes for students' convenience."
  }
];

export default function SchoolInfrastructure() {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Typography variant="h3" gutterBottom fontWeight={700} textAlign="center" color="primary.dark">
        School Infrastructure
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={4} sx={{ px: 2 }}>
        Our school provides a world-class learning environment with top-notch infrastructure to support students' holistic development.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {infrastructureItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 5, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
              <CardMedia component="img" height="220" image={item.image} alt={item.title} />
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="secondary.dark">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
