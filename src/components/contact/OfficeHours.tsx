import { Container, Typography, Card, CardContent, Stack, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function OfficeHours() {
  return (
    <Box 
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
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
          sx={{ mb: 4 }}
        >
          School Timings
        </Typography>

        <Card sx={{ borderRadius: 3, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", p: 4 }}>
          <CardContent>
            <Stack spacing={4} alignItems="center">
              {/* Office Timings */}
              <Stack 
                direction="row" 
                spacing={3} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(0,0,0,0.02)",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    backgroundColor: "rgba(0,0,0,0.04)",
                    transform: "translateY(-2px)" 
                  },
                }}
              >
                <AccessTimeIcon fontSize="large" color="secondary" />
                <Box>
                  <Typography variant="h6" fontWeight={700} color="secondary.dark" gutterBottom>
                    Office Hours
                  </Typography>
                  <Typography variant="subtitle1">
                    8:30 AM - 6:00 PM (Monday to Saturday)
                  </Typography>
                </Box>
              </Stack>

              {/* Primary School (1st to 5th) */}
              <Stack 
                direction="row" 
                spacing={3} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(0,0,0,0.02)",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    backgroundColor: "rgba(0,0,0,0.04)",
                    transform: "translateY(-2px)" 
                  },
                }}
              >
                <CalendarTodayIcon fontSize="large" color="primary" />
                <Box>
                  <Typography variant="h6" fontWeight={700} color="primary.dark" gutterBottom>
                    Classes I to V
                  </Typography>
                  <Typography variant="subtitle1">
                    9:30 AM - 4:00 PM (Monday to Saturday)
                  </Typography>
                </Box>
              </Stack>

              {/* Kindergarten */}
              <Stack 
                direction="row" 
                spacing={3} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(0,0,0,0.02)",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    backgroundColor: "rgba(0,0,0,0.04)",
                    transform: "translateY(-2px)" 
                  },
                }}
              >
                <CalendarTodayIcon fontSize="large" color="primary" />
                <Box>
                  <Typography variant="h6" fontWeight={700} color="primary.dark" gutterBottom>
                    Pre-KG, LKG & UKG
                  </Typography>
                  <Typography variant="subtitle1">
                    9:30 AM - 2:30 PM (Monday to Saturday)
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}