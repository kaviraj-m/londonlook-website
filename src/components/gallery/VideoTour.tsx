import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const videoLinks = [
  {
    title: "Campus Tour",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Explore our school campus and facilities in this guided video tour."
  },
  {
    title: "Sports & Outdoor Activities",
    url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    description: "Watch students engage in fun sports and outdoor activities."
  },
  {
    title: "Classroom Learning",
    url: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    description: "A sneak peek into our interactive learning environment."
  },
  {
    title: "Annual Day & Celebrations",
    url: "https://www.youtube.com/embed/LXb3EKWsInQ",
    description: "Highlights from our annual day and cultural events."
  }
];

export default function VideoTour() {
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
        🎬 Video Tour
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
        Get a glimpse of our school's vibrant atmosphere through this short video tour.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {videoLinks.map((video, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 5, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
              <iframe
                width="100%"
                height="315"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
              <CardContent>
                <Typography 
                  variant="h6" 
                  fontWeight={700} 
                  sx={{ 
                    color: "secondary.dark",
                    fontFamily: "'Fredoka', cursive" 
                  }}
                >
                  {video.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "textSecondary",
                    fontFamily: "'Comic Neue', cursive" 
                  }}
                >
                  {video.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
