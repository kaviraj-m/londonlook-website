import { Box, Typography, Container, Paper, Avatar } from "@mui/material";
import { School } from "@mui/icons-material";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

export default function PrincipalMessage() {
  return (
    <Box sx={{ 
      py: 6, 
      background: "linear-gradient(180deg, #F3E5F5 0%, #EDE7F6 100%)",
      borderRadius: { xs: '0', md: '25px' },
      margin: { xs: 0, md: 4 }
    }}>
      <Container maxWidth="md">
        {/* Header */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "#673AB7",
            fontFamily: "'Fredoka', cursive",
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            fontWeight: "bold",
            mb: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1
          }}
        >
          <School sx={{ color: "#673AB7" }} /> 
          Message from the Principal 
          <School sx={{ color: "#673AB7" }} />
        </Typography>

        {/* Main Card */}
        <Paper
          elevation={3}
          sx={{
            maxWidth: "800px",
            mx: "auto",
            borderRadius: "16px",
            overflow: "hidden",
            border: "2px solid #D1C4E9",
            background: "white"
          }}
        >
          {/* Principal Image and Info Section - Completely Separate */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              p: 3,
              pb: 4,
              borderBottom: "2px dashed #D1C4E9"
            }}
          >
            {/* Principal Image in a small bordered circle */}
            <Box
              sx={{
                position: "relative",
                mb: 2,
                mt: 1
              }}
            >
              <Avatar
                src="https://res.cloudinary.com/daom8i3k5/image/upload/v1740061777/Dr.R.SARAVANASELVI.Ph.D._PRINCIPAL_qkjfxj.jpg"
                alt="Principal"
                sx={{
                  width: 240,
                  height: 240,
                  border: "5px solid #9C27B0",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.25)"
                }}
              />
              
              {/* "Our Principal" Label */}
              <Box
                sx={{
                  position: "absolute",
                  top: -15,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#673AB7",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  zIndex: 1,
                  fontFamily: "'Bubblegum Sans', cursive",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                }}
              >
                Our Principal
              </Box>
            </Box>
            
            {/* Principal Name and Title */}
            <Typography
              variant="h6"
              sx={{
                color: "#673AB7",
                fontFamily: "'Fredoka', cursive",
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.3rem" },
                mb: 0.5
              }}
            >
              Dr.R.SARAVANASELVI.Ph.D
            </Typography>
            
            <Typography
              variant="subtitle1"
              sx={{
                color: "#9C27B0",
                fontFamily: "'Baloo 2', cursive",
                fontSize: { xs: "0.9rem", sm: "1rem" }
              }}
            >
              Principal, London Look School
            </Typography>
          </Box>

          {/* Message Section - Completely Separate */}
          <Box sx={{ p: { xs: 3, sm: 4 } }}>
            {/* Message Quote Box */}
            <Box
              sx={{
                border: "2px dashed #9C27B0",
                borderRadius: "12px",
                p: { xs: 2, sm: 3 },
                position: "relative",
                backgroundColor: "rgba(243, 229, 245, 0.3)"
              }}
            >
              {/* Quote marks */}
              <Typography 
                sx={{ 
                  position: "absolute",
                  top: -25, 
                  left: 15, 
                  color: "#9C27B0", 
                  fontSize: "4rem",
                  fontFamily: "serif",
                  lineHeight: 1
                }}
              >
                "
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: "#673AB7",
                  fontFamily: "'Comic Neue', cursive",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  position: "relative",
                  zIndex: 1,
                  textAlign: "center"
                }}
              >
                "At London Look School, we believe in nurturing young minds with excellence in education and values. Our goal is to create a dynamic learning environment that empowers students to reach their full potential. Together, let's build a bright future!"
              </Typography>
              
              <Typography 
                sx={{ 
                  position: "absolute",
                  bottom: -45, 
                  right: 15, 
                  color: "#9C27B0", 
                  fontSize: "4rem",
                  fontFamily: "serif",
                  lineHeight: 1
                }}
              >
                "
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
