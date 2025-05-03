import { useState, useRef, useEffect } from "react";
import { Container, Typography, Stepper, Step, StepLabel, Paper, Box, TextField, Button, Grid, Avatar, Link, CircularProgress, Snackbar, Alert } from "@mui/material";
import { School, EventAvailable, Description, Payment, Stars, EmojiEvents, CloudQueue, Cake, Favorite, CloudDownload, CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const StyledPaper = styled(Paper)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  overflow: 'hidden',
  position: 'relative',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
    fontFamily: "'Comic Neue', cursive",
    '&:hover fieldset': {
      borderColor: '#FF5722',
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: "'Baloo 2', cursive",
    color: '#673AB7',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#9C27B0',
    borderWidth: '2px',
  },
});

const MotionContainer = motion(Container);
const MotionPaper = motion(Paper);

const steps = [
  { 
    label: "Fill the admission inquiry form", 
    icon: <School fontSize="large" />, 
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)"
  },
  { 
    label: "Attend counseling or visit the school", 
    icon: <EventAvailable fontSize="large" />, 
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)"
  },
  { 
    label: "Submit required documents", 
    icon: <Description fontSize="large" />, 
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.1)"
  },
  { 
    label: "Pay the fees & confirm admission", 
    icon: <Payment fontSize="large" />, 
    color: "#FF9800",
    bgColor: "rgba(255, 152, 0, 0.1)"
  },
];

export default function AdmissionProcess() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const formRef = useRef<HTMLFormElement>(null);
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("lmAxAzswcXnKT5S5N");
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error"
      });
      return;
    }

    setIsSubmitting(true);

    // Create template parameters
    const templateParams = {
      to_name: "London Look School",
      from_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message,
      reply_to: formData.email,
      to_email: "Londonlook9@gmail.com",
      sender_email: "tamilankaviraj@gmail.com", // The sender email address
      subject: "New Admission Inquiry from London Look Website"
    };

    try {
      // Use sendForm when you have a form reference, or send when you have template parameters
      await emailjs.send(
        "service_nq0ow9o", // Service ID
        "template_5hxcjmi", // Template ID
        templateParams,
        "lmAxAzswcXnKT5S5N" // Public Key
      );
      
      console.log("Email sent successfully!");
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Show success message
      setSnackbar({
        open: true,
        message: "Your inquiry has been submitted successfully! We'll contact you soon.",
        severity: "success"
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      
      // Show error message
      setSnackbar({
        open: true,
        message: "Failed to submit inquiry. Please try again or contact us directly.",
        severity: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  
  return (
    <Box 
      sx={{ 
        background: "linear-gradient(135deg, #E3F2FD 0%, #F3E5F5 100%)",
        py: 10,
        borderRadius: { xs: '0', md: '25px' },
        margin: { xs: 0, md: 4 },
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Success/Error Notification */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity as "success" | "error"} 
          sx={{ 
            width: '100%',
            fontFamily: "'Comic Neue', cursive",
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      {/* Brochure Download Button */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          mb: 4
        }}
      >
        <Box
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.05, 
            rotate: [0, -1, 2, -1, 0]
          }}
          transition={{ duration: 0.5 }}
        >
          <Button
            component={Link}
            href="https://drive.google.com/file/d/1WZNyczkBFUissd7fy0stVANkbCA9vjp_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              backgroundColor: "#FF9800",
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontFamily: "'Baloo 2', cursive",
              fontSize: { xs: "1rem", md: "1.2rem" },
              textTransform: "none",
              fontWeight: "bold",
              border: "3px dashed #FFF",
              boxShadow: "0 8px 15px rgba(255, 152, 0, 0.3)",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                backgroundColor: "#F57C00",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                transition: "0.5s",
                animation: "shine 3s infinite"
              }
            }}
            startIcon={
              <CloudDownload 
                sx={{ 
                  fontSize: { xs: 24, md: 28 },
                  animation: "bounce 2s infinite"
                }} 
              />
            }
          >
            View or Download School Brochure
          </Button>
        </Box>
      </Box>
      
      {/* Decorative elements */}
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
          top: "10%",
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
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(233, 30, 99, 0.08)",
          bottom: "15%",
          right: "8%",
          zIndex: 0
        }}
      />

      <MotionContainer 
        maxWidth="md" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ 
          position: "relative",
          zIndex: 1
        }}
      >
        <MotionPaper 
          elevation={4} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{ 
            p: { xs: 3, md: 6 }, 
            borderRadius: 8, 
            textAlign: "center",
            background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
            border: '3px solid #E1BEE7',
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Top decoration - rainbow border */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "8px",
              background: "linear-gradient(90deg, #FF9800, #F44336, #E91E63, #9C27B0, #3F51B5, #2196F3, #4CAF50)",
            }}
          />

          <Box 
            component={motion.div}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h3" 
              fontWeight={700}
              gutterBottom
              sx={{ 
                fontSize: { xs: '2rem', md: '2.8rem' },
                mb: 2,
                color: "#512DA8",
                fontFamily: "'Fredoka', cursive",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2
              }}
            >
              <Stars sx={{ 
                color: "#FF9800", 
                fontSize: { xs: 30, md: 40 },
                animation: "spin 3s infinite linear"
              }}/>
              Admission Process
              <Stars sx={{ 
                color: "#FF9800", 
                fontSize: { xs: 30, md: 40 },
                animation: "spin 3s infinite linear",
                animationDirection: "reverse"
              }}/>
            </Typography>
          </Box>

          <Typography 
            variant="body1"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{ 
              mb: 6, 
              maxWidth: '800px', 
              mx: 'auto',
              color: "#5D4037",
              fontFamily: "'Comic Neue', cursive",
              fontSize: "1.1rem",
              background: "rgba(255, 255, 255, 0.6)",
              padding: 2,
              borderRadius: "20px",
              border: "2px dashed #9C27B0"
            }}
          >
            Follow these simple steps to secure admission at London Look School.
          </Typography>

          <Stepper 
            orientation="vertical" 
            sx={{ 
              '& .MuiStepConnector-line': {
                minHeight: 50,
                borderLeftWidth: 3,
                borderColor: "#E1BEE7"
              },
              px: { xs: 0, sm: 4 }
            }}
          >
            {steps.map((step, index) => (
              <Step key={index} active={true}>
                <Box 
                  component={motion.div}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 * index,
                    type: "spring", 
                    stiffness: 100 
                  }}
                  display="flex" 
                  alignItems="center" 
                  sx={{ mb: 4 }}
                >
                  <Box 
                    sx={{ 
                      mr: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: { xs: "60px", md: "70px" },
                      height: { xs: "60px", md: "70px" },
                      borderRadius: "50%",
                      background: step.bgColor,
                      color: step.color,
                      border: `2px dashed ${step.color}`,
                      boxShadow: `0 4px 15px ${step.bgColor}`,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': { 
                        transform: 'scale(1.1) rotate(5deg)',
                        boxShadow: `0 6px 20px ${step.bgColor}`
                      }
                    }}
                    component={motion.div}
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
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
                        transform: 'scale(1.5)'
                      }}
                    >
                      {step.icon}
                    </Box>
                  </Box>
                  <StepLabel>
                    <Typography 
                      variant="h6" 
                      fontWeight={600}
                      sx={{
                        fontFamily: "'Baloo 2', cursive",
                        color: step.color
                      }}
                    >
                      {step.label}
                    </Typography>
                  </StepLabel>
                </Box>
              </Step>
            ))}
          </Stepper>
        </MotionPaper>

        <MotionPaper 
          elevation={4} 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          sx={{ 
            p: { xs: 3, md: 6 }, 
            borderRadius: 8, 
            mt: 8,
            background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
            border: '3px solid #E1BEE7',
            position: "relative"
          }}
        >
          {/* Decorative elements */}
          {[...Array(3)].map((_, i) => (
            <Box
              key={i}
              component={motion.div}
              animate={{ 
                y: [0, -8, 0],
                x: [0, i % 2 === 0 ? 5 : -5, 0],
              }}
              transition={{ 
                duration: 3 + i, 
                repeat: Infinity,
                repeatType: "loop", 
                delay: i * 0.5
              }}
              sx={{
                position: "absolute",
                width: 30 + (i * 10),
                height: 30 + (i * 10),
                borderRadius: "50%",
                background: ["rgba(233, 30, 99, 0.1)", "rgba(33, 150, 243, 0.1)", "rgba(76, 175, 80, 0.1)"][i],
                top: [15, 20, 25][i] + "%",
                right: [5, 15, 25][i] + "%",
                zIndex: 0
              }}
            />
          ))}

          <Box 
            component={motion.div}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h4" 
              fontWeight={700}
              gutterBottom 
              textAlign="center"
              sx={{ 
                mb: 4,
                color: "#512DA8",
                fontFamily: "'Fredoka', cursive",
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5
              }}
            >
              <EmojiEvents sx={{ color: "#FF9800" }} />
              Admission Inquiry Form
              <EmojiEvents sx={{ color: "#FF9800" }} />
            </Typography>
          </Box>

          <form ref={formRef} onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{
                    sx: { 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '15px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputProps={{
                    sx: { 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '15px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  InputProps={{
                    sx: { 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '15px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }
                  }}
                />
              </Grid>
              <Grid 
                item 
                xs={12}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <StyledTextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  InputProps={{
                    sx: { 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '15px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }
                  }}
                />
              </Grid>
              <Grid 
                item 
                xs={12} 
                textAlign="center"
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <Button 
                  component={motion.button}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [-1, 1, -1, 1, 0],
                  }}
                  transition={{ duration: 0.3 }}
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    py: 1.5,
                    px: 5,
                    borderRadius: 8,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
                    background: 'linear-gradient(45deg, #9C27B0, #673AB7)',
                    fontFamily: "'Baloo 2', cursive",
                    border: '2px solid #E1BEE7',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #8E24AA, #5E35B1)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
                    },
                    minWidth: '200px'
                  }}
                  endIcon={isSubmitting ? null : <Favorite />}
                >
                  {isSubmitting ? (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                      Sending...
                    </Box>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </MotionPaper>
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
          },
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)'
            },
            '50%': {
              transform: 'translateY(-8px)'
            }
          },
          '@keyframes shine': {
            '0%': {
              left: '-100%',
            },
            '20%': {
              left: '100%',
            },
            '100%': {
              left: '100%',
            }
          }
        }}
      />
    </Box>
  );
}
