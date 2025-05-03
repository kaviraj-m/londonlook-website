import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { 
  AutoAwesome, 
  School, 
  PeopleAlt, 
  AccessibilityNew, 
  MenuBook, 
  EmojiObjects,
  Psychology,
  Diversity3
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

// Data for mission statement and values
const missionStatement = "To provide quality education that nurtures curiosity, creativity, and character, empowering students to become lifelong learners and responsible citizens.";

const coreValues = [
  {
    name: "Academic Excellence",
    description: "We foster a passion for learning and intellectual growth by maintaining high standards and innovative teaching practices.",
    icon: <MenuBook fontSize="large" />,
    color: "#E91E63",
    bgColor: "rgba(233, 30, 99, 0.1)",
  },
  {
    name: "Inclusivity & Respect",
    description: "We celebrate diversity and create an environment where all students feel valued, respected, and supported.",
    icon: <Diversity3 fontSize="large" />,
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)",
  },
  {
    name: "Character Development",
    description: "We cultivate honesty, integrity, responsibility, and empathy through our curriculum and school culture.",
    icon: <Psychology fontSize="large" />,
    color: "#3F51B5",
    bgColor: "rgba(63, 81, 181, 0.1)",
  },
  {
    name: "Creativity & Innovation",
    description: "We encourage creative thinking and problem-solving skills that prepare students for a changing world.",
    icon: <EmojiObjects fontSize="large" />,
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)",
  },
  {
    name: "Community Engagement",
    description: "We partner with families and the community to enrich the educational experience and broaden student perspectives.",
    icon: <PeopleAlt fontSize="large" />,
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.1)",
  },
  {
    name: "Holistic Development",
    description: "We nurture the intellectual, physical, social, and emotional growth of each student.",
    icon: <AccessibilityNew fontSize="large" />,
    color: "#FF9800",
    bgColor: "rgba(255, 152, 0, 0.1)",
  }
];

// Create motion components
const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

export default function OurMissionValues() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #E8F5E9 0%, #E1F5FE 100%)",
        py: 8,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative elements */}
      <Box
        component={motion.div}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: "rgba(156, 39, 176, 0.1)",
          top: "8%",
          left: "5%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{ 
          y: [0, 20, 0],
          x: [0, 15, 0, -15, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "rgba(255, 193, 7, 0.1)",
          bottom: "10%",
          right: "5%",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          textAlign="center" 
          mb={6}
        >
          <Typography 
            variant="h3" 
            fontWeight={700} 
            gutterBottom
            sx={{
              color: "#4CAF50",
              fontFamily: "'Fredoka', cursive",
              fontSize: { xs: '2rem', md: '2.5rem' },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <AutoAwesome sx={{ 
              color: "#FFA000", 
              fontSize: { xs: 30, md: 40 },
              animation: "spin 3s infinite linear" 
            }}/>
            Our Mission & Values
            <AutoAwesome sx={{ 
              color: "#FFA000", 
              fontSize: { xs: 30, md: 40 },
              animation: "spin 3s infinite linear",
              animationDirection: "reverse"
            }}/>
          </Typography>
        </Box>
        
        {/* Mission Statement Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{ 
            maxWidth: "900px", 
            mx: "auto", 
            mb: 8,
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "30px",
            p: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            border: "3px solid #4CAF50",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "8px",
              background: "linear-gradient(90deg, #4CAF50, #8BC34A, #CDDC39, #FFEB3B, #FFC107, #FF9800)",
            }}
          />
          
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 3, 
              color: "#2E7D32", 
              fontFamily: "'Fredoka', cursive",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              fontSize: { xs: '1.7rem', md: '2rem' }
            }}
          >
            <School sx={{ color: "#2E7D32" }} />
            Our Mission
          </Typography>
          
          <Box 
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ 
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.7)",
              p: 3,
              borderRadius: "20px",
              border: "2px dashed #4CAF50"
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontStyle: "italic", 
                color: "#33691E",
                fontFamily: "'Comic Neue', cursive",
                lineHeight: 1.8,
                fontSize: { xs: '1.1rem', md: '1.2rem' },
              }}
            >
              "{missionStatement}"
            </Typography>
          </Box>
        </MotionBox>
        
        {/* Core Values Section */}
        <Box mb={4}>
          <Typography 
            variant="h4" 
            align="center" 
            sx={{ 
              mb: 5, 
              color: "#7B1FA2", 
              fontFamily: "'Fredoka', cursive",
              fontWeight: "bold",
              fontSize: { xs: '1.7rem', md: '2rem' }
            }}
          >
            Our Core Values
          </Typography>
          
          <Grid container spacing={3}>
            {coreValues.map((value, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  type: "spring", 
                  stiffness: 50 
                }}
              >
                <MotionPaper
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 }
                  }}
                  sx={{ 
                    p: 3, 
                    height: "100%",
                    borderRadius: "20px",
                    border: `2px solid ${value.color}`,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    background: "linear-gradient(135deg, white 0%, #FAFAFA 100%)"
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ 
                      rotate: [0, 10, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        bgcolor: value.bgColor,
                        color: value.color,
                        mr: 2
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: "bold", 
                        color: value.color,
                        fontFamily: "'Fredoka', cursive",
                        fontSize: "1.2rem"
                      }}
                    >
                      {value.name}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: "#616161",
                      fontFamily: "'Comic Neue', cursive",
                      lineHeight: 1.7,
                      flexGrow: 1
                    }}
                  >
                    {value.description}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      
      {/* Add keyframes for animations */}
      <Box
        sx={{
          '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' }
          }
        }}
      />
    </Box>
  );
}
