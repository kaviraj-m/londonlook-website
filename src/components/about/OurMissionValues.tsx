import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { School, Gavel, Lightbulb, Favorite } from "@mui/icons-material";

const missionValues = [
  {
    title: "Academic Excellence",
    description: "We strive to provide a rigorous and innovative curriculum that fosters intellectual growth.",
    icon: <School fontSize="large" color="primary" />,
  },
  {
    title: "Discipline",
    description: "Discipline is the foundation of success. We instill self-control, respect, and responsibility.",
    icon: <Gavel fontSize="large" color="secondary" />,
  },
  {
    title: "Creativity",
    description: "Encouraging students to think outside the box and develop innovative problem-solving skills.",
    icon: <Lightbulb fontSize="large" sx={{ color: "orange" }} />,
  },
  {
    title: "Moral Values",
    description: "Instilling honesty, kindness, and ethical behavior to create responsible citizens.",
    icon: <Favorite fontSize="large" sx={{ color: "red" }} />,
  }
];

export default function OurMissionValues() {
  return (
    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      px: { xs: 2, sm: 3, md: 4 },
      backgroundColor: "#ffffff",
      backgroundImage: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
      borderRadius: { xs: '0', md: '16px' },
      margin: { xs: 0, md: 4 },
      boxShadow: { xs: 'none', md: '0 4px 20px rgba(0,0,0,0.05)' }
    }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "#2C3E50",
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            mb: { xs: 3, md: 4 },
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: { xs: '60px', md: '80px' },
              height: '4px',
              background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
              borderRadius: '2px'
            }
          }}
        >
          Our Mission & Values
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{
            textAlign: "center",
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            mb: { xs: 5, md: 7 },
            mt: { xs: 4, md: 5 },
            fontSize: { xs: '0.95rem', sm: '1.1rem' },
            lineHeight: 1.8,
            px: { xs: 2, md: 0 }
          }}
        >
          Our school is committed to fostering academic excellence, discipline, creativity, and strong moral values.
        </Typography>
        <Grid 
          container 
          spacing={{ xs: 2.5, sm: 3, md: 4 }} 
          sx={{
            width: '100%',
            margin: '0 auto',
            px: { xs: 1.5, sm: 2 },
            '& .MuiGrid-item': {
              mb: { xs: 2.5, sm: 3 }
            }
          }}
        >
          {missionValues.map((value, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={index}
              sx={{
                display: 'flex',
                '&:last-child': {
                  mb: { xs: 0, sm: 3 }
                }
              }}
            >
              <Card sx={{ 
                width: '100%',
                minHeight: { xs: '220px', sm: '250px' },
                p: { xs: 2.5, sm: 3 },
                display: 'flex',
                flexDirection: 'column',
                textAlign: "center",
                borderRadius: { xs: 2.5, md: 3 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid rgba(0,0,0,0.08)',
                transition: "all 0.3s ease",
                mx: { xs: 1, sm: 0 },
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                "&:hover": { 
                  transform: { xs: 'translateY(-4px)', md: "translateY(-8px)" },
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  '& .icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                  }
                }
              }}>
                <Box 
                  className="icon"
                  sx={{ 
                    display: "flex", 
                    justifyContent: "center",
                    alignItems: "center",
                    mb: { xs: 2, md: 2.5 },
                    transition: 'transform 0.3s ease',
                    '& svg': {
                      fontSize: { xs: '2.5rem', sm: '2.8rem', md: '3rem' },
                      filter: 'drop-shadow(0 3px 4px rgba(0,0,0,0.1))'
                    }
                  }}
                >
                  {value.icon}
                </Box>
                <CardContent sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: { xs: 1.5, md: 2 },
                  p: { xs: 1.5, sm: 2 },
                  '&:last-child': { pb: { xs: 2, sm: 2.5 } }
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      color: '#2C3E50',
                      fontSize: { xs: '1.15rem', sm: '1.25rem' },
                      mb: { xs: 1, md: 1.5 }
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      lineHeight: 1.6,
                      px: { xs: 0.5, sm: 0 }
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
