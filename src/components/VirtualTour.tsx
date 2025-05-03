import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import VideocamIcon from '@mui/icons-material/Videocam';
import MovieIcon from '@mui/icons-material/Movie';

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const VirtualTour: React.FC = () => {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        background: "linear-gradient(135deg, #E8F5E9 0%, #FFFFFF 50%, #FFF3E0 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        component={motion.div}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156,39,176,0.08) 0%, rgba(156,39,176,0) 70%)",
          top: "-5%",
          left: "-5%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
        sx={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,193,7,0.08) 0%, rgba(255,193,7,0) 70%)",
          bottom: "-10%",
          right: "-5%",
          zIndex: 0
        }}
      />
      
      {/* Floating decorative elements */}
      <Box
        component={motion.div}
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 10, 0, -10, 0],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "30px",
          height: "30px",
          borderRadius: "8px",
          background: "rgba(244, 67, 54, 0.2)",
          top: "20%",
          right: "15%",
          transform: "rotate(45deg)",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{ 
          y: [15, -15, 15],
          x: [10, -10, 10],
          rotate: 360
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(33, 150, 243, 0.15)",
          bottom: "30%",
          left: "10%",
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
            fontWeight="bold"
            gutterBottom
            sx={{ 
              letterSpacing: "1px",
              fontFamily: "'Fredoka', cursive",
              backgroundImage: "linear-gradient(45deg, #FF5722, #9C27B0, #2196F3)",
              backgroundSize: "300% auto",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              animation: "gradient 5s ease infinite",
              mb: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <motion.div
              animate={{ rotate: [0, 15, 0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ display: "inline-block", fontSize: "1.2em" }}
            >
              🎥
            </motion.div> 
            Explore Our School
          </Typography>

          <Box
            component={motion.div}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{ 
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #FF5722, #9C27B0, #2196F3)",
              mx: "auto",
              mb: 3,
              borderRadius: "10px"
            }}
          />

          <Typography
            variant="body1"
            sx={{ 
              mb: 5, 
              px: 2, 
              maxWidth: "800px", 
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              fontFamily: "'Comic Neue', cursive",
            }}
          >
            Take a <span style={{ color: "#E91E63", fontWeight: "bold" }}>virtual tour</span> of our school and experience the 
            <span style={{ color: "#4CAF50", fontWeight: "bold" }}> learning environment</span> firsthand. 
            Watch these videos to see how we blend <span style={{ color: "#FF9800", fontWeight: "bold" }}>fun</span>, 
            <span style={{ color: "#9C27B0", fontWeight: "bold" }}> creativity</span>, and 
            <span style={{ color: "#2196F3", fontWeight: "bold" }}> structured education</span> to nurture your child's growth.
          </Typography>
        </motion.div>

        <Grid container spacing={5} justifyContent="center">
          {/* First Video */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                delay: 0.4
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
                  border: "8px solid white",
                  mb: 2
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                    height: 0,
                    overflow: "hidden",
                    maxWidth: "100%",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/f8ZpmdqU0lg?si=MeCJDYRih7HHtGY7"
                    title="London Look School Tour"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                
                <Box 
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  sx={{
                    position: "absolute",
                    top: -25,
                    left: -25,
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FF9800, #FF5722)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(255, 152, 0, 0.5)",
                    zIndex: 10
                  }}
                >
                  <VideocamIcon fontSize="large" />
                </Box>
              </Paper>
              <Typography
                variant="h6"
                sx={{ 
                  fontFamily: "'Fredoka', cursive",
                  color: "#FF5722",
                  fontWeight: "bold",
                  mt: 1
                }}
              >
                SCHOOL ANNUAL DAY
              </Typography>
            </motion.div>
          </Grid>
          
          {/* Second Video */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                delay: 0.6
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
                  border: "8px solid white",
                  mb: 2
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                    height: 0,
                    overflow: "hidden",
                    maxWidth: "100%",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/TY4rKTexIOI?si=FtgMIc-zJScaRP1a"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                
                <Box 
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  sx={{
                    position: "absolute",
                    top: -25,
                    left: -25,
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2196F3, #3F51B5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(33, 150, 243, 0.5)",
                    zIndex: 10
                  }}
                >
                  <MovieIcon fontSize="large" />
                </Box>
              </Paper>
              <Typography
                variant="h6"
                sx={{ 
                  fontFamily: "'Fredoka', cursive",
                  color: "#2196F3",
                  fontWeight: "bold",
                  mt: 1
                }}
              >
                SCHOOL ANNUAL DAY
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VirtualTour;
