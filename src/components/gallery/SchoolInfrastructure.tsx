import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const infrastructureItems = [
  {
    title: "Modern Classrooms",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740061777/class_room_2_cvilkz.jpg",
    description: "Well-ventilated, tech-enabled classrooms designed to encourage interactive learning."
  },
  {
    title: "School Building",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740061777/out_side_of_building_look_of_ykng91.jpg",
    description: "State-of-the-art infrastructure with modern amenities for quality education."
  },
  {
    title: "Play Ground",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740061777/play_ground_outdoor_xzo8hg.jpg",
    description: "Safe and engaging outdoor play areas to promote physical activity and social development."
  },
  {
    title: "Computer Lab",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740061778/computer_lab_fwj3ki.jpg",
    description: "Modern computer lab equipped with the latest technology for practical learning."
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
