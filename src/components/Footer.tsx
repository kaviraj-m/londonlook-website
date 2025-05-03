import { Box, Typography, Grid, Link, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, Favorite, School, Email, Phone, Home } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #E8F5E9 0%, #81C784 100%)',
        color: '#333',
        padding: '40px 20px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Elements */}
      <Box
        component={motion.div}
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(255, 193, 7, 0.1)',
          top: '-30px',
          left: '10%',
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0, -10, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(33, 150, 243, 0.1)',
          bottom: '-50px',
          right: '10%',
          zIndex: 0
        }}
      />
      
      {/* Wavy top border */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '15px',
          background: 'linear-gradient(90deg, #FF9800, #FF5722, #E91E63, #9C27B0, #3F51B5, #2196F3, #4CAF50)',
          clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5} justifyContent="center">
          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontFamily: "'Fredoka', cursive",
                  color: '#FF5722',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                <Home sx={{ 
                  color: '#FF5722',
                  animation: 'bounce 2s infinite'
                }} /> 
                Quick Links
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1.5,
                  mt: 2
                }}
              >
                {[
                  { url: "/", label: "Home" },
                  { url: "/about", label: "About Us" },
                  { url: "/admissions", label: "Admissions" },
                  { url: "/gallery", label: "Gallery" },
                  { url: "/contact", label: "Contact Us" }
                ].map((link, index) => (
                  <motion.div
                    key={link.url}
                    whileHover={{ scale: 1.05, x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Link 
                      href={link.url} 
                      sx={{ 
                        color: '#3E2723',
                        textDecoration: 'none',
                        fontFamily: "'Comic Neue', cursive",
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        padding: '5px 10px',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.5)',
                        display: 'inline-block',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.8)',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontFamily: "'Fredoka', cursive",
                  color: '#9C27B0',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                <School sx={{ 
                  color: '#9C27B0',
                  animation: 'bounce 2s infinite',
                  animationDelay: '0.3s'
                }} /> 
                Contact Us
              </Typography>
              
              <Box 
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.6)',
                  padding: '15px',
                  borderRadius: '15px',
                  mt: 2,
                  border: '2px dashed #9C27B0'
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Typography 
                    variant="body1"
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1.5,
                      fontFamily: "'Comic Neue', cursive",
                      fontSize: '0.95rem'
                    }}
                  >
                    <Home fontSize="small" sx={{ color: '#FF9800' }} />
                    No.14, 3rd Street, Rajagopalapuram, Pudukkottai - 622003
                  </Typography>
                  
                  <Typography 
                    variant="body1"
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1.5,
                      fontFamily: "'Comic Neue', cursive",
                      fontSize: '0.95rem'
                    }}
                  >
                    <Phone fontSize="small" sx={{ color: '#4CAF50' }} />
                    +91 94423 14351
                  </Typography>
                  
                  <Typography 
                    variant="body1"
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontFamily: "'Comic Neue', cursive",
                      fontSize: '0.95rem'
                    }}
                  >
                    <Email fontSize="small" sx={{ color: '#2196F3' }} />
                    info@londonlookschool.in
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontFamily: "'Fredoka', cursive",
                  color: '#2196F3',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                <Favorite sx={{ 
                  color: '#2196F3',
                  animation: 'bounce 2s infinite',
                  animationDelay: '0.6s'
                }} /> 
                Follow Us
              </Typography>
              
              <Box 
                sx={{ 
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2
                }}
              >
                {[
                  { icon: <Facebook fontSize="large" />, color: '#3b5998', delay: 0.5 },
                  { icon: <Twitter fontSize="large" />, color: '#1DA1F2', delay: 0.6 },
                  { icon: <Instagram fontSize="large" />, color: '#C13584', delay: 0.7 },
                  { icon: <YouTube fontSize="large" />, color: '#FF0000', delay: 0.8 }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{
                      y: { 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3
                      },
                      scale: { duration: 0.2 }
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    style={{ display: 'inline-block' }}
                  >
                    <IconButton 
                      sx={{ 
                        color: social.color,
                        background: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: `0 4px 10px rgba(0,0,0,0.1)`,
                        p: 1.5,
                        '&:hover': {
                          background: 'white',
                          boxShadow: `0 6px 15px rgba(0,0,0,0.15)`
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Box 
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          mt={6}
        >
          <Typography 
            variant="body2"
            sx={{ 
              fontFamily: "'Comic Neue', cursive",
              background: 'rgba(255,255,255,0.6)',
              display: 'inline-block',
              padding: '8px 15px',
              borderRadius: '30px',
              fontWeight: 'bold',
              color: '#333'
            }}
          >
            © 2025 London Look School. All Rights Reserved.
          </Typography>
        </Box>
      </Container>

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
          },
          '@keyframes gradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
        }}
      />
    </Box>
  );
};

export default Footer;
