import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { 
  SelfImprovement, 
  SportsSoccer, 
  AutoStories, 
  Cake, 
  Celebration,
  Deck,
  Flag,
  EventNote,
  Diversity3,
  Flare
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

const events = [
  {
    title: "International Yoga Day",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047427/International_yoga_day_celebration_acr7ci.jpg",
    description: "Students practicing yoga, promoting physical and mental well-being through ancient traditions.",
    icon: <SelfImprovement fontSize="large" />,
    color: "#E91E63",
    bgColor: "rgba(233, 30, 99, 0.1)"
  },
  {
    title: "Sports & Games Day",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047427/Sports_day_and_playing_games_in_celeberation_wrna8b.jpg",
    description: "Active participation in various sports activities fostering team spirit and physical fitness.",
    icon: <SportsSoccer fontSize="large" />,
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.1)"
  },
  {
    title: "International Book Reading Day",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047427/International_books_reading_day_wbkdb7.jpg",
    description: "Cultivating a love for reading and literature among our young learners.",
    icon: <AutoStories fontSize="large" />,
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)"
  },
  {
    title: "Kamarajar Birthday Celebration",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047428/Kamarajar_b_day_celebration_Fancy_dress_z7nu9q.jpg",
    description: "Students dressed as historical figures, honoring the great education reformer.",
    icon: <Cake fontSize="large" />,
    color: "#FF5722",
    bgColor: "rgba(255, 87, 34, 0.1)"
  },
  {
    title: "Christmas Celebrations",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047428/Christmas_celebration_ldjbkt.jpg",
    description: "Festive celebrations with students spreading joy and Christmas spirit.",
    icon: <Celebration fontSize="large" />,
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)"
  },
  {
    title: "Pongal with Parents",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047428/Pongal_celebration_in_Parents_participation_h20ykz.jpg",
    description: "Traditional Pongal celebrations with active participation from parents and families.",
    icon: <Deck fontSize="large" />,
    color: "#FFC107",
    bgColor: "rgba(255, 193, 7, 0.1)"
  },
  {
    title: "Republic Day Leaders",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047429/Fancy_dress_National_leadersRepublic_day_celebratio_jcc9ju.jpg",
    description: "Students dressed as national leaders commemorating Republic Day with patriotic fervor.",
    icon: <Flag fontSize="large" />,
    color: "#3F51B5",
    bgColor: "rgba(63, 81, 181, 0.1)"
  }
];

export default function EventsCelebrations() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #FFF9C4 0%, #FFECB3 100%)",
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
          duration: 25, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, rgba(255,255,255,0) 70%)",
          top: "10%",
          right: "-8%",
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
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233,30,99,0.1) 0%, rgba(255,255,255,0) 70%)",
          bottom: "15%",
          left: "-5%",
          zIndex: 0
        }}
      />

      {/* Animated confetti */}
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          initial={{ 
            top: -20,
            left: `${Math.random() * 100}%`,
            rotate: Math.random() * 360
          }}
          animate={{ 
            top: `${100 + Math.random() * 20}%`,
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
            ease: "linear"
          }}
          sx={{
            position: "absolute",
            width: 10 + Math.random() * 15,
            height: 10 + Math.random() * 15,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
            background: [
              "#E91E63", "#9C27B0", "#4CAF50", "#FF5722", 
              "#2196F3", "#FFC107", "#3F51B5"
            ][Math.floor(Math.random() * 7)],
            opacity: 0.3 + Math.random() * 0.4,
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
              color: "#FF6D00",
              fontFamily: "'Fredoka', cursive",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <Flare 
              sx={{ 
                color: "#FF6D00", 
                fontSize: { xs: 30, md: 40 },
                animation: "twinkle 3s ease-in-out infinite"
              }}
            />
            Events & Celebrations
            <Flare 
              sx={{ 
                color: "#FF6D00", 
                fontSize: { xs: 30, md: 40 },
                animation: "twinkle 3s ease-in-out infinite",
                animationDelay: "1.5s"
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
              border: "2px dashed #FF6D00"
            }}
          >
            We celebrate milestones, achievements, and festivals with enthusiasm, creating lasting memories for students.
          </Typography>
        </MotionBox>
        
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
        >
          {events.map((event, index) => (
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
                  border: `3px solid ${event.color}`,
                  overflow: "hidden",
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Festive border at top */}
                <Box
                  sx={{
                    height: "8px",
                    background: event.color,
                    backgroundImage: `linear-gradient(45deg, ${event.color} 25%, transparent 25%, transparent 50%, ${event.color} 50%, ${event.color} 75%, transparent 75%, transparent)`,
                    backgroundSize: "14px 14px",
                  }}
                />
                
                {/* Image with animated overlay */}
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia 
                    component="img" 
                    height="200" 
                    image={event.image} 
                    alt={event.title}
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      }
                    }}
                  />
                  
                  {/* Event badge */}
                  <Box
                    component={motion.div}
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, 0, -5, 0],
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
                      right: "15px",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      border: `2px dashed ${event.color}`,
                      color: event.color,
                      zIndex: 2
                    }}
                  >
                    {event.icon}
                  </Box>
                  
                  {/* Celebration ribbon */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "30px",
                      background: `linear-gradient(to top, ${event.color}80, transparent)`,
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
                      background: event.bgColor,
                      display: "inline-block",
                      alignSelf: "flex-start"
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      fontWeight={700}
                      sx={{
                        color: event.color,
                        fontFamily: "'Fredoka', cursive",
                      }}
                    >
                      {event.title}
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
                    {event.description}
                  </Typography>
                  
                  {/* Decorative element */}
                  <Box
                    component={motion.div}
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      opacity: 0.1,
                      color: event.color
                    }}
                  >
                    <Diversity3 sx={{ fontSize: "2rem" }} />
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
          '@keyframes twinkle': {
            '0%, 100%': {
              opacity: 1,
              transform: 'scale(1) rotate(0deg)',
            },
            '50%': {
              opacity: 0.7,
              transform: 'scale(1.2) rotate(15deg)',
            },
          }
        }}
      />
    </Box>
  );
}
