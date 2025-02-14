import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const events = [
  {
    title: "Annual Day Celebration",
    image: "https://makoons.com/blogs/wp-content/uploads/2025/01/makoons-1.jpg",
    description: "A grand celebration of students' talents through performances, awards, and achievements."
  },
  {
    title: "Sports Day",
    image: "https://makoons.com/blogs/wp-content/uploads/2025/01/makoons-1.jpg",
    description: "An exciting day filled with athletic events, team competitions, and sportsmanship."
  },
  {
    title: "Cultural Programs",
    image: "https://makoons.com/blogs/wp-content/uploads/2025/01/makoons-1.jpg",
    description: "Showcasing diverse cultural performances, music, dance, and drama by our talented students."
  },
  {
    title: "Festival Celebrations",
    image: "https://makoons.com/blogs/wp-content/uploads/2025/01/makoons-1.jpg",
    description: "Bringing joy to the campus with celebrations of Diwali, Pongal, Christmas, and more."
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
