import React from "react";
import { Box, Typography, Container } from "@mui/material";

const VirtualTour: React.FC = () => {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        background: "linear-gradient(135deg, #f9f9f9 0%, #eef2f3 100%)",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#2C3E50"
          gutterBottom
          sx={{ letterSpacing: "0.5px" }}
        >
          🎥 Explore London Look School
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ mb: 4, px: 2, maxWidth: "700px", mx: "auto" }}
        >
          Take a virtual tour of our school and experience the learning
          environment firsthand. Watch this video to see how we blend fun,
          creativity, and structured education to nurture your child's growth.
        </Typography>

        {/* ✅ Video Container - Responsive and Styled */}
        <Box
          sx={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            borderRadius: "15px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
            mx: "auto",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/f8ZpmdqU0lg?si=MeCJDYRih7HHtGY7"
            title="London Look School Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "15px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default VirtualTour;
