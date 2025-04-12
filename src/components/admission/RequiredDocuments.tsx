import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const requiredDocuments = [
  { name: "Birth Certificate", description: "Original and a photocopy of the child's birth certificate." },
  { name: "Passport-size Photos", description: "Recent passport-size photographs (4 copies)." },
  { name: "Aadhar Card", description: "Aadhar card of the student and parents (photocopy required)." },
  { name: "Previous School Report", description: "Report card from the last attended school (if applicable)." },
];

export default function RequiredDocuments() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" color="primary.dark" gutterBottom>
        Required Documents
      </Typography>
      <Typography variant="body1" textAlign="center" color="textSecondary" mb={4} sx={{ maxWidth: 600, mx: "auto" }}>
        Please ensure you have the following documents ready for a smooth admission process.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {requiredDocuments.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 6,
                backgroundColor: "#f9f9f9",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)", boxShadow: 10 },
                flexGrow: 1, // Makes all cards the same height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="h6" fontWeight={700}>{doc.name}</Typography>}
                      secondary={<Typography variant="body2" color="textSecondary">{doc.description}</Typography>}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
