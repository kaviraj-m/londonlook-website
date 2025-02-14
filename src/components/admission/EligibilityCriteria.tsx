import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const eligibilityData = [
  { grade: "LKG", age: "3 years & above", description: "Children must have completed 3 years by June 1st of the academic year." },
  { grade: "UKG", age: "4 years & above", description: "Basic understanding of letters, numbers, and social interaction is encouraged." },
  { grade: "1st Grade", age: "5 years & above", description: "Children should be familiar with early reading, writing, and numeracy skills." },
  { grade: "2nd Grade", age: "6 years & above", description: "Basic literacy, numeracy, and communication skills are required." },
  { grade: "3rd Grade", age: "7 years & above", description: "Students must demonstrate fundamental comprehension and writing skills." },
  { grade: "4th Grade", age: "8 years & above", description: "Proficiency in reading, basic mathematics, and logical reasoning is expected." },
  { grade: "5th Grade", age: "9 years & above", description: "A strong foundation in primary subjects and independent learning ability is necessary." }
];

export default function EligibilityCriteria() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" color="primary.dark" gutterBottom>
        Eligibility Criteria
      </Typography>
      <Typography variant="body1" textAlign="center" color="textSecondary" mb={4}>
        Below are the age and academic eligibility criteria for different grades at London Look School.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {eligibilityData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 6,
                textAlign: "center",
                p: 3,
                backgroundColor: "#f9f9f9",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)", boxShadow: 10 },
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight={700} color="primary" mb={1}>
                  {item.grade}
                </Typography>
                <Typography variant="body1" fontWeight={500} color="secondary" mb={1}>
                  {item.age}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
