import React, { useEffect } from "react";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import kidsImage from "../assets/kids.png"; // Ensure the path is correct
import waveBackground from "../assets/wave.svg"; // Added wave background
import { useNavigate } from 'react-router-dom';  // Add this import at the top
import { motion } from "framer-motion"; // Import framer-motion

// Add Google Fonts import
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

// Analytics helper functions
const trackPageView = (pageName: string) => {
  // This would connect to your actual analytics service
  console.log(`Page viewed: ${pageName}`);
  // Example: window.gtag('event', 'page_view', { page_title: pageName });
};

const trackButtonClick = (buttonName: string) => {
  // This would connect to your actual analytics service
  console.log(`Button clicked: ${buttonName}`);
  // Example: window.gtag('event', 'button_click', { button_name: buttonName });
};

const trackEngagement = (actionType: string, details: any) => {
  // This would connect to your actual analytics service
  console.log(`Engagement: ${actionType}`, details);
  // Example: window.gtag('event', actionType, details);
};

// Create motion components
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionContainer = motion(Container);
const MotionStack = motion(Stack);

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  // Track page view when component mounts
  useEffect(() => {
    trackPageView('Home - Hero Section');
    
    // Track time spent on page
    const startTime = new Date();
    
    return () => {
      const endTime = new Date();
      const timeSpent = endTime.getTime() - startTime.getTime();
      trackEngagement('time_on_page', { 
        section: 'Hero Section', 
        timeInSeconds: timeSpent / 1000 
      });
    };
  }, []);
  
  // Enhanced navigation with analytics
  const handleNavigation = (destination: string, buttonName: string) => {
    trackButtonClick(buttonName);
    navigate(destination);
  };
  
  // Track external link clicks
  const handleExternalLinkClick = (linkName: string) => {
    trackButtonClick(linkName);
    // Analytics for external links should be triggered before redirect
  };
  
  // Track scroll depth
  useEffect(() => {
    let scrollDepthTracked = {
      25: false,
      50: false, 
      75: false,
      100: false
    };
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      
      if (scrollPercent >= 25 && !scrollDepthTracked[25]) {
        trackEngagement('scroll_depth', { depth: '25%' });
        scrollDepthTracked[25] = true;
      }
      if (scrollPercent >= 50 && !scrollDepthTracked[50]) {
        trackEngagement('scroll_depth', { depth: '50%' });
        scrollDepthTracked[50] = true;
      }
      if (scrollPercent >= 75 && !scrollDepthTracked[75]) {
        trackEngagement('scroll_depth', { depth: '75%' });
        scrollDepthTracked[75] = true;
      }
      if (scrollPercent >= 90 && !scrollDepthTracked[100]) {
        trackEngagement('scroll_depth', { depth: '100%' });
        scrollDepthTracked[100] = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Track mouse movement heatmap data
  useEffect(() => {
    const heatmapData: { x: number, y: number }[] = [];
    let lastRecorded = Date.now();
    
    const recordMousePosition = (e: MouseEvent) => {
      const now = Date.now();
      // Only record every 500ms to avoid too much data
      if (now - lastRecorded > 500) {
        heatmapData.push({ x: e.clientX, y: e.clientY });
        lastRecorded = now;
        
        // Send batch data every 10 records
        if (heatmapData.length >= 10) {
          trackEngagement('mouse_movement', { positions: [...heatmapData] });
          heatmapData.length = 0; // Clear the array
        }
      }
    };
    
    window.addEventListener('mousemove', recordMousePosition);
    return () => {
      window.removeEventListener('mousemove', recordMousePosition);
      
      // Send any remaining data
      if (heatmapData.length > 0) {
        trackEngagement('mouse_movement', { positions: [...heatmapData] });
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: 0.3,
        duration: 0.5
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      rotateY: 25
    },
    visible: { 
      x: 0, 
      opacity: 1,
      rotateY: 0,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 15,
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: { 
      y: -20,
      opacity: 0
    },
    visible: (i: number) => ({ 
      y: 0,
      opacity: 1,
      transition: { 
        delay: 0.05 + (i * 0.02),
        duration: 0.2
      }
    })
  };
  
  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "85vh",
        background: "linear-gradient(135deg, #FDE7A9 0%, #FFECB3 50%, #FFE082 100%)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: 4, md: 8 },
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Left Content */}
      <MotionContainer
        maxWidth="lg"
        variants={containerVariants}
        sx={{
          zIndex: 2,
          textAlign: { xs: "center", md: "left" },
          paddingTop: { xs: 8, md: 12 }, // Increased top padding
        }}
      >
        <MotionBox
          variants={itemVariants}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              paddingBottom: 2,
              color: "#7B1FA2",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              letterSpacing: "2px",
              animation: "bounce 2s infinite",
              fontFamily: {
                xs: "'Bubblegum Sans', cursive",
                md: "'Bubblegum Sans', cursive"
              },
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.1rem"
              },
              "@keyframes bounce": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-10px)" }
              },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: "2px 8px"
            }}
            onClick={() => trackEngagement('text_interaction', { element: 'school_name' })}
          >
            <Box sx={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {[
                { char: "L", color: "#E53935" },
                { char: "O", color: "#FF9800" },
                { char: "N", color: "#FFC107" },
                { char: "D", color: "#4CAF50" },
                { char: "O", color: "#2196F3" },
                { char: "N", color: "#3F51B5" },
                { char: "L", color: "#9C27B0" },
                { char: "O", color: "#E91E63" },
                { char: "O", color: "#009688" },
                { char: "K", color: "#FF5722" },
              ].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  style={{ color: letter.color, display: "inline-block" }}
                >
                  {letter.char}
                </motion.span>
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {[
                { char: "N", color: "#673AB7" },
                { char: "U", color: "#795548" },
                { char: "R", color: "#607D8B" },
                { char: "S", color: "#f44336" },
                { char: "E", color: "#2196F3" },
                { char: "R", color: "#4CAF50" },
                { char: "Y", color: "#FF9800" },
              ].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  style={{ color: letter.color, display: "inline-block" }}
                >
                  {letter.char}
                </motion.span>
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', whiteSpace: 'nowrap' }}>
              <motion.span
                custom={0}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                &
              </motion.span>
            </Box>

            <Box sx={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {[
                { char: "P", color: "#9C27B0" },
                { char: "R", color: "#E91E63" },
                { char: "I", color: "#3F51B5" },
                { char: "M", color: "#00BCD4" },
                { char: "A", color: "#009688" },
                { char: "R", color: "#FF5722" },
                { char: "Y", color: "#795548" },
              ].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  style={{ color: letter.color, display: "inline-block" }}
                >
                  {letter.char}
                </motion.span>
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {[
                { char: "S", color: "#F44336" },
                { char: "C", color: "#2196F3" },
                { char: "H", color: "#4CAF50" },
                { char: "O", color: "#FFC107" },
                { char: "O", color: "#9C27B0" },
                { char: "L", color: "#E91E63" },
              ].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  style={{ color: letter.color, display: "inline-block" }}
                >
                  {letter.char}
                </motion.span>
              ))}
            </Box>
          </Typography>
        </MotionBox>

        <MotionTypography
          variant="h3"
          variants={itemVariants}
          sx={{
            fontWeight: 700,
            fontFamily: {
              xs: "'Fredoka', cursive", 
              md: "'Fredoka', cursive"
            },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            lineHeight: { xs: 1.4, md: 1.3 },
            backgroundImage: "linear-gradient(45deg, #FF512F 0%, #F09819 30%, #1A8FE3 60%, #30D2BE 100%)",
            backgroundSize: "200% auto",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            animation: "gradient 5s ease infinite",
            "@keyframes gradient": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" }
            },
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            marginBottom: 2,
            position: "relative",
            letterSpacing: { xs: "0.5px", md: "normal" },
          }}
          onClick={() => trackEngagement('text_interaction', { element: 'main_headline' })}
        >
          Empowering students with a strong foundation in academics, creativity,
          and personal growth.
        </MotionTypography>

        <MotionTypography
          variant="body1"
          variants={itemVariants}
          sx={{
            mt: 3,
            fontSize: { xs: "1.05rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: { xs: 1.6, md: 1.7 },
            fontFamily: {
              xs: "'Comic Neue', cursive", 
              md: "'Comic Neue', cursive"
            },
            position: "relative",
            textShadow: "1px 1px 1px rgba(0,0,0,0.05)",
            fontWeight: { xs: 500, md: 400 },
            letterSpacing: { xs: "0.3px", md: "normal" },
            padding: { xs: "0 5px", md: 0 },
          }}
          onClick={() => trackEngagement('text_interaction', { element: 'description_text' })}
        >
          Discover a <strong style={{color: "#E91E63"}}>student-focused learning experience</strong> at our school in{" "}
          <strong style={{color: "#4CAF50"}}>Rajagopalapuram, Pudukkottai</strong>. We nurture young minds
          with <span style={{color: "#FF9800"}}>excellence</span>, <span style={{color: "#9C27B0"}}>innovation</span>, and <span style={{color: "#F44336"}}>compassion</span>.
        </MotionTypography>

        {/* Buttons */}
        <MotionStack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          variants={containerVariants}
          sx={{ mt: 4, alignItems: { xs: "center", md: "flex-start" } }}
          onMouseEnter={() => trackEngagement('interaction_area', { area: 'cta_buttons' })}
        >
          <MotionButton
            variant="contained"
            onClick={() => handleNavigation('/admissions', 'enroll_now_button')}
            variants={buttonVariants}
            whileHover="hover"
            sx={{
              background: "linear-gradient(45deg, #FF512F 0%, #DD2476 100%)",
              "&:hover": { 
                background: "linear-gradient(45deg, #DD2476 0%, #FF512F 100%)",
              },
              fontWeight: "bold",
              fontSize: { xs: "0.95rem", md: "1rem" },
              padding: { xs: "10px 20px", md: "12px 24px" },
              borderRadius: "25px",
              boxShadow: "0 4px 20px rgba(221, 36, 118, 0.4)",
              transition: "all 0.3s ease",
              fontFamily: "'Baloo 2', cursive",
            }}
          >
            Enroll Now →
          </MotionButton>

          <MotionButton
            variant="outlined"
            onClick={() => handleNavigation('/gallery', 'gallery_button')}
            startIcon={<PlayCircleFilledWhiteIcon />}
            variants={buttonVariants}
            whileHover="hover"
            sx={{
              color: "#3F51B5",
              borderColor: "#3F51B5",
              "&:hover": { 
                backgroundColor: "rgba(63, 81, 181, 0.1)",
              },
              fontSize: { xs: "0.95rem", md: "1rem" },
              padding: { xs: "10px 20px", md: "12px 24px" },
              borderRadius: "25px",
              boxShadow: "0 4px 20px rgba(63, 81, 181, 0.2)",
              transition: "all 0.3s ease",
              fontFamily: "'Baloo 2', cursive",
            }}
          >
            Watch Gallery
          </MotionButton>

          <motion.a
            href="https://wa.me/919442314351"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => handleExternalLinkClick('whatsapp_button')}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              sx={{
                background: "linear-gradient(45deg, #25D366 0%, #128C7E 100%)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "0.95rem", md: "1rem" },
                padding: { xs: "10px 20px", md: "12px 24px" },
                borderRadius: "25px",
                boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
                "&:hover": { 
                  background: "linear-gradient(45deg, #128C7E 0%, #25D366 100%)",
                },
                transition: "all 0.3s ease",
                fontFamily: "'Baloo 2', cursive",
                width: "100%"
              }}
            >
              Chat on WhatsApp
            </Button>
          </motion.a>
        </MotionStack>
      </MotionContainer>

      {/* Right Image */}
      <MotionBox
        variants={imageVariants}
        sx={{
          maxWidth: { xs: "100%", md: "55%" }, // Increased width for better focus
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: { xs: 6, md: 0 },
          paddingRight: { md: 8 },
        }}
        onMouseEnter={() => trackEngagement('image_hover', { image: 'kids_image' })}
      >
        <motion.img
          src={kidsImage}
          alt="Kids"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { 
              delay: 0.5,
              duration: 0.8,
              ease: "easeOut"
            }
          }}
          style={{
            width: "100%",
            maxWidth: "90%", // Increased image size
            height: "auto",
            borderRadius: "20px",
            objectFit: "cover",
            display: "block",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            animation: "float 6s ease-in-out infinite",
          }}
          onClick={() => trackEngagement('image_click', { image: 'kids_image' })}
          onLoad={() => trackEngagement('image_loaded', { image: 'kids_image' })}
        />
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>
      </MotionBox>

      {/* Wave Background */}
      <MotionBox
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          transition: { 
            delay: 0.8,
            duration: 1,
            ease: "easeOut"
          }
        }}
        sx={{
          position: "absolute",
          bottom: {xs: -4, sm: -130},
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: 1,
        }}
      >
        <img
          src={waveBackground}
          alt="Wave Background"
          style={{
            width: "100%",
            height: "auto",
          }}
          onLoad={() => trackEngagement('background_loaded', { element: 'wave_background' })}
        />
      </MotionBox>
    </MotionBox>
  );
};

export default HeroSection;
