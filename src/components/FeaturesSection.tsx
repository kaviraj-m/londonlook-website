import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BrushIcon from "@mui/icons-material/Brush";

const features = [
  {
    icon: <SportsEsportsIcon fontSize="large" color="primary" />,
    title: "Interactive Learning",
    description: "Engaging games that make learning fun and effective.",
    bgColor: "#F5F5F5",
  },
  {
    icon: <RestaurantIcon fontSize="large" color="secondary" />,
    title: "Healthy Meals",
    description: "Nutritious, carefully curated meals for kids' well-being.",
    bgColor: "#FFF3E0",
  },
  {
    icon: <SchoolIcon fontSize="large" color="info" />,
    title: "Expert Educators",
    description: "Passionate and experienced teachers for your child’s future.",
    bgColor: "#E3F2FD",
  },
  {
    icon: <BrushIcon fontSize="large" color="success" />,
    title: "Creative Activities",
    description: "Art and craft-based learning to boost creativity.",
    bgColor: "#E8F5E9",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#FFFFFF",
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          left: "10%",
          width: "200px",
          height: "200px",
          bgcolor: "rgba(255, 87, 34, 0.05)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          right: "10%",
          width: "150px",
          height: "150px",
          bgcolor: "rgba(76, 175, 80, 0.05)",
          borderRadius: "50%",
        }}
      />

      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={2}
        sx={{ fontFamily: "Poppins, sans-serif", color: "#333" }}
      >
        How Your Child <span style={{ color: "#FF5722" }}>Learns?</span>
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ fontFamily: "Poppins, sans-serif", color: "#666", mb: 6, maxWidth: "600px", mx: "auto" }}
      >
        We create a learning environment that blends fun, creativity, and structured education, 
        ensuring your child's development in an engaging way.
      </Typography>

      {/* Main Content Grid (Features + Image) */}
      <Grid container spacing={4} alignItems="center">
        {/* Features Grid (Left Side on Desktop) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
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
                      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.05)",
                      backgroundColor: feature.bgColor,
                      transition: "all 0.3s",
                      "&:hover": {
                        boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    {feature.icon}
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "#333", mb: 1 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
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
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Box
              component="img"
              src="/kids.png"
              alt="Child Learning"
              sx={{
                width: { xs: "100%", sm: "80%", md: "500px" },
                height: "auto",
                borderRadius: "20px",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
