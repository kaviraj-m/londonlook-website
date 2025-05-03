import { Card, CardContent, Typography, Box, Grid, Container, Divider, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const values = [
  {
    title: "Discipline",
    description: "We instill strong moral values, punctuality, and self-discipline to help students become responsible citizens.",
    icon: <MilitaryTechIcon fontSize="large" style={{ color: "#3F51B5" }} />,
    bgColor: "linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 100%)",
    delay: 0.2
  },
  {
    title: "Creativity",
    description: "Our curriculum encourages imagination, artistic expression, and problem-solving skills for holistic development.",
    icon: <AutoAwesomeIcon fontSize="large" style={{ color: "#FF9800" }} />,
    bgColor: "linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)",
    delay: 0.3
  },
  {
    title: "Academic Excellence",
    description: "We provide a strong foundation in core subjects, ensuring students excel in academics and beyond.",
    icon: <SchoolIcon fontSize="large" style={{ color: "#4CAF50" }} />,
    bgColor: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
    delay: 0.4
  },
  {
    title: "Innovative Learning",
    description: "Our teaching methods integrate modern technology, hands-on learning, and interactive classrooms.",
    icon: <EmojiObjectsIcon fontSize="large" style={{ color: "#9C27B0" }} />,
    bgColor: "linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)",
    delay: 0.5
  },
  {
    title: "Compassion & Kindness",
    description: "We nurture empathy, teamwork, and respect for others, creating a caring school environment.",
    icon: <FavoriteIcon fontSize="large" style={{ color: "#E91E63" }} />,
    bgColor: "linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)",
    delay: 0.6
  },
  {
    title: "Reading & Knowledge",
    description: "A strong emphasis on reading, literature, and curiosity-driven learning fosters a love for knowledge.",
    icon: <LocalLibraryIcon fontSize="large" style={{ color: "#2196F3" }} />,
    bgColor: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
    delay: 0.7
  },
];

const AboutSchool = () => {
  return (
    <Box 
      sx={{ 
        py: 8, 
        px: 3, 
        background: "linear-gradient(135deg, #E1F5FE 0%, #FFFFFF 50%, #F1F8E9 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156,39,176,0.1) 0%, rgba(156,39,176,0) 70%)",
          top: "5%",
          left: "-5%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0) 70%)",
          bottom: "10%",
          right: "-5%",
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: "bold", 
              fontFamily: "'Fredoka', cursive",
              textTransform: "uppercase", 
              letterSpacing: 1,
              backgroundImage: "linear-gradient(45deg, #FF9800, #F44336, #9C27B0, #3F51B5, #2196F3)",
              backgroundSize: "300% 300%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: "gradient 6s ease infinite",
            }}
          >
            About Our School
          </Typography>
          
          <style>
            {`
              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}
          </style>
          
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ mb: 4, maxWidth: "900px", mx: "auto", fontFamily: "'Comic Neue', cursive", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            At <span style={{ color: "#E91E63", fontWeight: "bold" }}>London Look School</span>, we are dedicated to shaping young minds with a 
            <span style={{ color: "#4CAF50", fontWeight: "bold" }}> blend of academics</span>, 
            <span style={{ color: "#FF9800", fontWeight: "bold" }}> creativity</span>, and 
            <span style={{ color: "#2196F3", fontWeight: "bold" }}> values</span>.  
            Our structured learning approach ensures that every student thrives in a nurturing and engaging environment.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: "30px", 
              maxWidth: "1000px", 
              mx: "auto", 
              textAlign: "center", 
              background: "linear-gradient(135deg, #FFF8E1 0%, #FFFFFF 100%)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              border: "2px dashed #FFC107",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "rgba(255, 193, 7, 0.1)",
                zIndex: 0
              }}
            />
            
            <Box
              sx={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(255, 193, 7, 0.1)",
                zIndex: 0
              }}
            />
            
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: "bold", 
                color: "#FF9800", 
                mb: 2, 
                fontFamily: "'Fredoka', cursive",
                position: "relative",
                zIndex: 1,
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
              }}
            >
              Our Vision & Mission
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.1rem", 
                lineHeight: 1.7, 
                fontFamily: "'Comic Neue', cursive",
                position: "relative",
                zIndex: 1
              }}
            >
              Our vision is to <span style={{ color: "#4CAF50", fontWeight: "bold" }}>nurture well-rounded individuals</span> with knowledge, integrity, and leadership skills.  
              We aim to create an inspiring learning atmosphere where <span style={{ color: "#9C27B0", fontWeight: "bold" }}>discipline, curiosity, and innovation</span> are at the core.
            </Typography>
          </Paper>
        </motion.div>

        {/* Divider */}
        <Box 
          component={motion.div}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            my: 6 
          }}
        >
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            width: "100%", 
            maxWidth: "300px" 
          }}>
            <Divider sx={{ flexGrow: 1, height: "3px", background: "linear-gradient(90deg, transparent, #FF9800)" }} />
            <Box
              component={motion.div}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FF9800, #FFC107)",
                boxShadow: "0 4px 10px rgba(255,152,0,0.3)",
                mx: 2
              }}
            >
              <SchoolIcon sx={{ color: "white" }} />
            </Box>
            <Divider sx={{ flexGrow: 1, height: "3px", background: "linear-gradient(90deg, #FF9800, transparent)" }} />
          </Box>
        </Box>

        {/* Our Core Values */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Typography 
            variant="h4" 
            align="center" 
            sx={{ 
              fontWeight: "bold", 
              mb: 4, 
              fontFamily: "'Fredoka', cursive",
              color: "#3F51B5"
            }}
          >
            Our Core Values
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10, 
                  delay: value.delay,
                  whileHover: { duration: 0.2 }
                }}
              >
                <Card
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    textAlign: "center",
                    background: value.bgColor,
                    transition: "0.3s",
                    height: "100%",
                    border: "2px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.07)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": { 
                      boxShadow: "0 15px 30px rgba(0,0,0,0.12)"
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      display: "flex", 
                      justifyContent: "center", 
                      mb: 2,
                      position: "relative",
                      zIndex: 2
                    }}
                  >
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                  </Box>
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: "bold", 
                        fontFamily: "'Fredoka', cursive",
                        mb: 1.5,
                        position: "relative",
                        zIndex: 2
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: "#555", 
                        fontFamily: "'Comic Neue', cursive",
                        fontSize: "0.95rem",
                        position: "relative",
                        zIndex: 2
                      }}
                    >
                      {value.description}
                    </Typography>
                    
                    {/* Decorative circles */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: -10,
                        left: -10,
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.4)",
                        zIndex: 1
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: -15,
                        right: -15,
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.5)",
                        zIndex: 1
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Extra Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Box 
            sx={{ 
              mt: 8, 
              textAlign: "center", 
              maxWidth: "800px", 
              mx: "auto",
              p: 4,
              borderRadius: "20px",
              background: "linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)",
              border: "2px dashed rgba(33, 150, 243, 0.3)"
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: "bold", 
                color: "#2196F3", 
                mb: 2, 
                fontFamily: "'Fredoka', cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
              }}
            >
              Why Choose Us?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#333", 
                fontFamily: "'Comic Neue', cursive",
                fontSize: "1.1rem",
                lineHeight: 1.7
              }}
            >
              We offer a <span style={{ color: "#E91E63", fontWeight: "bold" }}>progressive education system</span> that focuses on <span style={{ color: "#4CAF50", fontWeight: "bold" }}>academic rigor, creative exploration, and character building</span>.{' '}
              Our state-of-the-art facilities, <span style={{ color: "#FF9800", fontWeight: "bold" }}>qualified faculty, and activity-based learning</span> make us the <span style={{ color: "#9C27B0", fontWeight: "bold" }}>ideal choice</span> for your child's education.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSchool;
