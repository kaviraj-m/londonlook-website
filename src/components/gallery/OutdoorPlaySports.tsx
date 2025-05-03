import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const outdoorActivities = [
  {
    title: "Yoga Sessions",
    image: "https://thesagarschool.org/assets/images/sports/15.jpg",
    description: "Kids practice mindfulness and flexibility through guided yoga sessions."
  },
  {
    title: "Football & Team Sports",
    image: "https://thesagarschool.org/assets/images/sports/15.jpg",
    description: "Encouraging teamwork and sportsmanship with fun team games like football."
  },
  {
    title: "Track & Field",
    image: "https://thesagarschool.org/assets/images/sports/15.jpg",
    description: "Running, relay races, and other track events to build endurance and speed."
  },
  {
    title: "Fun Outdoor Games",
    image: "https://thesagarschool.org/assets/images/sports/15.jpg",
    description: "Engaging in traditional outdoor games like hopscotch and tug-of-war."
  }
];

export default function OutdoorPlaySports() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography 
        variant="h3" 
        gutterBottom 
        fontWeight={700} 
        textAlign="center" 
        sx={{ 
          color: "primary.dark",
          fontFamily: "'Fredoka', cursive",
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}
      >
        Outdoor Play & Sports
      </Typography>
      <Typography 
        variant="body1" 
        textAlign="center" 
        mb={4} 
        sx={{ 
          px: 2,
          color: "textSecondary",
          fontFamily: "'Comic Neue', cursive",
          fontSize: "1.1rem"
        }}
      >
        Physical activity is an essential part of our curriculum. We promote fitness, teamwork, and fun through various sports and outdoor games.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {outdoorActivities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 5, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
              <CardMedia component="img" height="220" image={activity.image} alt={activity.title} />
              <CardContent>
                <Typography 
                  variant="h6" 
                  fontWeight={700} 
                  sx={{ 
                    color: "secondary.dark",
                    fontFamily: "'Fredoka', cursive" 
                  }}
                >
                  {activity.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "textSecondary",
                    fontFamily: "'Comic Neue', cursive" 
                  }}
                >
                  {activity.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
