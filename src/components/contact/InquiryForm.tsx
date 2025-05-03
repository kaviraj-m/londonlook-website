import { useState, useRef } from "react";
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Stack, 
  Box,
  Paper,
  styled,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import { 
  Send, 
  EmojiEmotions, 
  Favorite, 
  Stars,
  Email,
  Person,
  Phone as PhoneIcon,
  MessageRounded
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

// Create motion components
const MotionCard = motion(Card);
const MotionBox = motion(Box);

// Styled components
const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    '&.Mui-focused': {
      boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
    },
    paddingLeft: '48px'
  },
  '& .MuiInputLabel-root': {
    fontFamily: "'Fredoka', cursive",
    fontWeight: 600,
    color: '#5D4037',
    marginLeft: '36px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: 2,
    borderColor: '#9C27B0'
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#673AB7 !important',
    borderWidth: 2
  }
}));

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple validation function
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create a FormData object from the form
      const formData = new FormData(formRef.current!);
      
      // Create a URLSearchParams object for sending as application/x-www-form-urlencoded
      const params = new URLSearchParams();
      for (const pair of formData.entries()) {
        params.append(pair[0], pair[1].toString());
      }
      
      // Send the form data using fetch
      const response = await fetch('https://formsubmit.co/ajax/Londonlook9@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Reset form after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        // Show success message
        setSnackbar({
          open: true,
          message: "Your message has been sent successfully! We'll be in touch soon.",
          severity: "success"
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again or contact us directly.",
        severity: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Icons with colors for form fields
  const formIcons = [
    { icon: <Person />, color: "#FF5722" },
    { icon: <Email />, color: "#2196F3" },
    { icon: <PhoneIcon />, color: "#4CAF50" },
    { icon: <MessageRounded />, color: "#9C27B0" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #FFD3E0 0%, #D1C4E9 100%)",
        py: { xs: 6, md: 8 },
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

      {/* Floating animated decorations */}
      {[...Array(6)].map((_, i) => (
        <MotionBox
          key={i}
          animate={{
            y: [0, -15, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          sx={{
            position: "absolute",
            width: 30 + i * 10,
            height: 30 + i * 10,
            borderRadius: "50%",
            background: i % 3 === 0 
              ? "linear-gradient(135deg, #FF9800 30%, #FFEB3B 90%)" 
              : i % 3 === 1 
                ? "linear-gradient(135deg, #F50057 30%, #FF4081 90%)"
                : "linear-gradient(135deg, #2196F3 30%, #4FC3F7 90%)",
            opacity: 0.4,
            top: `${10 + (i * 15)}%`,
            left: i % 2 === 0 ? `${5 + (i * 10)}%` : `${80 - (i * 10)}%`,
            zIndex: 0,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        />
      ))}

      <Container maxWidth="sm" sx={{ py: 6, position: "relative", zIndex: 1 }}>
        <MotionCard 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            type: "spring", 
            stiffness: 50 
          }}
          sx={{ 
            boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
            borderRadius: { xs: 4, md: 6 },
            overflow: "hidden",
            border: "5px solid #FFC107",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              background: "linear-gradient(90deg, #FF9800, #F44336, #9C27B0, #3F51B5, #4CAF50, #FFC107)",
              zIndex: 10
            }
          }}
        >
          {/* Form Title Decoration */}
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            sx={{
              position: "absolute",
              top: -20,
              right: -20,
              zIndex: 10
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FF4081",
                color: "white",
                border: "2px dashed white",
                boxShadow: '0 5px 15px rgba(244,67,54,0.4)'
              }}
            >
              <EmojiEmotions sx={{ fontSize: 35 }} />
            </Paper>
          </Box>

          <CardContent sx={{ p: 4 }}>
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ textAlign: "center", mb: 4 }}
            >
              <Typography 
                variant="h4" 
                fontWeight={700} 
                textAlign="center" 
                gutterBottom
                sx={{
                  color: "#9C27B0",
                  fontFamily: "'Fredoka', cursive",
                  fontSize: { xs: '1.8rem', sm: '2.2rem' },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5
                }}
              >
                <Stars 
                  sx={{ 
                    color: "#FFC107", 
                    fontSize: { xs: 30, md: 35 },
                    animation: "spin 4s linear infinite"
                  }}
                />
                Say Hello!
                <Stars 
                  sx={{ 
                    color: "#FFC107", 
                    fontSize: { xs: 30, md: 35 },
                    animation: "spin 4s linear infinite",
                    animationDelay: "2s"
                  }}
                />
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: "#5D4037",
                  fontFamily: "'Comic Neue', cursive",
                  mb: 2
                }}
              >
                Have a question or want to know more? Fill out this form, and we'll get back to you soon!
              </Typography>
            </MotionBox>

            <form 
              ref={formRef} 
              onSubmit={handleSubmit}
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Inquiry from London Look Website" />
              <input type="hidden" name="_cc" value="kaviraj9042@gmail.com" />
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_template" value="table" />

              <Stack spacing={4}>
                {[
                  { 
                    label: "Full Name", 
                    name: "name", 
                    type: "text", 
                    rows: undefined,
                    multiline: false,
                    icon: formIcons[0]
                  },
                  { 
                    label: "Email Address", 
                    name: "email", 
                    type: "email", 
                    rows: undefined,
                    multiline: false,
                    icon: formIcons[1]
                  },
                  { 
                    label: "Phone Number", 
                    name: "phone", 
                    type: "tel", 
                    rows: undefined,
                    multiline: false,
                    icon: formIcons[2]
                  },
                  { 
                    label: "Your Message", 
                    name: "message", 
                    type: "text", 
                    rows: 4,
                    multiline: true,
                    icon: formIcons[3]
                  }
                ].map((field, index) => (
                  <MotionBox
                    key={field.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    sx={{ position: "relative", mb: 1 }}
                  >
                    <Box
                      component={motion.div}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      sx={{
                        position: "absolute",
                        left: 16,
                        top: 14,
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: field.icon.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        zIndex: 5,
                        boxShadow: `0 4px 8px ${field.icon.color}80`
                      }}
                    >
                      <Box sx={{ fontSize: 18, "& > svg": { fontSize: 18 } }}>
                        {field.icon.icon}
                      </Box>
                    </Box>
                    <StyledTextField
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      variant="outlined"
                      fullWidth
                      required
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      multiline={field.multiline}
                      rows={field.rows}
                      InputProps={{
                        sx: { 
                          fontFamily: "'Comic Neue', cursive",
                        }
                      }}
                    />
                  </MotionBox>
                ))}

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  sx={{ mt: 3 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Button 
                    type="submit" 
                    variant="contained" 
                    size="large" 
                    fullWidth
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    sx={{
                      background: "linear-gradient(45deg, #FF4081 30%, #9C27B0 90%)",
                      borderRadius: 8,
                      py: 1.5,
                      boxShadow: '0 6px 15px rgba(244, 67, 54, 0.4)',
                      fontFamily: "'Fredoka', cursive",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      textTransform: "none"
                    }}
                    endIcon={
                      isSubmitting ? null : (
                        <Box
                          component={motion.div}
                          animate={{ 
                            x: [0, 5, 0],
                            y: [0, -3, 0]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "loop" 
                          }}
                        >
                          <Send />
                        </Box>
                      )
                    }
                  >
                    {isSubmitting ? (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                        Sending...
                      </Box>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </MotionBox>

                <MotionBox
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  sx={{ 
                    textAlign: "center", 
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "#5D4037", 
                      fontFamily: "'Fredoka', cursive",
                    }}
                  >
                    We respond with love
                  </Typography>
                  <Favorite sx={{ color: "#F44336", fontSize: 18 }} />
                </MotionBox>
              </Stack>
            </form>
          </CardContent>
        </MotionCard>
      </Container>

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
