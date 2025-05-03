import React from "react";
import { Grid, Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BrushIcon from "@mui/icons-material/Brush";
import { AcUnitRounded } from "@mui/icons-material";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const features = [
  {
    icon: <SportsEsportsIcon fontSize="large" style={{ color: "#FF4081" }} />,
    title: "Interactive Learning",
    description: "Engaging games that make learning fun and effective.",
    bgGradient: "linear-gradient(135deg, #fff6f9 0%, #ffe1ec 100%)",
    avatarBg: "linear-gradient(135deg, #FF4081 0%, #F50057 100%)",
    delay: 0.1,
  },
  {
    icon: <RestaurantIcon fontSize="large" style={{ color: "#FF9800" }} />,
    title: "Healthy Meals",
    description: "Nutritious, carefully curated meals for kids' well-being.",
    bgGradient: "linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)",
    avatarBg: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)",
    delay: 0.2,
  },
  {
    icon: <SchoolIcon fontSize="large" style={{ color: "#2196F3" }} />,
    title: "Expert Educators",
    description: "Passionate and experienced teachers for your child's future.",
    bgGradient: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
    avatarBg: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
    delay: 0.3,
  },
  {
    icon: <BrushIcon fontSize="large" style={{ color: "#4CAF50" }} />,
    title: "Creative Activities",
    description: "Art and craft-based learning to boost creativity.",
    bgGradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
    avatarBg: "linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",
    delay: 0.4,
  },
  {
    icon: <AcUnitRounded fontSize="large" style={{ color: "#00BCD4" }} />,
    title: "Climate Controlled",
    description: "Air-conditioned classrooms for comfortable learning environment.",
    bgGradient: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
    avatarBg: "linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",
    delay: 0.5,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #fff9c4 0%, #ffffff 50%, #e3f2fd 100%)",
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 8 },
        borderRadius: {xs: 0, md: "0 0 30px 30px"},
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        sx={{
          position: "absolute",
          top: "-50px",
          left: "10%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(255,87,34,0.2) 0%, rgba(255,87,34,0) 70%)",
          borderRadius: "50%",
        }}
      />
      <Box
        component={motion.div}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        sx={{
          position: "absolute",
          bottom: "-50px",
          right: "10%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(76,175,80,0.2) 0%, rgba(76,175,80,0) 70%)",
          borderRadius: "50%",
        }}
      />
      
      {/* Floating Circles */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{
            y: [Math.random() * 20, Math.random() * -20, Math.random() * 20],
            x: [Math.random() * 20, Math.random() * -20, Math.random() * 20],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            width: 10 + Math.random() * 25 + "px",
            height: 10 + Math.random() * 25 + "px",
            borderRadius: "50%",
            background: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.15)`,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            zIndex: 0,
          }}
        />
      ))}

      {/* Section Title */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={2}
          sx={{ 
            fontFamily: "'Fredoka', cursive", 
            position: "relative",
            display: "inline-block",
            width: "100%"
          }}
        >
          <span
            style={{
              background: "linear-gradient(45deg, #FF5722 0%, #FFC107 25%, #4CAF50 50%, #2196F3 75%, #9C27B0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              animation: "rainbow 4s linear infinite",
            }}
          >
            How Your Child Learns?
          </span>
        </Typography>
        <style>
          {`
            @keyframes rainbow {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
          `}
        </style>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ 
            fontFamily: "'Comic Neue', cursive", 
            color: "#444",
            mb: 8, 
            maxWidth: "700px", 
            mx: "auto",
            fontSize: {xs: "1rem", md: "1.1rem"},
            lineHeight: 1.7
          }}
        >
          We create a <span style={{ color: "#E91E63", fontWeight: "bold" }}>magical learning environment</span> that blends 
          <span style={{ color: "#FF9800", fontWeight: "bold" }}> fun</span>, 
          <span style={{ color: "#4CAF50", fontWeight: "bold" }}> creativity</span>, and 
          <span style={{ color: "#2196F3", fontWeight: "bold" }}> structured education</span>, 
          ensuring your child's development in an engaging and delightful way!
        </Typography>
      </motion.div>

      {/* Main Content Grid (Features + Image) */}
      <Grid container spacing={4} alignItems="center">
        {/* Features Grid (Left Side on Desktop) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    delay: feature.delay,
                    whileHover: { duration: 0.2 }
                  }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      p: 3,
                      borderRadius: "20px",
                      textAlign: "center",
                      background: feature.bgGradient,
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.3s",
                      border: "2px solid rgba(255,255,255,0.7)",
                      overflow: "visible",
                      position: "relative",
                      "&:hover": {
                        boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.12)",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        background: feature.avatarBg,
                        boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                        transform: "translateY(-40px)",
                        mb: -3,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ 
                          color: "#333", 
                          mb: 1.5,
                          fontFamily: "'Fredoka', cursive",
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "#555",
                          fontSize: "0.95rem",
                          fontFamily: "'Comic Neue', cursive",
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Image Section (Right Side on Desktop, Below on Mobile) */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }} 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.3,
              whileHover: { duration: 0.5 } 
            }}
          >
            <Box
              component="img"
              src="/kids.png"
              alt="Child Learning"
              sx={{
                width: { xs: "100%", sm: "80%", md: "500px" },
                height: "auto",
                borderRadius: "30px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                border: "8px solid white",
                transform: "rotate(-2deg)",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
