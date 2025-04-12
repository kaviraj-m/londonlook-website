import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";

const founder = {
  name: "Dr. K. Krishnamoorthy",
  role: "Founder & Chairperson",
  image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1742960830/Screenshot_2025-03-26_091420_zqcexp.png",
  qualifications: "M.E., Ph.D."
};

export default function OurStoryFounders() {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" fontWeight={700} color="primary.dark" gutterBottom>
          Our Story & Founders
        </Typography>
        <Typography variant="body1" color="textSecondary" maxWidth="md" margin="auto">
          Established in Tamil Nadu, London Look School is committed to providing an innovative and nurturing environment.
          Our mission is to cultivate leaders who excel academically, ethically, and socially.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: "900px", mx: "auto", mb: 8, px: { xs: 2, md: 0 } }}>
        <Typography variant="h3" fontWeight={700} color="#000" gutterBottom align="left" sx={{ mb: 5, fontSize: { xs: '1.8rem', md: '2.2rem' }, fontFamily: '"Times New Roman", serif' }}>
          Founder's Message
        </Typography>
        
        <Box sx={{ py: 2 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, color: "#333", fontFamily: '"Times New Roman", serif', textAlign: 'justify' }}>
            We believe that all children have a unique potential that needs to be encouraged and channeled, so that learning is continuous and lifelong. We understand that in order for children to succeed in today's highly complex and technologically powered world, children need a whole new set of skills to succeed in life.
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, color: "#333", fontFamily: '"Times New Roman", serif', textAlign: 'justify' }}>
            We strongly believe that each child has own Strength, which needs to be honed continuously to enhance a child's confident and sense of achievement. Our team understand what is necessary to excel in everything.
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, color: "#333", fontFamily: '"Times New Roman", serif', textAlign: 'justify' }}>
            We also believe that parents are our most important partners in paving the way for the successful path for a child. We always maintain the kind relationship with the parents.
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 6, color: "#333", fontFamily: '"Times New Roman", serif', textAlign: 'justify' }}>
            Thank you for trusting us with your children's education. We are honored to partner with you on this exciting journey.
          </Typography>
          
          <Typography variant="h6" fontWeight={700} color="#000" sx={{ mt: 5, mb: 1, fontFamily: '"Times New Roman", serif' }}>
            Dr.K.KRISHNAMOORTHY,M.E.,Ph.D.,
          </Typography>
          
          <Typography variant="subtitle1" color="#555" sx={{ fontWeight: 500, fontFamily: '"Times New Roman", serif' }}>
            Founder & Chairperson
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
              borderRadius: 3, 
              boxShadow: 5, 
              transition: '0.3s', 
              '&:hover': { boxShadow: 10, transform: 'scale(1.05)' } 
            }}
          >
            <CardMedia component="img" height="280" image={founder.image} alt={founder.name} />
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="secondary.dark">
                {founder.name}
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                {founder.role}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Qualifications: {founder.qualifications}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
