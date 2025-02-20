import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const events = [
  {
    title: "International Yoga Day",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047427/International_yoga_day_celebration_acr7ci.jpg",
    description: "Students practicing yoga, promoting physical and mental well-being through ancient traditions."
  },
  {
    title: "Sports & Games Day",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047427/Sports_day_and_playing_games_in_celeberation_wrna8b.jpg",
    description: "Active participation in various sports activities fostering team spirit and physical fitness."
  },
  {
    title: "International Book Reading Day",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047427/International_books_reading_day_wbkdb7.jpg",
    description: "Cultivating a love for reading and literature among our young learners."
  },
  {
    title: "Kamarajar Birthday Celebration",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047428/Kamarajar_b_day_celebration_Fancy_dress_z7nu9q.jpg",
    description: "Students dressed as historical figures, honoring the great education reformer."
  },
  {
    title: "Christmas Celebrations",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047428/Christmas_celebration_ldjbkt.jpg",
    description: "Festive celebrations with students spreading joy and Christmas spirit."
  },
  {
    title: "Pongal with Parents",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047428/Pongal_celebration_in_Parents_participation_h20ykz.jpg",
    description: "Traditional Pongal celebrations with active participation from parents and families."
  },
  {
    title: "Republic Day Leaders",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047429/Fancy_dress_National_leadersRepublic_day_celebratio_jcc9ju.jpg",
    description: "Students dressed as national leaders commemorating Republic Day with patriotic fervor."
  }
];

export default function EventsCelebrations() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom fontWeight={700} textAlign="center" color="primary.dark">
        Events & Celebrations
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={4} sx={{ px: 2 }}>
        We celebrate milestones, achievements, and festivals with enthusiasm, creating lasting memories for students.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 5, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
              <CardMedia component="img" height="220" image={event.image} alt={event.title} />
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="secondary.dark">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
