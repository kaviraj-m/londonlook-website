import { Container, Typography, Card, CardContent, Stack, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

// Create motion components
const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

export default function OfficeHours() {
  return (
    <Box 
      sx={{
        background: "linear-gradient(135deg, #FFF8E1 0%, #E8F5E9 100%)",
        py: 8,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: '0', md: '25px' },
        margin: { xs: 0, md: 4 },
      }}
    >
      {/* Decorative background elements */}
      <Box
        component={motion.div}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, rgba(255,255,255,0) 70%)",
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
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156,39,176,0.1) 0%, rgba(255,255,255,0) 70%)",
          bottom: "10%",
          left: "-8%",
          zIndex: 0
        }}
      />

      {/* Floating clock decorations */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{ 
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
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0
          }}
        />
      ))}

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Typography 
            variant="h3" 
            fontWeight={700} 
            textAlign="center" 
            gutterBottom
            sx={{ 
              mb: 2,
              color: "#9C27B0",
              fontFamily: "'Fredoka', cursive",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <AccessTimeIcon 
              sx={{ 
                fontSize: { xs: 30, md: 40 },
                color: "#9C27B0",
                animation: "spin 4s linear infinite"
              }}
            />
            School Timings
            <AccessTimeIcon 
              sx={{ 
                fontSize: { xs: 30, md: 40 },
                color: "#9C27B0",
                animation: "spin 4s linear infinite",
                animationDelay: "2s"
              }}
            />
          </Typography>
          
          <Box
            component={motion.div}
            animate={{ width: ['0%', '50%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            sx={{
              height: "4px",
              background: "linear-gradient(90deg, transparent, #9C27B0, transparent)",
              mx: "auto",
              mb: 4,
              borderRadius: "10px",
            }}
          />
        </motion.div>

        <MotionCard 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          sx={{ 
            borderRadius: 6, 
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)", 
            p: 4,
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(5px)',
            border: "5px solid #FFEB3B",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              background: "linear-gradient(90deg, #FF9800, #F44336, #9C27B0, #3F51B5, #4CAF50, #FFC107)",
              zIndex: 10
            }
          }}
        >
          <CardContent>
            <Stack spacing={4} alignItems="center">
              {/* Office Timings */}
              <MotionStack 
                direction="row" 
                spacing={3} 
                alignItems="center"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 } 
                }}
                sx={{
                  width: "100%",
                  p: 3,
                  borderRadius: 4,
                  backgroundColor: "rgba(156, 39, 176, 0.1)",
                  transition: "all 0.3s ease",
                  border: "2px dashed #9C27B0",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      backgroundColor: "#9C27B0",
                      borderRadius: "50%",
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 8px rgba(156, 39, 176, 0.5)"
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: 30, color: "white" }} />
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="h6" 
                    fontWeight={700} 
                    gutterBottom
                    sx={{
                      color: "#9C27B0",
                      fontFamily: "'Fredoka', cursive",
                      fontSize: "1.2rem"
                    }}
                  >
                    Office Hours
                  </Typography>
                  <Typography 
                    variant="subtitle1"
                    sx={{
                      fontFamily: "'Comic Neue', cursive",
                      fontSize: "1.1rem",
                      color: "#5D4037",
                      fontWeight: 600
                    }}
                  >
                    8:30 AM - 6:00 PM (Monday to Saturday)
                  </Typography>
                </Box>
                
                {/* Decorative dots */}
                {[...Array(5)].map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      position: "absolute",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "rgba(156, 39, 176, 0.3)",
                      top: `${Math.random() * 100}%`,
                      right: `${Math.random() * 30 + 5}%`,
                      zIndex: 0
                    }}
                  />
                ))}
              </MotionStack>

              {/* Primary School (1st to 5th) */}
              <MotionStack 
                direction="row" 
                spacing={3} 
                alignItems="center"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 } 
                }}
                sx={{
                  width: "100%",
                  p: 3,
                  borderRadius: 4,
                  backgroundColor: "rgba(33, 150, 243, 0.1)",
                  transition: "all 0.3s ease",
                  border: "2px dashed #2196F3",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      backgroundColor: "#2196F3",
                      borderRadius: "50%",
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 8px rgba(33, 150, 243, 0.5)"
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 30, color: "white" }} />
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="h6" 
                    fontWeight={700} 
                    gutterBottom
                    sx={{
                      color: "#2196F3",
                      fontFamily: "'Fredoka', cursive",
                      fontSize: "1.2rem"
                    }}
                  >
                    Classes I to V
                  </Typography>
                  <Typography 
                    variant="subtitle1"
                    sx={{
                      fontFamily: "'Comic Neue', cursive",
                      fontSize: "1.1rem",
                      color: "#5D4037",
                      fontWeight: 600
                    }}
                  >
                    9:30 AM - 4:00 PM (Monday to Saturday)
                  </Typography>
                </Box>
                
                {/* Decorative dots */}
                {[...Array(5)].map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      position: "absolute",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "rgba(33, 150, 243, 0.3)",
                      top: `${Math.random() * 100}%`,
                      right: `${Math.random() * 30 + 5}%`,
                      zIndex: 0
                    }}
                  />
                ))}
              </MotionStack>

              {/* Kindergarten */}
              <MotionStack 
                direction="row" 
                spacing={3} 
                alignItems="center"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 } 
                }}
                sx={{
                  width: "100%",
                  p: 3,
                  borderRadius: 4,
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  transition: "all 0.3s ease",
                  border: "2px dashed #4CAF50",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      backgroundColor: "#4CAF50",
                      borderRadius: "50%",
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 8px rgba(76, 175, 80, 0.5)"
                    }}
                  >
                    <ChildCareIcon sx={{ fontSize: 30, color: "white" }} />
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="h6" 
                    fontWeight={700} 
                    gutterBottom
                    sx={{
                      color: "#4CAF50",
                      fontFamily: "'Fredoka', cursive",
                      fontSize: "1.2rem"
                    }}
                  >
                    Pre-KG, LKG & UKG
                  </Typography>
                  <Typography 
                    variant="subtitle1"
                    sx={{
                      fontFamily: "'Comic Neue', cursive",
                      fontSize: "1.1rem",
                      color: "#5D4037",
                      fontWeight: 600
                    }}
                  >
                    9:30 AM - 2:30 PM (Monday to Saturday)
                  </Typography>
                </Box>
                
                {/* Decorative dots */}
                {[...Array(5)].map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      position: "absolute",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "rgba(76, 175, 80, 0.3)",
                      top: `${Math.random() * 100}%`,
                      right: `${Math.random() * 30 + 5}%`,
                      zIndex: 0
                    }}
                  />
                ))}
              </MotionStack>
            </Stack>
          </CardContent>
        </MotionCard>
      </Container>
      
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
          }
        }}
      />
    </Box>
  );
}