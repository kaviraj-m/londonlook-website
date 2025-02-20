import { Container, Typography, Card, CardContent, Stack, IconButton, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactInformation() {
  return (
    <Box 
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
        py: 10,
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
          sx={{ 
            mb: 4,
            fontSize: { xs: '2rem', md: '2.5rem' },
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              backgroundColor: 'primary.main',
              margin: '15px auto',
              borderRadius: '2px'
            }
          }}
        >
          Get in Touch
        </Typography>

        <Card 
          sx={{ 
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            overflow: "hidden",
            p: 4,
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.15)'
            }
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Stack spacing={4} alignItems="center">
              
              {/* Phone Number */}
              <Stack 
                direction="row" 
                spacing={3} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(25, 118, 210, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    transform: 'translateX(10px)'
                  }
                }}
              >
                <IconButton 
                  color="primary" 
                  href="tel:9442314351" 
                  sx={{ 
                    backgroundColor: "#e3f2fd",
                    p: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(15deg)'
                    }
                  }}
                >
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
                spacing={3} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(67, 160, 71, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(67, 160, 71, 0.1)',
                    transform: 'translateX(10px)'
                  }
                }}
              >
                <IconButton 
                  color="success" 
                  href="https://wa.me/9442314351" 
                  target="_blank" 
                  sx={{ 
                    backgroundColor: "#e8f5e9",
                    p: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(15deg)'
                    }
                  }}
                >
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
                spacing={3} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(211, 47, 47, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(211, 47, 47, 0.1)',
                    transform: 'translateX(10px)'
                  }
                }}
              >
                <IconButton 
                  color="secondary" 
                  href="mailto:info@londonlookschool.com" 
                  sx={{ 
                    backgroundColor: "#fce4ec",
                    p: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(15deg)'
                    }
                  }}
                >
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
