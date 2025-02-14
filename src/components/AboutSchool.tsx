import { Card, CardContent, Typography, Box, Grid, Container, Divider, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const values = [
  {
    title: "Discipline",
    description: "We instill strong moral values, punctuality, and self-discipline to help students become responsible citizens.",
    icon: <MilitaryTechIcon fontSize="large" color="primary" />,
  },
  {
    title: "Creativity",
    description: "Our curriculum encourages imagination, artistic expression, and problem-solving skills for holistic development.",
    icon: <AutoAwesomeIcon fontSize="large" color="secondary" />,
  },
  {
    title: "Academic Excellence",
    description: "We provide a strong foundation in core subjects, ensuring students excel in academics and beyond.",
    icon: <SchoolIcon fontSize="large" color="success" />,
  },
  {
    title: "Innovative Learning",
    description: "Our teaching methods integrate modern technology, hands-on learning, and interactive classrooms.",
    icon: <EmojiObjectsIcon fontSize="large" color="warning" />,
  },
  {
    title: "Compassion & Kindness",
    description: "We nurture empathy, teamwork, and respect for others, creating a caring school environment.",
    icon: <FavoriteIcon fontSize="large" color="error" />,
  },
  {
    title: "Reading & Knowledge",
    description: "A strong emphasis on reading, literature, and curiosity-driven learning fosters a love for knowledge.",
    icon: <LocalLibraryIcon fontSize="large" color="info" />,
  },
];

const AboutSchool = () => {
  return (
    <Box sx={{ py: 6, px: 3, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", textTransform: "uppercase", letterSpacing: 1 }}
        >
          About Our School
        </Typography>
        <Typography
  variant="subtitle1"
  align="center"
  color="textSecondary"
  sx={{ mb: 4, maxWidth: "900px", mx: "auto" }}
>
  At <strong>London Look School</strong>, we are dedicated to shaping young minds with a <strong>blend of academics, creativity, and values</strong>.  
  Our structured learning approach ensures that every student thrives in a nurturing and engaging environment.
</Typography>

<Paper elevation={3} sx={{ p: 4, borderRadius: 3, maxWidth: "1000px", mx: "auto", textAlign: "center", boxShadow: 4 }}>
  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1976d2", mb: 2 }}>
    Our Vision & Mission
  </Typography>
  <Typography variant="body1" color="textSecondary">
    Our vision is to <strong>nurture well-rounded individuals</strong> with knowledge, integrity, and leadership skills.  
    We aim to create an inspiring learning atmosphere where <strong>discipline, curiosity, and innovation</strong> are at the core.
  </Typography>
</Paper>
        {/* Divider */}
        <Divider sx={{ my: 6, mx: "auto", width: "50px", height: "4px", backgroundColor: "#1976d2", borderRadius: 2 }} />

        {/* Our Core Values */}
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Our Core Values
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>{value.icon}</Box>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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

        {/* Extra Section */}
        <Box sx={{ mt: 6, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976d2", mb: 2 }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            We offer a **progressive education system** that focuses on **academic rigor, creative exploration, and character building**.  
            Our state-of-the-art facilities, **qualified faculty, and activity-based learning** make us the **ideal choice** for your child's education.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSchool;
