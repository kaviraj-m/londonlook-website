import { Container, Typography, Grid, Card, CardContent, Box, Avatar } from "@mui/material";
import { 
  AssignmentTurnedIn, 
  CameraAlt, 
  VerifiedUser, 
  MenuBook, 
  AutoAwesome,
  EmojiEvents
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const requiredDocuments = [
  { 
    name: "Birth Certificate", 
    description: "Original and a photocopy of the child's birth certificate.",
    icon: <AssignmentTurnedIn fontSize="large" />,
    color: "#FF5722",
    bgColor: "rgba(255, 87, 34, 0.1)", 
  },
  { 
    name: "Passport-size Photos", 
    description: "Recent passport-size photographs (4 copies).",
    icon: <CameraAlt fontSize="large" />,
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)",
  },
  { 
    name: "Aadhar Card", 
    description: "Aadhar card of the student and parents (photocopy required).",
    icon: <VerifiedUser fontSize="large" />,
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.1)",
  },
  { 
    name: "Previous School Report", 
    description: "Report card from the last attended school (if applicable).",
    icon: <MenuBook fontSize="large" />,
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)",
  },
];

const MotionCard = motion(Card);
const MotionContainer = motion(Container);

export default function RequiredDocuments() {
  return (
    <Box 
      sx={{ 
        background: "linear-gradient(135deg, #E1F5FE 0%, #E8F5E9 100%)",
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
          background: "rgba(33, 150, 243, 0.1)",
          top: "10%",
          left: "8%",
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
          background: "rgba(76, 175, 80, 0.1)",
          bottom: "15%",
          right: "10%",
          zIndex: 0
        }}
      />

      <MotionContainer 
        maxWidth="md" 
        sx={{ 
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
              color: "#4CAF50",
              fontFamily: "'Fredoka', cursive",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <EmojiEvents sx={{ 
              color: "#4CAF50", 
              fontSize: { xs: 30, md: 40 },
              animation: "bounce 2s infinite"
            }}/>
            Required Documents
            <EmojiEvents sx={{ 
              color: "#4CAF50", 
              fontSize: { xs: 30, md: 40 },
              animation: "bounce 2s infinite",
              animationDelay: "0.5s"
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
              border: "2px dashed #4CAF50"
            }}
          >
            Please ensure you have the following documents ready for a smooth admission process.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
        >
          {requiredDocuments.map((doc, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              key={index} 
              sx={{ display: "flex" }}
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
                  background: 'linear-gradient(135deg, white 0%, #FAFAFA 100%)',
                  border: `3px solid ${doc.color}`,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Decorative wave pattern at top */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "8px",
                    background: doc.color,
                    backgroundImage: `linear-gradient(45deg, ${doc.color} 25%, transparent 25%, transparent 50%, ${doc.color} 50%, ${doc.color} 75%, transparent 75%, transparent)`,
                    backgroundSize: "14px 14px",
                  }}
                />
                
                <CardContent sx={{ 
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  p: 4
                }}>
                  {/* Document Icon */}
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
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: doc.bgColor,
                        color: doc.color,
                        border: `2px dashed ${doc.color}`,
                        boxShadow: `0 5px 15px ${doc.bgColor}`,
                        mb: 1
                      }}
                    >
                      {doc.icon}
                    </Avatar>
                  </Box>
                  
                  {/* Document Name */}
                  <Typography 
                    variant="h5" 
                    fontWeight={700}
                    sx={{
                      color: doc.color,
                      fontFamily: "'Fredoka', cursive",
                      fontSize: "1.4rem",
                      mb: 1
                    }}
                  >
                    {doc.name}
                  </Typography>
                  
                  {/* Document Description */}
                  <Box
                    sx={{
                      background: "rgba(255,255,255,0.7)",
                      p: 2,
                      borderRadius: "12px",
                      border: `1px solid ${doc.bgColor}`
                    }}
                  >
                    <Typography 
                      variant="body1"
                      sx={{
                        color: "#5D4037",
                        fontFamily: "'Comic Neue', cursive",
                        fontSize: "1rem",
                        lineHeight: 1.5
                      }}
                    >
                      {doc.description}
                    </Typography>
                  </Box>
                  
                  {/* Decorative Element - Checkmark */}
                  <Box
                    component={motion.div}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "loop", 
                      delay: index * 0.2 + 0.5
                    }}
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <AutoAwesome 
                      sx={{ 
                        color: doc.color,
                        fontSize: "1.2rem"
                      }} 
                    />
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </MotionContainer>
      
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
