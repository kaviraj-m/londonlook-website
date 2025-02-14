import { Container, Typography, Card, CardContent, Stack, IconButton, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactInformation() {
  return (
    <Box 
      sx={{
        background: "fff",
        py: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography 
          variant="h3" 
          fontWeight={700} 
          textAlign="center" 
          color="primary.dark" 
          gutterBottom
          sx={{ mb: 3 }}
        >
          Contact Information
        </Typography>

        <Card sx={{ borderRadius: 3, boxShadow: 7, overflow: "hidden", p: 4 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Stack spacing={4} alignItems="center">
              
              {/* Phone Number */}
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  "&:hover a": { color: "#1976D2" },
                }}
              >
                <IconButton color="primary" href="tel:9442314351" sx={{ backgroundColor: "#e3f2fd", p: 2 }}>
                  <PhoneIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                  <a href="tel:9442314351" style={{ textDecoration: "none", color: "inherit" }}>
                    +91 94423 14351
                  </a>
                </Typography>
              </Stack>

              {/* WhatsApp */}
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  "&:hover a": { color: "#43A047" },
                }}
              >
                <IconButton color="success" href="https://wa.me/9442314351" target="_blank" sx={{ backgroundColor: "#e8f5e9", p: 2 }}>
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                  <a href="https://wa.me/9442314351" style={{ textDecoration: "none", color: "inherit" }}>
                    Chat on WhatsApp
                  </a>
                </Typography>
              </Stack>

              {/* Email */}
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  "&:hover a": { color: "#D32F2F" },
                }}
              >
                <IconButton color="secondary" href="mailto:info@londonlookschool.com" sx={{ backgroundColor: "#fce4ec", p: 2 }}>
                  <EmailIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                  <a href="mailto:info@londonlookschool.com" style={{ textDecoration: "none", color: "inherit" }}>
                    info@londonlookschool.com
                  </a>
                </Typography>
              </Stack>

            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
