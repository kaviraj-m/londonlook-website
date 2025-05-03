import { Container, Typography, Card, CardContent, Stack, Box, Paper } from "@mui/material";
import { 
  LocationOn, 
  Link as LinkIcon, 
  School, 
  DirectionsBus, 
  Explore,
  EmojiTransportation 
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

// Create motion components
const MotionContainer = motion(Container);
const MotionCard = motion(Card);
const MotionBox = motion(Box);

export default function SchoolAddress() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #E1F5FE 0%, #FFF9C4 100%)",
        py: { xs: 6, md: 8 },
        borderRadius: { xs: '0', md: '25px' },
        margin: { xs: 0, md: 4 },
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative elements */}
      <Box
        component={motion.div}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,150,243,0.1) 0%, rgba(255,255,255,0) 70%)",
          top: "10%",
          right: "-5%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, rgba(255,255,255,0) 70%)",
          bottom: "10%",
          left: "-8%",
          zIndex: 0
        }}
      />

      {/* Road decorations */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{ 
            x: ["-100%", "100%"],
          }}
          transition={{ 
            duration: 15 + (i * 3), 
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 2,
            ease: "linear"
          }}
          sx={{
            position: "absolute",
            bottom: 40 + (i * 20),
            left: 0,
            width: 50,
            height: 20,
            borderRadius: 2,
            background: i % 2 === 0 ? "#FFD54F" : "#4FC3F7",
            opacity: 0.4,
            zIndex: 0
          }}
        />
      ))}

      <MotionContainer 
        maxWidth="lg" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ 
          py: { xs: 6, md: 8 },
          position: "relative",
          zIndex: 1
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{ textAlign: "center", mb: 5 }}
        >
          <Typography 
            variant="h3" 
            fontWeight={700} 
            textAlign="center" 
            gutterBottom
            sx={{
              color: "#3F51B5",
              fontFamily: "'Fredoka', cursive",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <Explore 
              sx={{ 
                color: "#3F51B5", 
                fontSize: { xs: 30, md: 40 },
                animation: "spin 4s linear infinite"
              }}
            />
            Find Our School
            <Explore 
              sx={{ 
                color: "#3F51B5", 
                fontSize: { xs: 30, md: 40 },
                animation: "spin 4s linear infinite",
                animationDelay: "2s"
              }}
            />
          </Typography>
        </MotionBox>
        
        <MotionCard 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.3,
            type: "spring", 
            stiffness: 50 
          }}
          sx={{ 
            borderRadius: { xs: 4, md: 6 }, 
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            overflow: "hidden", 
            maxWidth: "100%", 
            mx: "auto",
            border: "5px solid #FFC107",
            position: "relative"
          }}
        >
          {/* Map decorative elements */}
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            sx={{
              position: "absolute",
              top: -15,
              left: -15,
              zIndex: 10,
              transform: "rotate(-15deg)"
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#F44336",
                color: "white",
                border: "2px dashed white",
                transform: "rotate(15deg)",
                boxShadow: '0 5px 15px rgba(244,67,54,0.4)'
              }}
            >
              <LocationOn sx={{ fontSize: 40 }} />
            </Paper>
          </Box>
          
          <Box
            component={motion.div}
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              zIndex: 10
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#4CAF50",
                color: "white",
                border: "2px solid white",
                boxShadow: '0 5px 15px rgba(76,175,80,0.4)'
              }}
            >
              <School sx={{ fontSize: 30 }} />
            </Paper>
          </Box>
          
          {/* Map */}
          <Box sx={{ 
            position: "relative", 
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "12px",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
              pointerEvents: "none"
            }
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.330410000192!2d78.827164975922!3d10.266086889534532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa3d07b91f61e9%3A0x29b3e09d7c2c4f2a!2sRajagopalapuram%2C%20Pudukkottai%2C%20Tamil%20Nadu%20622003!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>

          <CardContent 
            sx={{ 
              p: 4,
              background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%)",
              borderTop: "3px dashed #FFC107"
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Stack 
                direction="column" 
                spacing={3} 
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  position: "relative"
                }}
              >
                <Typography 
                  variant="h5" 
                  fontWeight={600}
                  sx={{
                    color: "#3F51B5",
                    fontFamily: "'Fredoka', cursive",
                    textAlign: "center",
                    fontSize: { xs: "1.4rem", md: "1.5rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1
                  }}
                >
                  <EmojiTransportation 
                    sx={{ 
                      color: "#673AB7", 
                      animation: "drive 3s linear infinite"
                    }} 
                  />
                  London Look School, Tamil Nadu
                </Typography>
                
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 3, sm: 4 },
                    flexWrap: "wrap",
                    justifyContent: "center"
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      background: "rgba(33, 150, 243, 0.1)",
                      border: "2px dashed #2196F3",
                      flex: "1 1 300px",
                      maxWidth: { sm: "45%" },
                      display: "flex",
                      alignItems: "center",
                      gap: 2
                    }}
                  >
                    <Box
                      component={motion.div}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotateY: [0, 360, 0]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#2196F3",
                        color: "white",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        flexShrink: 0
                      }}
                    >
                      <LocationOn />
                    </Box>
                    <Typography 
                      variant="body1"
                      sx={{ 
                        color: "#546E7A",
                        fontFamily: "'Comic Neue', cursive",
                        mb: 2 
                      }}
                    >
                      No.14, 3rd Street, Rajagopalapuram, Pudukkottai-622003
                    </Typography>
                  </Paper>
                  
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      background: "rgba(76, 175, 80, 0.1)",
                      border: "2px dashed #4CAF50",
                      flex: "1 1 100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "center"
                    }}
                  >
                    <Box
                      component={motion.div}
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#4CAF50",
                        color: "white",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        flexShrink: 0
                      }}
                    >
                      <LinkIcon />
                    </Box>
                    <Typography sx={{ mb: 1, color: "#039BE5" }}>
                      <LinkIcon sx={{ mr: 1, verticalAlign: "text-bottom" }} />
                      Map Link
                    </Typography>
                    <Typography 
                      component="a" 
                      href="https://g.co/kgs/kVfdYQj"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: "#4CAF50",
                        fontFamily: "'Comic Neue', cursive",
                        textDecoration: "none", 
                        fontWeight: 600,
                        display: "block",
                        mb: 2,
                        "&:hover": {
                          textDecoration: "underline"
                        }
                      }}
                    >
                      View on Google Maps
                    </Typography>
                  </Paper>
                </Box>
                
                {/* Little bus */}
                <Box
                  component={motion.div}
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                  sx={{
                    position: "absolute",
                    bottom: "-30px",
                    display: { xs: "none", md: "block" }
                  }}
                >
                  <DirectionsBus sx={{ color: "#FFC107", fontSize: 40 }} />
                </Box>
              </Stack>
            </Box>
          </CardContent>
        </MotionCard>
      </MotionContainer>
      
      {/* Add keyframes for animations */}
      <Box
        sx={{
          '@keyframes spin': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
          '@keyframes drive': {
            '0%': {
              transform: 'translateX(-20px) rotate(0deg)',
            },
            '50%': {
              transform: 'translateX(20px) rotate(10deg)',
            },
            '100%': {
              transform: 'translateX(-20px) rotate(0deg)',
            },
          }
        }}
      />
    </Box>
  );
}
