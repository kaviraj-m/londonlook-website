import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Avatar } from "@mui/material";
import { School, Stars, EmojiPeople, AutoAwesome, Cake } from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const teachers = [
  {
    name: "B. Madhumitha",
    role: "Science and Mathematics Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740592978/B._Madhumitha_science_And_maths_teacher_3_yrs_experience_yq9tbp.jpg",
    bio: "3 years of experience in teaching Science and Mathematics.",
    color: "#4CAF50",
    bgcolor: "rgba(76, 175, 80, 0.1)"
  },
  {
    name: "Amudha",
    role: "Hindi Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740592977/Amudha._Hindi_teacher_10_yrs_experience_gders2.jpg",
    bio: "10 years of experience in teaching Hindi language.",
    color: "#E91E63",
    bgcolor: "rgba(233, 30, 99, 0.1)"
  },
  {
    name: "K. Annalaakshmi",
    role: "English Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740593025/K._Annalaakshmi_English_teacher_3_yrs_experience_u8aben.jpg",
    bio: "3 years of experience in teaching English.",
    color: "#3F51B5",
    bgcolor: "rgba(63, 81, 181, 0.1)"
  },
  {
    name: "Banumathi",
    role: "Tamil & Kindergarten Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740593005/Banumathi_Tamil_teacher_Kg_teacher_4_yrs_experience_of_handling_kinder_garden_students_qn0bhn.jpg",
    bio: "4 years of experience in handling kindergarten students and teaching Tamil.",
    color: "#FF9800",
    bgcolor: "rgba(255, 152, 0, 0.1)"
  },
  {
    name: "Abinaya",
    role: "Yoga & Physical Education Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740593098/Abinaya_yoga_and_physical_education_teacher_sqyyxc.jpg",
    bio: "Specialized in yoga and physical education for holistic development.",
    color: "#9C27B0",
    bgcolor: "rgba(156, 39, 176, 0.1)"
  },
  {
    name: "M. Ananthi",
    role: "English Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740593067/M.Ananthi_English_teacher_7_yrs_of_experience_wktdxw.jpg",
    bio: "7 years of experience in teaching English.",
    color: "#2196F3",
    bgcolor: "rgba(33, 150, 243, 0.1)"
  },
  {
    name: "K. Amirdhavalli",
    role: "Tamil & Social Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740592977/K._Amirdhavalli_Tamil_teacher_and_social_teacher_2_yrs_experience_yrx0xq.jpg",
    bio: "2 years of experience in teaching Tamil and Social Studies.",
    color: "#FF5722",
    bgcolor: "rgba(255, 87, 34, 0.1)"
  }
];

const MotionContainer = motion(Container);
const MotionCard = motion(Card);

export default function MeetOurTeam() {
  return (
    <Box
      sx={{ 
        background: "linear-gradient(180deg, #FBE9E7 0%, #FFECB3 100%)",
        py: 8,
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
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(255, 193, 7, 0.1)",
          top: "10%",
          left: "5%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{ 
          y: [0, 25, 0],
          x: [0, 15, 0, -15, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "rgba(233, 30, 99, 0.08)",
          bottom: "5%",
          right: "8%",
          zIndex: 0
        }}
      />

      <MotionContainer 
        maxWidth="lg" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          zIndex: 1
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Typography 
            variant="h3" 
            fontWeight={700} 
            textAlign="center" 
            gutterBottom
            sx={{
              color: "#FF5722",
              fontFamily: "'Fredoka', cursive",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2
            }}
          >
            <Stars sx={{ 
              color: "#FF9800", 
              fontSize: { xs: 30, md: 40 },
              animation: "wobble 3s infinite"
            }}/>
            Meet Our Super Teachers
            <Stars sx={{ 
              color: "#FF9800", 
              fontSize: { xs: 30, md: 40 },
              animation: "wobble 3s infinite",
              animationDelay: "0.5s"
            }}/>
          </Typography>
          
          <Typography 
            variant="body1" 
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{
              color: "#5D4037",
              fontFamily: "'Comic Neue', cursive",
              textAlign: "center",
              fontSize: "1.1rem",
              maxWidth: "800px",
              margin: "0 auto",
              mb: 6,
              background: "rgba(255, 255, 255, 0.6)",
              p: 2,
              borderRadius: "20px",
              border: "2px dashed #FF9800"
            }}
          >
            Our dedicated faculty ensures holistic development by fostering curiosity and excellence in students.
          </Typography>
          
          <Grid 
            container 
            spacing={{ xs: 3, sm: 4, md: 5 }} 
            justifyContent="center"
          >
            {teachers.map((teacher, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
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
                    scale: 1.05,
                    rotate: [-0.5, 0.5, -0.5, 0.5, 0]
                  }}
                  transition={{
                    rotate: { duration: 0.5 }
                  }}
                  sx={{ 
                    borderRadius: "20px", 
                    height: '100%',
                    maxWidth: { xs: '280px', sm: 'none' },
                    mx: { xs: 'auto', sm: 0 },
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 100%)',
                    border: `3px solid ${teacher.color}`,
                    position: "relative",
                    overflow: "visible",
                    boxShadow: `0 10px 20px ${teacher.bgcolor}`,
                  }}
                >
                  {/* Decorative element on top of the card */}
                  <Box
                    component={motion.div}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.2
                    }}
                    sx={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 2,
                      background: "white",
                      borderRadius: "50%",
                      border: `3px solid ${teacher.color}`,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {index % 4 === 0 && <School sx={{ color: teacher.color }} />}
                    {index % 4 === 1 && <EmojiPeople sx={{ color: teacher.color }} />}
                    {index % 4 === 2 && <AutoAwesome sx={{ color: teacher.color }} />}
                    {index % 4 === 3 && <Cake sx={{ color: teacher.color }} />}
                  </Box>
                  
                  <Box 
                    sx={{ 
                      position: 'relative',
                      paddingTop: { xs: '100%', sm: '115%' },
                      margin: "15px",
                      borderRadius: "15px",
                      overflow: "hidden",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                      border: "5px solid white"
                    }}
                  >
                    <CardMedia 
                      component="img" 
                      image={teacher.image} 
                      alt={teacher.name}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <CardContent 
                    sx={{ 
                      textAlign: "center",
                      p: { xs: 2, sm: 3 },
                      pb: { xs: 3, sm: 4 }
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      fontWeight={700}
                      sx={{ 
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        color: teacher.color,
                        fontFamily: "'Fredoka', cursive",
                        mb: 0.5
                      }}
                    >
                      {teacher.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      gutterBottom
                      sx={{ 
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        color: "#9C27B0",
                        fontFamily: "'Fredoka', cursive",
                        fontWeight: "bold",
                        mb: 1.5
                      }}
                    >
                      {teacher.role}
                    </Typography>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        color: "#5D4037",
                        fontFamily: "'Comic Neue', cursive",
                        background: "rgba(255,255,255,0.7)",
                        p: 1.5,
                        borderRadius: "10px",
                        border: `1px dashed ${teacher.color}`
                      }}
                    >
                      {teacher.bio}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MotionContainer>
      
      {/* Add keyframes for animations */}
      <Box
        sx={{
          '@keyframes wobble': {
            '0%, 100%': {
              transform: 'rotate(-3deg)',
            },
            '50%': {
              transform: 'rotate(3deg)',
            },
          }
        }}
      />
    </Box>
  );
}
