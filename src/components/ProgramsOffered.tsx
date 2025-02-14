import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const programs = [
  {
    title: "Comprehensive Curriculum",
    description: "A well-structured curriculum focusing on academic excellence and creative learning.",
    icon: <SchoolIcon fontSize="large" color="primary" />,
  },
  {
    title: "Activity-Based Learning",
    description: "Hands-on learning with engaging activities to make concepts easier to grasp.",
    icon: <EmojiObjectsIcon fontSize="large" color="secondary" />,
  },
  {
    title: "Phonics & Language Development",
    description: "Strong foundation in language skills through phonics-based reading programs.",
    icon: <AutoStoriesIcon fontSize="large" color="success" />,
  },
  {
    title: "Interactive Storytelling",
    description: "Encourages creativity and imagination through fun and interactive storytelling sessions.",
    icon: <LocalLibraryIcon fontSize="large" color="warning" />,
  },
];

const ProgramsOffered = () => {
  return (
    <Box sx={{ py: 5, px: 3, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
        Programs Offered (LKG to 5th Standard)
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ mb: 4 }}>
        Our unique teaching methodologies ensure an engaging and effective learning experience.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {programs.map((program, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ p: 3, borderRadius: 3, textAlign: "center", transition: "0.3s", "&:hover": { transform: "scale(1.05)", boxShadow: 6 } }}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>{program.icon}</Box>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{program.title}</Typography>
                <Typography variant="body2" color="textSecondary">{program.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProgramsOffered;
