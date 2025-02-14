import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { School, Gavel, Lightbulb, Favorite } from "@mui/icons-material";

const missionValues = [
  {
    title: "Academic Excellence",
    description: "We strive to provide a rigorous and innovative curriculum that fosters intellectual growth.",
    icon: <School fontSize="large" color="primary" />,
  },
  {
    title: "Discipline",
    description: "Discipline is the foundation of success. We instill self-control, respect, and responsibility.",
    icon: <Gavel fontSize="large" color="secondary" />,
  },
  {
    title: "Creativity",
    description: "Encouraging students to think outside the box and develop innovative problem-solving skills.",
    icon: <Lightbulb fontSize="large" sx={{ color: "orange" }} />,
  },
  {
    title: "Moral Values",
    description: "Instilling honesty, kindness, and ethical behavior to create responsible citizens.",
    icon: <Favorite fontSize="large" sx={{ color: "red" }} />,
  }
];

export default function OurMissionValues() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom fontWeight={700} textAlign="center" color="primary.dark">
        Our Mission & Values
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={4} sx={{ px: 2 }}>
        Our school is committed to fostering academic excellence, discipline, creativity, and strong moral values.
      </Typography>
      <Grid container spacing={4}>
        {missionValues.map((value, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ 
              p: 3, 
              textAlign: "center", 
              borderRadius: 3, 
              boxShadow: 5, 
              transition: "0.3s", 
              "&:hover": { boxShadow: 10, transform: "scale(1.05)" } 
            }}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                {value.icon}
              </Box>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="primary.dark">
                  {value.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
