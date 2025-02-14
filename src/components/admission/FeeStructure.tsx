import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Grid } from "@mui/material";

const feeDetails = [
  { category: "Admission Fees", amount: "₹10,000" },
  { category: "Tuition Fees (Annual)", amount: "₹40,000" },
  { category: "Transport Fees (Optional)", amount: "₹15,000" }
];

const scholarships = [
  { title: "Sibling Discount", description: "Get a 10% discount on tuition fees for the second child." },
  { title: "Early Admission Benefit", description: "Avail ₹5,000 off on admission fees for enrollments before March 31st." }
];

export default function FeeStructure() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Fee Structure Section */}
      <Typography variant="h3" fontWeight={700} textAlign="center" color="primary.dark" gutterBottom>
        Fee Structure
      </Typography>
      <Typography variant="body1" textAlign="center" color="textSecondary" mb={4}>
        Transparent fee details to ensure clarity in the admission process.
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 6, boxShadow: 4, borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feeDetails.map((fee, index) => (
              <TableRow key={index} sx={{ "&:hover": { backgroundColor: "#f9f9f9" } }}>
                <TableCell>{fee.category}</TableCell>
                <TableCell align="right">{fee.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Scholarships & Discounts Section */}
      <Typography variant="h3" fontWeight={700} textAlign="center" color="secondary.dark" gutterBottom>
        Scholarships & Discounts
      </Typography>
      <Typography variant="body1" textAlign="center" color="textSecondary" mb={4}>
        We offer special discounts for siblings and early admissions.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {scholarships.map((scholarship, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 5,
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)", boxShadow: 10 },
                flexGrow: 1
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight={700} color="primary">
                  {scholarship.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {scholarship.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
