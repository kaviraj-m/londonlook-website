import { Container, Typography, Card, CardContent, CardMedia, Box } from "@mui/material";

export default function PrincipalMessage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 3 } }}>
      <Typography 
        variant="h3" 
        fontWeight={700} 
        textAlign="center" 
        color="primary.dark" 
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          mb: { xs: 3, md: 4 }
        }}
      >
        Message from the Principal
      </Typography>
      <Box display="flex" justifyContent="center">
        <Card sx={{ 
          maxWidth: 800,
          display: { xs: 'block', sm: 'flex' },
          borderRadius: { xs: 2, sm: 3 },
          boxShadow: 5,
          transition: "0.3s",
          overflow: 'hidden',
          mx: { xs: 2, sm: 0 },
          '&:hover': { 
            boxShadow: 8,
            transform: { xs: 'none', sm: 'translateY(-4px)' }
          }
        }}>
          <CardMedia 
            component="img" 
            image="https://res.cloudinary.com/daom8i3k5/image/upload/v1740061777/Dr.R.SARAVANASELVI.Ph.D._PRINCIPAL_qkjfxj.jpg" 
            alt="Principal" 
            sx={{ 
              width: { xs: '100%', sm: 200 },
              height: { xs: 300, sm: 250 },
              objectFit: "cover",
              borderRadius: { 
                xs: '8px 8px 0 0',
                sm: '8px 0 0 8px'
              }
            }}
          />
          <CardContent sx={{ 
            p: { xs: 2.5, sm: 3 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1, sm: 1.5 }
          }}>
            <Typography 
              variant="h5" 
              fontWeight={700} 
              color="secondary.dark"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Dr.R.SARAVANASELVI.Ph.D
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="primary" 
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                textAlign: { xs: 'center', sm: 'left' },
                mb: { xs: 1, sm: 2 }
              }}
            >
              Principal, London Look School
            </Typography>
            <Typography 
              variant="body1" 
              color="textSecondary"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                lineHeight: 1.7,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              "At London Look School, we believe in nurturing young minds with excellence in education and values. Our goal is to create a dynamic learning environment that empowers students to reach their full potential. Together, let's build a bright future!"
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
