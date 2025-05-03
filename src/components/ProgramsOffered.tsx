import { Card, CardContent, Grid, Typography, Box, Container, Avatar } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const programs = [
  {
    title: "Comprehensive Curriculum",
    description: "A well-structured curriculum focusing on academic excellence and creative learning.",
    icon: <SchoolIcon fontSize="large" style={{ color: "#ffffff" }} />,
    bgGradient: "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)",
    iconBg: "#4CAF50",
    delay: 0.3
  },
  {
    title: "Activity-Based Learning",
    description: "Hands-on learning with engaging activities to make concepts easier to grasp.",
    icon: <EmojiObjectsIcon fontSize="large" style={{ color: "#ffffff" }} />,
    bgGradient: "linear-gradient(135deg, #FF9800 0%, #FFCC80 100%)",
    iconBg: "#FF9800",
    delay: 0.4
  },
  {
    title: "Phonics & Language Development",
    description: "Strong foundation in language skills through phonics-based reading programs.",
    icon: <AutoStoriesIcon fontSize="large" style={{ color: "#ffffff" }} />,
    bgGradient: "linear-gradient(135deg, #9C27B0 0%, #CE93D8 100%)",
    iconBg: "#9C27B0",
    delay: 0.5
  },
  {
    title: "Interactive Storytelling",
    description: "Encourages creativity and imagination through fun and interactive storytelling sessions.",
    icon: <LocalLibraryIcon fontSize="large" style={{ color: "#ffffff" }} />,
    bgGradient: "linear-gradient(135deg, #2196F3 0%, #90CAF9 100%)",
    iconBg: "#2196F3",
    delay: 0.6
  },
];

const ProgramsOffered = () => {
  return (
    <Box 
      sx={{ 
        py: 8, 
        px: 3, 
        background: "linear-gradient(135deg, #FFF8E1 0%, #FFFFFF 50%, #E8F5E9 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        component={motion.div}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.3, 0.5, 0.3]
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
          background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0) 70%)",
          top: "-10%",
          right: "-10%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0) 70%)",
          bottom: "-5%",
          left: "-5%",
          zIndex: 0
        }}
      />
      
      {/* Floating shapes */}
      <Box
        component={motion.div}
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: [0, -15, 0],
          opacity: 1,
          rotate: [0, 10, 0, -10, 0]
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, repeatType: "reverse" },
          rotate: { duration: 10, repeat: Infinity, repeatType: "reverse" }
        }}
        sx={{
          position: "absolute",
          width: "40px",
          height: "40px",
          background: "rgba(156, 39, 176, 0.1)",
          borderRadius: "8px",
          top: "15%",
          left: "10%",
          zIndex: 0,
          transform: "rotate(45deg)"
        }}
      />
      
      <Box
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: [0, 15, 0],
          opacity: 1,
          rotate: [0, -15, 0, 15, 0]
        }}
        transition={{ 
          y: { duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 },
          rotate: { duration: 12, repeat: Infinity, repeatType: "reverse", delay: 1 }
        }}
        sx={{
          position: "absolute",
          width: "30px",
          height: "30px",
          background: "rgba(76, 175, 80, 0.1)",
          borderRadius: "50%",
          top: "70%",
          right: "15%",
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              backgroundImage: "linear-gradient(45deg, #FF5722, #FF9800, #FFC107, #FFEB3B)",
              backgroundSize: "300% auto",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              animation: "gradient 5s ease infinite",
              fontFamily: "'Fredoka', cursive",
              mb: 1
            }}
          >
            Programs Offered
          </Typography>
          
          <Box 
            component={motion.div} 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              mb: 1 
            }}
          >
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ 
                color: "#9C27B0", 
                fontWeight: "bold",
                fontFamily: "'Fredoka', cursive",
                display: "inline-block",
                border: "2px dashed #9C27B0",
                borderRadius: "30px",
                px: 3,
                py: 0.5
              }}
            >
              LKG to 5th Standard
            </Typography>
          </Box>
          
          <Typography 
            variant="subtitle1" 
            align="center" 
            sx={{ 
              mb: 6, 
              maxWidth: "800px", 
              mx: "auto",
              fontFamily: "'Comic Neue', cursive",
              fontSize: "1.1rem",
              lineHeight: 1.7
            }}
          >
            Our <span style={{ color: "#FF5722", fontWeight: "bold" }}>unique teaching methodologies</span> ensure an 
            <span style={{ color: "#4CAF50", fontWeight: "bold" }}> engaging</span> and 
            <span style={{ color: "#2196F3", fontWeight: "bold" }}> effective</span> learning experience.
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: program.delay 
                }}
              >
                <Card 
                  sx={{ 
                    position: "relative",
                    height: "100%",
                    borderRadius: "20px", 
                    background: program.bgGradient,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    overflow: "visible",
                    p: 3, 
                    pb: 4,
                    textAlign: "center", 
                    transition: "0.3s",
                    border: "3px solid #ffffff",
                    "&:hover": { 
                      boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
                    }
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: program.iconBg,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                        mx: "auto",
                        mb: 2,
                        transform: "translateY(-40px)",
                        border: "4px solid #ffffff"
                      }}
                    >
                      {program.icon}
                    </Avatar>
                  </motion.div>
                  
                  <CardContent sx={{ p: 1, pt: 0, mt: -2 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: "bold", 
                        color: "#ffffff", 
                        fontFamily: "'Fredoka', cursive",
                        mb: 1.5,
                        textShadow: "1px 1px 3px rgba(0,0,0,0.2)"
                      }}
                    >
                      {program.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "rgba(255,255,255,0.9)", 
                        fontFamily: "'Comic Neue', cursive",
                        fontSize: "0.95rem"
                      }}
                    >
                      {program.description}
                    </Typography>
                  </CardContent>
                  
                  {/* Decorative circles */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -10,
                      right: -10,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.3)"
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      right: 15,
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.4)"
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgramsOffered;
