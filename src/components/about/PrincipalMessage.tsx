import { Container, Typography, Card, CardContent, CardMedia, Box } from "@mui/material";

export default function PrincipalMessage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" color="primary.dark" gutterBottom>
        Message from the Principal
      </Typography>
      <Box display="flex" justifyContent="center">
        <Card sx={{ maxWidth: 800, display: "flex", borderRadius: 3, boxShadow: 5, transition: "0.3s", '&:hover': { boxShadow: 8 } }}>
          <CardMedia 
            component="img" 
            image="https://cdn.creazilla.com/cliparts/3742107/school-principal-clipart-xl.png" 
            alt="Principal" 
            sx={{ width: 200, height: 250, objectFit: "cover", borderRadius: "8px 0 0 8px" }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight={700} color="secondary.dark">
              Dr. S. Ramachandran
            </Typography>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Principal, London Look School
            </Typography>
            <Typography variant="body1" color="textSecondary">
              "At London Look School, we believe in nurturing young minds with excellence in education and values. Our goal is to create a dynamic learning environment that empowers students to reach their full potential. Together, let's build a bright future!"
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
