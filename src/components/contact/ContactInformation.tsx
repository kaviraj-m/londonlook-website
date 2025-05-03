import { Container, Typography, Card, CardContent, Stack, IconButton, Box, Paper } from "@mui/material";
import { 
  Phone, 
  WhatsApp, 
  EmojiEmotions, 
  Message,
  Chat
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

// Create motion components
const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionPaper = motion(Paper);
const MotionIconButton = motion(IconButton);

export default function ContactInformation() {
  return (
    <Box 
      sx={{
        background: "linear-gradient(135deg, #E8F5E9 0%, #FFF8E1 100%)",
        py: { xs: 6, md: 8 },
        borderRadius: { xs: '0', md: '25px' },
        margin: { xs: 0, md: 4 },
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative elements */}
      <MotionBox
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
          background: "radial-gradient(circle, rgba(76,175,80,0.1) 0%, rgba(255,255,255,0) 70%)",
          top: "10%",
          right: "-5%",
          zIndex: 0
        }}
      />
      
      <MotionBox
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "230px",
          height: "230px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156,39,176,0.1) 0%, rgba(255,255,255,0) 70%)",
          bottom: "15%",
          left: "-8%",
          zIndex: 0
        }}
      />

      {/* Flying message animations */}
      {[...Array(5)].map((_, i) => (
        <MotionBox
          key={i}
          initial={{ 
            x: -100, 
            y: 100 + (i * 50),
            opacity: 0
          }}
          animate={{ 
            x: ["0%", "110%"],
            y: [100 + (i * 50), 50 + (i * 40)],
            opacity: [0.7, 0],
            rotate: [0, 15, 0, -15, 0]
          }}
          transition={{ 
            duration: 8 + (i * 2), 
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 1.5
          }}
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40 + (i * 5),
            height: 40 + (i * 5),
            borderRadius: "50%",
            background: ["#E91E63", "#9C27B0", "#2196F3", "#4CAF50", "#FF9800"][i % 5],
            opacity: 0.5,
            zIndex: 0,
            color: "white"
          }}
        >
          {i % 2 === 0 ? <Message fontSize="small" /> : <Chat fontSize="small" />}
        </MotionBox>
      ))}

      <Container 
        maxWidth="sm"
        sx={{
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
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
              position: 'relative',
              color: "#9C27B0",
              fontFamily: "'Fredoka', cursive",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <EmojiEmotions 
              sx={{ 
                color: "#9C27B0", 
                fontSize: { xs: 30, md: 40 },
                animation: "bounce 2s infinite"
              }}
            />
            Get in Touch
            <EmojiEmotions 
              sx={{ 
                color: "#9C27B0", 
                fontSize: { xs: 30, md: 40 },
                animation: "bounce 2s infinite",
                animationDelay: "0.5s"
              }}
            />
          </Typography>
          
          <MotionBox
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            sx={{
              height: "8px",
              backgroundColor: "#9C27B0",
              margin: "0 auto",
              borderRadius: "4px",
              background: "linear-gradient(to right, #9C27B0, #E91E63)"
            }}
          />
          
          <Typography 
            variant="body1" 
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{
              color: "#5D4037",
              textAlign: "center",
              mt: 3,
              mb: 4,
              maxWidth: 500,
              mx: "auto",
              fontFamily: "'Comic Neue', cursive",
              fontSize: "1.1rem",
            }}
          >
            We'd love to hear from you! Reach out to us using any of these fun ways to connect.
          </Typography>
        </MotionBox>

        <MotionCard 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.5,
            type: "spring", 
            stiffness: 50 
          }}
          sx={{ 
            borderRadius: 6,
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            overflow: "hidden",
            p: 4,
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease-in-out',
            border: "3px solid #E1BEE7",
            position: "relative"
          }}
        >
          {/* Rainbow border at top */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "8px",
              background: "linear-gradient(to right, #FF9800, #9C27B0, #2196F3, #4CAF50, #F44336)",
            }}
          />
          
          <CardContent sx={{ textAlign: "center", p: 2 }}>
            <Stack spacing={4} alignItems="center">
              
              {/* Phone Number */}
              <MotionPaper
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                elevation={3}
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <Stack 
                  direction="row" 
                  spacing={3} 
                  alignItems="center" 
                  sx={{
                    width: "100%",
                    p: 2,
                    backgroundColor: '#e3f2fd',
                    transition: 'all 0.3s ease',
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "radial-gradient(circle at 30% 50%, rgba(25, 118, 210, 0.1) 0%, transparent 70%)",
                      zIndex: 0
                    }
                  }}
                >
                  <a href="tel:9442314351" style={{ textDecoration: "none" }}>
                    <IconButton 
                      color="primary" 
                      sx={{ 
                        backgroundColor: "white",
                        p: 2,
                        boxShadow: "0 4px 8px rgba(33,150,243,0.3)",
                        border: "2px solid #2196F3",
                        zIndex: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(20deg) scale(1.2)'
                        }
                      }}
                    >
                      <Phone fontSize="large" />
                    </IconButton>
                  </a>
                  <Typography 
                    variant="h6" 
                    fontWeight={600}
                    sx={{
                      fontFamily: "'Fredoka', cursive",
                      zIndex: 1,
                      color: "#1565C0"
                    }}
                  >
                    <a href="tel:9442314351" style={{ textDecoration: "none", color: "inherit" }}>
                      +91 94423 14351
                    </a>
                  </Typography>
                  
                  {/* Decorative dots */}
                  {[...Array(10)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: "absolute",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "rgba(33, 150, 243, 0.2)",
                        top: `${Math.random() * 100}%`,
                        right: `${Math.random() * 30 + 10}%`,
                        zIndex: 0
                      }}
                    />
                  ))}
                </Stack>
              </MotionPaper>

              {/* WhatsApp */}
              <MotionPaper
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                elevation={3}
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <Stack 
                  direction="row" 
                  spacing={3} 
                  alignItems="center" 
                  sx={{
                    width: "100%",
                    p: 2,
                    backgroundColor: '#e8f5e9',
                    transition: 'all 0.3s ease',
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "radial-gradient(circle at 30% 50%, rgba(76, 175, 80, 0.1) 0%, transparent 70%)",
                      zIndex: 0
                    }
                  }}
                >
                  <a 
                    href="https://wa.me/9442314351" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <IconButton 
                      color="success" 
                      sx={{ 
                        backgroundColor: "white",
                        p: 2,
                        boxShadow: "0 4px 8px rgba(76,175,80,0.3)",
                        border: "2px solid #4CAF50",
                        zIndex: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(-20deg) scale(1.2)'
                        }
                      }}
                    >
                      <WhatsApp fontSize="large" />
                    </IconButton>
                  </a>
                  <Typography 
                    variant="h6" 
                    fontWeight={600}
                    sx={{
                      fontFamily: "'Fredoka', cursive",
                      zIndex: 1,
                      color: "#43A047"
                    }}
                  >
                    <a 
                      href="https://wa.me/9442314351" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Chat on WhatsApp
                    </a>
                  </Typography>
                  
                  {/* Decorative leaf shapes */}
                  {[...Array(5)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: "absolute",
                        width: 14,
                        height: 14,
                        borderRadius: "50% 0",
                        transform: `rotate(${45 * i}deg)`,
                        backgroundColor: "rgba(76, 175, 80, 0.2)",
                        top: `${10 + (i * 20)}%`,
                        right: `${5 + (i * 5)}%`,
                        zIndex: 0
                      }}
                    />
                  ))}
                </Stack>
              </MotionPaper>
            </Stack>
          </CardContent>
        </MotionCard>
      </Container>
      
      {/* Add keyframes for animations */}
      <Box
        sx={{
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-10px)',
            },
          }
        }}
      />
    </Box>
  );
}
