import { Container, Typography, Card, CardContent, Stack, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function OfficeHours() {
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
          Office Hours
        </Typography>

        <Card sx={{ borderRadius: 3, boxShadow: 7, overflow: "hidden", p: 4 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Stack spacing={3} alignItems="center">

              {/* School Timings */}
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  "&:hover": { color: "#512DA8" },
                }}
              >
                <CalendarTodayIcon fontSize="large" color="primary" />
                <Typography variant="h6" fontWeight={600}>
                  <strong>Monday - Saturday</strong>
                  <br />
                  School Hours: <span style={{ fontWeight: 500 }}>8:30 AM - 3:30 PM</span>
                </Typography>
              </Stack>

              {/* Office Timings */}
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center" 
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  "&:hover": { color: "#303F9F" },
                }}
              >
                <AccessTimeIcon fontSize="large" color="secondary" />
                <Typography variant="h6" fontWeight={600}>
                  Office Hours: <span style={{ fontWeight: 500 }}>9:00 AM - 5:00 PM</span>
                </Typography>
              </Stack>

            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
