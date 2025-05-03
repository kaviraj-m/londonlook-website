import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { 
  School, 
  Computer, 
  SportsSoccer, 
  AcUnit, 
  Domain,
  Stars,
  EmojiEvents
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

// Assign unique colors to each infrastructure item
const infrastructureItems = [
  {
    title: "Modern Classrooms",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740061777/class_room_2_cvilkz.jpg",
    description: "Well-ventilated, tech-enabled classrooms designed to encourage interactive learning.",
    icon: <School fontSize="large" />,
    color: "#FF5722",
    bgColor: "rgba(255, 87, 34, 0.1)"
  },
  {
    title: "School Building",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740061777/out_side_of_building_look_of_ykng91.jpg",
    description: "State-of-the-art infrastructure with modern amenities for quality education.",
    icon: <Domain fontSize="large" />,
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)"
  },
  {
    title: "Play Ground",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740061777/play_ground_outdoor_xzo8hg.jpg",
    description: "Safe and engaging outdoor play areas to promote physical activity and social development.",
    icon: <SportsSoccer fontSize="large" />,
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.1)"
  },
  {
    title: "Computer Lab",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740061778/computer_lab_fwj3ki.jpg",
    description: "Modern computer lab equipped with the latest technology for practical learning.",
    icon: <Computer fontSize="large" />,
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)"
  },
  {
    title: "Air-Conditioned Classrooms",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740298429/ac_in_classrooms_gpvyhz.jpg",
    description: "Climate-controlled learning spaces ensuring comfortable environment throughout the year.",
    icon: <AcUnit fontSize="large" />,
    color: "#FF9800",
    bgColor: "rgba(255, 152, 0, 0.1)"
  }
];

export default function SchoolInfrastructure() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #E3F2FD 0%, #F1F8E9 100%)",
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
          top: "5%",
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
          background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, rgba(255,255,255,0) 70%)",
          bottom: "10%",
          left: "-8%",
          zIndex: 0
        }}
      />

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
              color: "#673AB7",
              fontFamily: "'Fredoka', cursive",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <Stars 
              sx={{ 
                color: "#673AB7", 
                fontSize: { xs: 30, md: 40 },
                animation: "spin 4s linear infinite"
              }}
            />
            School Infrastructure
            <Stars 
              sx={{ 
                color: "#673AB7", 
                fontSize: { xs: 30, md: 40 },
                animation: "spin 4s linear infinite",
                animationDelay: "1s"
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
              border: "2px dashed #673AB7"
            }}
          >
            Our school provides a world-class learning environment with top-notch infrastructure to support students' holistic development.
          </Typography>
        </MotionBox>
        
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
        >
          {infrastructureItems.map((item, index) => (
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
                  border: `3px solid ${item.color}`,
                  overflow: "hidden",
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Rainbow border at top */}
                <Box
                  sx={{
                    height: "8px",
                    background: item.color,
                    backgroundImage: `linear-gradient(45deg, ${item.color} 25%, transparent 25%, transparent 50%, ${item.color} 50%, ${item.color} 75%, transparent 75%, transparent)`,
                    backgroundSize: "14px 14px",
                  }}
                />
                
                {/* Image with animated overlay */}
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia 
                    component="img" 
                    height="200" 
                    image={item.image} 
                    alt={item.title}
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      }
                    }}
                  />
                  
                  {/* Floating icon over image */}
                  <Box
                    component={motion.div}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.2
                    }}
                    sx={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      border: `2px solid ${item.color}`,
                      color: item.color,
                      zIndex: 2
                    }}
                  >
                    {item.icon}
                  </Box>
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
                  {/* Title with colored background */}
                  <Paper
                    elevation={0}
                    sx={{
                      mb: 2,
                      p: 1.5,
                      borderRadius: "15px",
                      background: item.bgColor,
                      display: "inline-block",
                      alignSelf: "flex-start"
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      fontWeight={700}
                      sx={{
                        color: item.color,
                        fontFamily: "'Fredoka', cursive",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Paper>
                  
                  {/* Description */}
                  <Typography 
                    variant="body1"
                    sx={{
                      color: "#5D4037",
                      fontFamily: "'Fredoka', cursive",
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
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
                      color: item.color
                    }}
                  >
                    <EmojiEvents sx={{ fontSize: "2rem" }} />
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
