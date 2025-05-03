import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const infrastructureData = [
  {
    icon: <SchoolIcon style={{ fontSize: "2rem", color: "#ffffff" }} />,
    title: "Classrooms",
    description: [
      "Fully Air Conditioned (A/C) Classrooms & Activity Rooms",
      "Digitally equipped classrooms",
      "Whiteboards for clarity & dust-free environment",
      "CCTV surveillance",
      "LCD Projectors for big screen displays"
    ],
    color: "#FF9800",
    bgGradient: "linear-gradient(135deg, #FF9800 0%, #FFCC80 100%)",
    delay: 0.2
  },
  {
    icon: <ComputerIcon style={{ fontSize: "2rem", color: "#ffffff" }} />,
    title: "Computer & Science Lab",
    description: [
      "High-end computers for basic & creative learning",
      "Search engines and online services available",
      "Well-equipped science lab for experiments"
    ],
    color: "#1976D2",
    bgGradient: "linear-gradient(135deg, #1976D2 0%, #64B5F6 100%)",
    delay: 0.3
  },
  {
    icon: <LanguageIcon style={{ fontSize: "2rem", color: "#ffffff" }} />,
    title: "Language Lab",
    description: [
      "Literary association club for Tamil & English",
      "Focus on pronunciation skill development",
      "Interactive language learning tools"
    ],
    color: "#9C27B0",
    bgGradient: "linear-gradient(135deg, #9C27B0 0%, #CE93D8 100%)",
    delay: 0.4
  },
  {
    icon: <LibraryBooksIcon style={{ fontSize: "2rem", color: "#ffffff" }} />,
    title: "Library",
    description: [
      "Develops a love for reading & effective communication",
      "Encourages curiosity and learning",
      "Diverse collection of books and digital resources"
    ],
    color: "#4CAF50",
    bgGradient: "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)",
    delay: 0.5
  },
  {
    icon: <SportsEsportsIcon style={{ fontSize: "2rem", color: "#ffffff" }} />,
    title: "Indoor Games",
    description: [
      "Indoor games facility to refresh young minds",
      "Encourages physical & mental development"
    ],
    color: "#F44336",
    bgGradient: "linear-gradient(135deg, #F44336 0%, #EF9A9A 100%)",
    delay: 0.6
  },
];

const Infrastructure: React.FC = () => {
  return (
    <Box 
      sx={{ 
        py: 8, 
        background: "linear-gradient(135deg, #FFEBEE 0%, #FFFFFF 50%, #E0F7FA 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        component={motion.div}
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        sx={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0) 70%)",
          top: "5%",
          right: "-5%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0) 70%)",
          bottom: "-10%",
          left: "-10%",
          zIndex: 0
        }}
      />
      
      {/* Small decorative elements */}
      {[...Array(8)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.6,
            y: [Math.random() * 10, Math.random() * -10, Math.random() * 10],
            x: [Math.random() * 10, Math.random() * -10, Math.random() * 10],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10, 
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5
          }}
          sx={{
            position: "absolute",
            width: 10 + Math.random() * 15,
            height: 10 + Math.random() * 15,
            backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 80%, 80%)`,
            borderRadius: Math.random() > 0.5 ? "50%" : "20%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0
          }}
        />
      ))}
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Pre-KG & LKG Section */}
        <Box 
          component={motion.div}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          textAlign="center" 
          sx={{ mb: 8 }}
        >
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            gutterBottom
            sx={{
              fontFamily: "'Fredoka', cursive",
              backgroundImage: "linear-gradient(45deg, #FF5722, #FF9800, #FFC107)",
              backgroundSize: "300% auto",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              animation: "gradient 5s ease infinite",
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '5px',
                background: 'linear-gradient(90deg, #FF9800, #FFC107)',
                margin: '15px auto',
                borderRadius: '10px'
              }
            }}
          >
            Pre-KG & LKG அட்மிஷன்
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Box 
              sx={{
                position: 'relative',
                color: '#2C3E50',
                fontSize: '1.2rem',
                maxWidth: '850px',
                margin: '0 auto',
                padding: '20px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5))',
                border: '3px dashed #FF9800',
                boxShadow: '0 10px 30px rgba(255, 152, 0, 0.15)',
                fontFamily: "'Comic Neue', cursive",
                overflow: 'hidden'
              }}
            >
              <Box
                component={motion.div}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                sx={{
                  position: 'absolute',
                  top: -15,
                  right: -15,
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF9800, #FFC107)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(255, 152, 0, 0.3)'
                }}
              >
                <DirectionsBikeIcon sx={{ color: 'white', fontSize: '2rem' }} />
              </Box>
              
              பிரி கேஜி மற்றும் எல்கேஜி வகுப்புகளில் சேரும் குழந்தைகளுக்கு 
              <Box component="span" sx={{ 
                fontWeight: 'bold', 
                color: '#F44336',
                fontSize: '1.3rem',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { opacity: 1 },
                  '50%': { opacity: 0.7 },
                  '100%': { opacity: 1 }
                }
              }}>
                {' '}சிறப்பு பரிசாக சைக்கிள் வழங்கப்படும்!{' '}
              </Box>
              புதிய மாணவர் சேர்க்கை நடைபெற்று வருகிறது.
            </Box>
          </motion.div>
        </Box>

        {/* Infrastructure Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            sx={{ 
              mb: 6, 
              textAlign: "center",
              fontFamily: "'Fredoka', cursive",
              backgroundImage: "linear-gradient(45deg, #2196F3, #4CAF50, #2196F3)",
              backgroundSize: "200% auto",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              animation: "gradient 5s ease infinite",
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #2196F3, #4CAF50)',
                margin: '10px auto',
                borderRadius: '10px'
              }
            }}
          >
            Infrastructure
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {infrastructureData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10, 
                  delay: item.delay
                }}
              >
                <Card 
                  sx={{ 
                    p: 0, 
                    borderRadius: '20px', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                    transition: "0.3s", 
                    overflow: 'hidden',
                    border: '3px solid #ffffff',
                    height: '100%',
                    "&:hover": { 
                      boxShadow: '0 15px 40px rgba(0,0,0,0.15)'
                    } 
                  }}
                >
                  <Box 
                    sx={{ 
                      background: item.bgGradient,
                      p: 2,
                      pt: 2.5,
                      pb: 2.5,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-30%',
                        right: '-10%',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)'
                      }}
                    />
                    
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: '-20%',
                        left: '-5%',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)'
                      }}
                    />
                    
                    <Typography 
                      variant="h5" 
                      fontWeight="bold" 
                      sx={{ 
                        display: "flex", 
                        alignItems: "center",
                        color: '#ffffff',
                        fontFamily: "'Fredoka', cursive",
                        textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                        zIndex: 2,
                        position: 'relative'
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          bgcolor: 'white', 
                          color: item.color,
                          mr: 2,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      {item.title}
                    </Typography>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Box 
                      component="ul" 
                      sx={{ 
                        pl: 2, 
                        mt: 1,
                        mb: 1,
                        '& li': {
                          color: '#555',
                          fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                          fontFamily: "'Comic Neue', cursive",
                          lineHeight: 1.8,
                          mb: 1.5,
                          position: 'relative',
                          paddingLeft: '5px',
                          '&::marker': {
                            color: item.color,
                            fontSize: '1.2em'
                          }
                        }
                      }}
                    >
                      {item.description.map((point, i) => (
                        <motion.li 
                          key={i}
                          initial={{ x: -5, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: item.delay + (i * 0.1) }}
                        >
                          {point}
                        </motion.li>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Infrastructure;
