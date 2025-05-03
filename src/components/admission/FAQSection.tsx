import { Container, Typography, Box, Paper } from "@mui/material";
import { 
  School, 
  QuestionAnswer, 
  EventNote, 
  WbSunny, 
  Checkroom,
  EmojiEvents,
  Help
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const faqs = [
  {
    question: "What is the admission process?",
    answer: "The admission process includes filling out the inquiry form, attending a school visit or counseling session, submitting required documents, and confirming admission by paying the fees.",
    icon: <School fontSize="medium" />,
    color: "#FF5722",
    bgColor: "rgba(255, 87, 34, 0.08)",
  },
  {
    question: "What curriculum does the school follow?",
    answer: "London Look School follows a CBSE-based curriculum, focusing on academic excellence, discipline, creativity, and moral values.",
    icon: <QuestionAnswer fontSize="medium" />,
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.08)",
  },
  {
    question: "What are the school hours?",
    answer: "The school operates from Monday to Friday, 8:30 AM to 3:30 PM, with a half-day on Saturdays for special activities.",
    icon: <EventNote fontSize="medium" />,
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.08)",
  },
  {
    question: "Is there a specific school uniform?",
    answer: "Yes, the school has a standard uniform. Detailed information regarding uniforms will be provided upon admission.",
    icon: <Checkroom fontSize="medium" />,
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.08)",
  }
];

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

export default function FAQSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #FFFDE7 0%, #E8F5E9 100%)",
        py: { xs: 6, md: 8 },
        borderRadius: { xs: "0", md: "25px" },
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
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop"
        }}
        sx={{
          position: "absolute",
          right: "-5%",
          top: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop"
        }}
        sx={{
          position: "absolute",
          left: "-8%",
          bottom: "10%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156,39,176,0.08) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0
        }}
      />

      <Container 
        maxWidth="md" 
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
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              color: "#FF6D00",
              fontFamily: "'Fredoka', cursive",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <EmojiEvents
              sx={{
                color: "#FF6D00",
                fontSize: { xs: 30, md: 40 },
                animation: "swing 2s infinite"
              }}
            />
            Frequently Asked Questions
            <EmojiEvents
              sx={{
                color: "#FF6D00",
                fontSize: { xs: 30, md: 40 },
                animation: "swing 2s infinite",
                animationDelay: "0.5s"
              }}
            />
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
              maxWidth: "800px",
              mx: "auto",
              color: "#5D4037",
              fontFamily: "'Comic Neue', cursive",
              fontSize: "1.1rem",
              background: "rgba(255, 255, 255, 0.7)",
              padding: 2,
              borderRadius: "20px",
              border: "2px dashed #FF9800"
            }}
          >
            Find answers to the most commonly asked questions about our school.
          </Typography>
        </MotionBox>

        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          {faqs.map((faq, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 * index,
                type: "spring",
                stiffness: 50
              }}
              mb={4}
            >
              <MotionPaper
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  position: "relative"
                }}
              >
                {/* Question Section */}
                <Box
                  sx={{
                    px: 4,
                    py: 2,
                    background: faq.bgColor,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderBottom: `3px dotted ${faq.color}`,
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Decorative circles in background */}
                  {[...Array(5)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: "absolute",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: `${faq.color}10`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        zIndex: 0
                      }}
                    />
                  ))}
                  
                  {/* Icon */}
                  <Box
                    component={motion.div}
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.3
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "12px",
                      borderRadius: "50%",
                      background: "white",
                      boxShadow: `0 4px 8px ${faq.color}30`,
                      color: faq.color,
                      zIndex: 1
                    }}
                  >
                    {faq.icon}
                  </Box>
                  
                  {/* Question text */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Fredoka', cursive",
                      color: faq.color,
                      flexGrow: 1,
                      position: "relative",
                      zIndex: 1
                    }}
                  >
                    {faq.question}
                  </Typography>
                  
                  {/* Animated question mark */}
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.2
                    }}
                    sx={{
                      position: "relative",
                      zIndex: 1
                    }}
                  >
                    <Help sx={{ color: faq.color, opacity: 0.7 }} />
                  </Box>
                </Box>
                
                {/* Answer Section */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  sx={{
                    p: 4,
                    background: "white",
                    position: "relative"
                  }}
                >
                  <Typography
                    sx={{
                      color: "#5D4037",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      fontFamily: "'Comic Neue', cursive",
                      position: "relative",
                      zIndex: 1
                    }}
                  >
                    {faq.answer}
                  </Typography>
                  
                  {/* Decorative sun in the corner */}
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
                      zIndex: 0
                    }}
                  >
                    <WbSunny sx={{ color: faq.color, fontSize: "2rem" }} />
                  </Box>
                </Box>
              </MotionPaper>
            </MotionBox>
          ))}
        </Box>
      </Container>
      
      {/* Add keyframes for animations */}
      <Box
        sx={{
          '@keyframes swing': {
            '0%, 100%': {
              transform: 'rotate(-10deg)',
            },
            '50%': {
              transform: 'rotate(10deg)',
            },
          }
        }}
      />
    </Box>
  );
}
