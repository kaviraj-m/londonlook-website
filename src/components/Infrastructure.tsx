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
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            color="#2C3E50" 
            gutterBottom
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '3px',
                background: '#ff9800',
                margin: '10px auto',
                borderRadius: '2px'
              }
            }}
          >
            Pre-KG & LKG அட்மிஷன்
          </Typography>
          <Typography 
            variant="body1" 
            sx={{
              color: '#2C3E50',
              fontSize: '1.1rem',
              maxWidth: '800px',
              margin: '0 auto',
              padding: '10px',
              borderRadius: '8px',
              background: 'rgba(255, 152, 0, 0.1)',
              border: '1px dashed #ff9800'
            }}
          >
            பிரி கேஜி மற்றும் எல்கேஜி வகுப்புகளில் சேரும் குழந்தைகளுக்கு 
            <Box component="span" sx={{ fontWeight: 'bold', color: '#ff5722' }}>
              {' '}சிறப்பு பரிசாக சைக்கிள் வழங்கப்படும்!{' '}
            </Box>
            புதிய மாணவர் சேர்க்கை நடைபெற்று வருகிறது.
          </Typography>
        </Box>

        {/* Infrastructure Section */}
        <Typography 
          variant="h5" 
          fontWeight="bold" 
          color="#2C3E50" 
          sx={{ 
            mb: 4, 
            textAlign: "center",
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '50px',
              height: '3px',
              background: '#2C3E50',
              margin: '10px auto',
              borderRadius: '2px'
            }
          }}
        >
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
                  <Box 
                    component="ul" 
                    sx={{ 
                      pl: 2, 
                      mt: 2,
                      '& li': {
                        color: '#555',
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        lineHeight: 1.8,
                        mb: 1.5,
                        position: 'relative',
                        paddingLeft: '5px',
                        '&::marker': {
                          color: '#666',
                          fontSize: '1.1em'
                        }
                      }
                    }}
                  >
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
