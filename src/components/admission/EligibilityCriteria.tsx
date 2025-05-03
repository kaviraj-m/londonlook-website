import { Container, Typography, Grid, Card, CardContent, Box, Avatar } from "@mui/material";
import { AutoAwesome, EmojiEvents, School, Grade, Assignment, MenuBook, EmojiPeople, CastForEducation } from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const eligibilityData = [
  { 
    grade: "LKG", 
    age: "3 years & above", 
    description: "Children must have completed 3 years by June 1st of the academic year.",
    color: "#FF5722",
    bgColor: "rgba(255, 87, 34, 0.1)",
    icon: <EmojiPeople fontSize="large" />,
  },
  { 
    grade: "UKG", 
    age: "4 years & above", 
    description: "Basic understanding of letters, numbers, and social interaction is encouraged.",
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)",
    icon: <Grade fontSize="large" />,
  },
  { 
    grade: "1st Grade", 
    age: "5 years & above", 
    description: "Children should be familiar with early reading, writing, and numeracy skills.",
    color: "#3F51B5",
    bgColor: "rgba(63, 81, 181, 0.1)",
    icon: <Assignment fontSize="large" />,
  },
  { 
    grade: "2nd Grade", 
    age: "6 years & above", 
    description: "Basic literacy, numeracy, and communication skills are required.",
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)",
    icon: <MenuBook fontSize="large" />,
  },
  { 
    grade: "3rd Grade", 
    age: "7 years & above", 
    description: "Students must demonstrate fundamental comprehension and writing skills.",
    color: "#009688",
    bgColor: "rgba(0, 150, 136, 0.1)",
    icon: <School fontSize="large" />,
  },
  { 
    grade: "4th Grade", 
    age: "8 years & above", 
    description: "Proficiency in reading, basic mathematics, and logical reasoning is expected.",
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.1)",
    icon: <CastForEducation fontSize="large" />,
  },
  { 
    grade: "5th Grade", 
    age: "9 years & above", 
    description: "A strong foundation in primary subjects and independent learning ability is necessary.",
    color: "#FF9800",
    bgColor: "rgba(255, 152, 0, 0.1)",
    icon: <EmojiEvents fontSize="large" />,
  }
];

const MotionCard = motion(Card);
const MotionContainer = motion(Container);

export default function EligibilityCriteria() {
  return (
    <Box 
      sx={{ 
        background: "linear-gradient(135deg, #FFF8E1 0%, #E1F5FE 100%)",
        py: { xs: 6, md: 8 },
        borderRadius: { xs: '0', md: '25px' },
        margin: { xs: 0, md: 4 },
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative floating elements */}
      <Box
        component={motion.div}
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(255, 193, 7, 0.1)",
          top: "5%",
          left: "10%",
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
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(33, 150, 243, 0.1)",
          bottom: "10%",
          right: "5%",
          zIndex: 0
        }}
      />

      <MotionContainer 
        maxWidth="md" 
        sx={{ 
          py: 4,
          position: "relative",
          zIndex: 1
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          component={motion.div}
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
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: "#FF9800",
              fontFamily: "'Fredoka', cursive",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <AutoAwesome sx={{ 
              color: "#FF9800", 
              fontSize: { xs: 30, md: 40 },
              animation: "spin 3s infinite linear"
            }}/>
            Eligibility Criteria
            <AutoAwesome sx={{ 
              color: "#FF9800", 
              fontSize: { xs: 30, md: 40 },
              animation: "spin 3s infinite linear",
              animationDirection: "reverse"
            }}/>
          </Typography>
          
          <Typography 
            variant="body1" 
            textAlign="center" 
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{
              mb: 6, 
              mt: 2,
              maxWidth: '800px', 
              mx: 'auto',
              color: "#5D4037",
              fontFamily: "'Comic Neue', cursive",
              fontSize: "1.1rem",
              background: "rgba(255, 255, 255, 0.6)",
              padding: 2,
              borderRadius: "20px",
              border: "2px dashed #FF9800"
            }}
          >
            Below are the age and academic eligibility criteria for different grades at London Look School.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={3} 
          justifyContent="center"
        >
          {eligibilityData.map((item, index) => (
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
              <MotionCard
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  rotate: [-1, 1, -1, 1, 0],
                  transition: { duration: 0.4 }
                }}
                sx={{
                  borderRadius: 4,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  textAlign: "center",
                  p: 3,
                  background: 'linear-gradient(135deg, white 0%, #FAFAFA 100%)',
                  border: `3px solid ${item.color}`,
                  position: "relative",
                  overflow: "visible"
                }}
              >
                {/* Decorative circles in corners */}
                {[0, 1].map((cornerIndex) => (
                  <Box
                    key={cornerIndex}
                    sx={{
                      position: "absolute",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      background: item.color,
                      top: "10px",
                      left: cornerIndex === 0 ? "10px" : "auto",
                      right: cornerIndex === 1 ? "10px" : "auto",
                      zIndex: 2
                    }}
                  />
                ))}
                
                <CardContent sx={{ pt: 1 }}>
                  {/* Grade Icon */}
                  <Box
                    component={motion.div}
                    animate={{ 
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "loop", 
                      delay: index * 0.3
                    }}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        backgroundColor: item.bgColor,
                        color: item.color,
                        border: `2px dashed ${item.color}`,
                        boxShadow: `0 5px 15px ${item.bgColor}`
                      }}
                    >
                      {item.icon}
                    </Avatar>
                  </Box>
                  
                  <Typography 
                    variant="h5" 
                    fontWeight={700} 
                    sx={{
                      mb: 1,
                      color: item.color,
                      fontFamily: "'Fredoka', cursive",
                      fontSize: "1.4rem"
                    }}
                  >
                    {item.grade}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    fontWeight={500} 
                    sx={{
                      mb: 2,
                      color: "#673AB7",
                      fontFamily: "'Patrick Hand', cursive",
                      fontSize: "1.1rem",
                      background: "rgba(255,255,255,0.7)",
                      px: 2,
                      py: 0.5,
                      borderRadius: "15px",
                      display: "inline-block",
                      border: `1px solid ${item.bgColor}`
                    }}
                  >
                    {item.age}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: "#5D4037",
                      fontFamily: "'Comic Neue', cursive",
                      fontSize: "0.95rem",
                      lineHeight: 1.5
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
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
