import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LanguageIcon from "@mui/icons-material/Language";

const infrastructureData = [
  {
    icon: <SchoolIcon sx={{ mr: 1, color: "#ff9800" }} />,
    title: "Classrooms",
    description: [
      "Fully Air Conditioned (A/C) Classrooms & Activity Rooms",
      "Digitally equipped classrooms",
      "Whiteboards for clarity & dust-free environment",
      "CCTV surveillance",
      "LCD Projectors for big screen displays"
    ],
  },
  {
    icon: <ComputerIcon sx={{ mr: 1, color: "#1976d2" }} />,
    title: "Computer & Science Lab",
    description: [
      "High-end computers for basic & creative learning",
      "Search engines and online services available",
      "Well-equipped science lab for experiments"
    ],
  },
  {
    icon: <LanguageIcon sx={{ mr: 1, color: "#9c27b0" }} />,
    title: "Language Lab",
    description: [
      "Literary association club for Tamil & English",
      "Focus on pronunciation skill development",
      "Interactive language learning tools"
    ],
  },
  {
    icon: <LibraryBooksIcon sx={{ mr: 1, color: "#4caf50" }} />,
    title: "Library",
    description: [
      "Develops a love for reading & effective communication",
      "Encourages curiosity and learning",
      "Diverse collection of books and digital resources"
    ],
  },
  {
    icon: <SportsEsportsIcon sx={{ mr: 1, color: "#f44336" }} />,
    title: "Indoor Games",
    description: [
      "Indoor games facility to refresh young minds",
      "Encourages physical & mental development"
    ],
  },
];

const Infrastructure: React.FC = () => {
  return (
    <Box sx={{ py: 8, background: "#f4f6f8" }}>
      <Container maxWidth="lg">
        {/* Pre-KG & LKG Section */}
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h4" fontWeight="bold" color="#2C3E50" gutterBottom>
            Pre-KG, LKG
          </Typography>
          <Typography variant="body1" color="textSecondary">
            சேறும் குழந்தைகளுக்கு சிறப்பு பாரிசா வழங்கப்படும்
          </Typography>
        </Box>

        {/* Infrastructure Section */}
        <Typography variant="h5" fontWeight="bold" color="#2C3E50" sx={{ mb: 4, textAlign: "center" }}>
          Infrastructure
        </Typography>

        <Grid container spacing={4}>
          {infrastructureData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", alignItems: "center" }}>
                    {item.icon} {item.title}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Infrastructure;
