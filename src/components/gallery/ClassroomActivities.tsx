import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { 
  TheaterComedy, 
  SelfImprovement, 
  Palette, 
  SmartDisplay, 
  Groups,
  EmojiPeople,
  School
} from "@mui/icons-material";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

// Create motion components
const MotionContainer = motion(Container);
const MotionGrid = motion(Grid);
const MotionCard = motion(Card);
const MotionBox = motion(Box);

const activities = [
  {
    title: "Role Playing",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740044572/Role_playing_sashlh.jpg",
    description: "Developing confidence and communication skills through creative dramatic play and storytelling activities.",
    icon: <TheaterComedy fontSize="large" />,
    color: "#FF9800",
    bgColor: "rgba(255, 152, 0, 0.1)"
  },
  {
    title: "Yoga & Meditation",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740062079/Extra_curricular_Activity_Yoga_wznpoq.jpg",
    description: "Promoting physical and mental well-being through yoga and mindfulness practices.",
    icon: <SelfImprovement fontSize="large" />,
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)"
  },
  {
    title: "Creative Art Activities",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047428/Colouring_activity_for_Kg_students_i3unwi.jpg",
    description: "Nurturing artistic expression through coloring and creative activities.",
    icon: <Palette fontSize="large" />,
    color: "#E91E63",
    bgColor: "rgba(233, 30, 99, 0.1)"
  },
  {
    title: "Interactive Learning",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740298316/tv_interactive_teaach_watching_tv_pdo1c5.jpg",
    description: "Smart classrooms with digital learning tools for interactive lessons.",
    icon: <SmartDisplay fontSize="large" />,
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)"
  },
  
];

export default function ClassroomActivities() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #E8F5E9 0%, #E3F2FD 100%)",
        py: { xs: 6, md: 8 },
        borderRadius: { xs: '0', md: '25px' },
        margin: { xs: 0, md: 4 },
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative elements */}
      {/* Crayon strokes */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          initial={{ 
            opacity: 0.5,
            rotate: 30 + (i * 15)
          }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 0.5
          }}
          sx={{
            position: "absolute",
            width: 150 + (i * 20),
            height: 15,
            borderRadius: "10px",
            background: [
              "#FF9800", "#9C27B0", "#E91E63", "#2196F3", "#4CAF50"
            ][i],
            top: `${10 + (i * 15)}%`,
            right: `-5%`,
            transform: `rotate(${30 + (i * 15)}deg)`,
            opacity: 0.1,
            zIndex: 0
          }}
        />
      ))}
      
      {/* Floating paper planes */}
      {[...Array(3)].map((_, i) => (
        <Box
          key={`plane-${i}`}
          component={motion.div}
          initial={{ 
            left: "-5%", 
            top: `${20 + (i * 25)}%`
          }}
          animate={{ 
            left: ["5%", "80%", "100%"],
            top: [`${20 + (i * 25)}%`, `${35 + (i * 15)}%`, `${15 + (i * 20)}%`]
          }}
          transition={{ 
            duration: 20 + (i * 5), 
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 2,
            ease: "easeInOut"
          }}
          sx={{
            position: "absolute",
            width: 30 + (i * 5),
            height: 30 + (i * 5),
            color: `rgba(33, 150, 243, ${0.3 - (i * 0.05)})`,
            zIndex: 0,
            transform: "rotate(15deg)"
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,4H3A1,1 0 0,0 2,5V19A1,1 0 0,0 3,20H21A1,1 0 0,0 22,19V5A1,1 0 0,0 21,4M10,18H4V6H10V18M20,18H12V6H20V18Z" />
          </svg>
        </Box>
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
              color: "#00BFA5",
              fontFamily: "'Fredoka', cursive",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <EmojiPeople 
              sx={{ 
                color: "#00BFA5", 
                fontSize: { xs: 30, md: 40 },
                animation: "dance 2s ease-in-out infinite"
              }}
            />
            Classroom Activities
            <EmojiPeople 
              sx={{ 
                color: "#00BFA5", 
                fontSize: { xs: 30, md: 40 },
                animation: "dance 2s ease-in-out infinite",
                animationDelay: "0.5s"
              }}
            />
          </Typography>
          
          <Typography 
            variant="body1" 
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{
              color: "#5D4037",
              textAlign: "center",
              mb: 6,
              mt: 2, 
              maxWidth: 800,
              mx: "auto",
              fontFamily: "'Comic Neue', cursive",
              fontSize: "1.1rem",
              background: "rgba(255, 255, 255, 0.7)",
              padding: 2,
              borderRadius: "20px",
              border: "2px dashed #00BFA5"
            }}
          >
            Our classrooms are filled with engaging activities that promote creativity, teamwork, and interactive learning.
          </Typography>
        </MotionBox>
        
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
        >
          {activities.map((activity, index) => (
            <MotionGrid
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5, 
                delay: 0.15 * index,
                type: "spring", 
                stiffness: 50
              }}
            >
              <MotionCard 
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 }
                }}
                sx={{ 
                  borderRadius: 6, 
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  background: 'white',
                  border: `3px solid ${activity.color}`,
                  overflow: "hidden",
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Playful border at top */}
                <Box
                  sx={{
                    height: "8px",
                    background: activity.color,
                    backgroundImage: `linear-gradient(45deg, ${activity.color} 25%, transparent 25%, transparent 50%, ${activity.color} 50%, ${activity.color} 75%, transparent 75%, transparent)`,
                    backgroundSize: "14px 14px",
                  }}
                />
                
                {/* Image with animated overlay */}
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia 
                    component="img" 
                    height="200" 
                    image={activity.image} 
                    alt={activity.title}
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      }
                    }}
                  />
                  
                  {/* Activity icon */}
                  <Box
                    component={motion.div}
                    animate={{ 
                      rotate: [0, -10, 0, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.2
                    }}
                    sx={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      border: `2px solid ${activity.color}`,
                      color: activity.color,
                      zIndex: 2
                    }}
                  >
                    {activity.icon}
                  </Box>
                  
                  {/* Fun overlay pattern */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "80px",
                      height: "80px",
                      background: `${activity.color}30`,
                      clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                      zIndex: 1
                    }}
                  />
                </Box>
                
                <CardContent
                  sx={{ 
                    flexGrow: 1,
                    display: "flex", 
                    flexDirection: "column", 
                    p: 3,
                    position: "relative"
                  }}
                >
                  {/* Title */}
                  <Paper
                    elevation={0}
                    sx={{
                      mb: 2,
                      p: 1.5,
                      borderRadius: "15px",
                      background: activity.bgColor,
                      display: "inline-block",
                      alignSelf: "flex-start"
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      fontWeight={700}
                      sx={{
                        color: activity.color,
                        fontFamily: "'Fredoka', cursive",
                      }}
                    >
                      {activity.title}
                    </Typography>
                  </Paper>
                  
                  {/* Description */}
                  <Typography 
                    variant="body1"
                    sx={{
                      color: "#5D4037",
                      fontFamily: "'Comic Neue', cursive",
                      lineHeight: 1.6
                    }}
                  >
                    {activity.description}
                  </Typography>
                  
                  {/* Decorative element */}
                  <Box
                    component={motion.div}
                    animate={{ rotate: [0, 360] }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      opacity: 0.1,
                      color: activity.color
                    }}
                  >
                    <School sx={{ fontSize: "2rem" }} />
                  </Box>
                </CardContent>
              </MotionCard>
            </MotionGrid>
          ))}
        </Grid>
      </MotionContainer>
      
      {/* Add keyframes for animations */}
      <Box
        sx={{
          '@keyframes dance': {
            '0%, 100%': {
              transform: 'rotate(-5deg)',
            },
            '50%': {
              transform: 'rotate(5deg)',
            },
          }
        }}
      />
    </Box>
  );
}
