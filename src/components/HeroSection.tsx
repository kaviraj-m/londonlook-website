import React from "react";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import kidsImage from "../assets/kids.png"; // Ensure the path is correct
import waveBackground from "../assets/wave.svg"; // Added wave background

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "85vh",
        backgroundColor: "#FDE7A9",
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
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 2,
          textAlign: { xs: "center", md: "left" },
          paddingTop: { xs: 8, md: 12 }, // Increased top padding
        }}
      >
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            paddingBottom: 2,
          }}
        >
          Londonlook Nursery & Primary School
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#333",
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            lineHeight: 1.3,
          }}
        >
          Empowering students with a strong foundation in academics, creativity,
          and personal growth.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            color: "#555",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.7,
          }}
        >
          Discover a <strong>student-focused learning experience</strong> at our{" "}
          <strong>CBSE-certified institution</strong> in{" "}
          <strong>Rajagopalapuram, Pudukkottai</strong>. We nurture young minds
          with excellence, innovation, and compassion.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 4, alignItems: { xs: "center", md: "flex-start" } }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7B1FA2",
              "&:hover": { backgroundColor: "#6A1B9A" },
              fontWeight: "bold",
              fontSize: "1rem",
              padding: "12px 24px",
            }}
          >
            Enroll Now →
          </Button>

          <Button
            variant="outlined"
            startIcon={<PlayCircleFilledWhiteIcon />}
            sx={{
              color: "#333",
              borderColor: "#ccc",
              "&:hover": { backgroundColor: "#f5f5f5" },
              fontSize: "1rem",
              padding: "12px 24px",
            }}
          >
            Watch Video
          </Button>

          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              padding: "12px 24px",
              "&:hover": { backgroundColor: "#1EBB58" },
            }}
            href="https://wa.me/918300192051"
            target="_blank"
          >
            Chat on WhatsApp
          </Button>
        </Stack>
      </Container>

      {/* Right Image */}
      <Box
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
      >
        <img
          src={kidsImage}
          alt="Kids"
          style={{
            width: "100%",
            maxWidth: "90%", // Increased image size
            height: "auto",
            borderRadius: "20px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Wave Background */}
      <Box
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
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
