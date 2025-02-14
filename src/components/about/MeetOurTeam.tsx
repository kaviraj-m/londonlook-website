import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const teachers = [
  {
    name: "Mr. Aravind Kumar",
    role: "Mathematics Teacher",
    image: "https://img.freepik.com/free-photo/3d-render-little-schoolboy-with-book-eyeglasses_1057-44688.jpg",
    bio: "Expert in mathematics with 15+ years of experience, known for innovative teaching techniques."
  },
  {
    name: "Ms. Divya Ramesh",
    role: "Science Teacher",
    image: "https://cdn.vectorstock.com/i/500p/23/12/cute-teacher-young-woman-in-glasses-cartoon-vector-46392312.jpg",
    bio: "Passionate about science, making complex concepts simple through interactive experiments."
  },
  {
    name: "Mrs. Lakshmi Narayan",
    role: "English Teacher",
    image: "https://cdn.vectorstock.com/i/500p/23/12/cute-teacher-young-woman-in-glasses-cartoon-vector-46392312.jpg",
    bio: "Specialist in literature and communication, enhancing students' language skills with creative lessons."
  },
  {
    name: "Mr. Karthik Suresh",
    role: "Physical Education Trainer",
    image: "https://img.freepik.com/free-photo/3d-render-little-schoolboy-with-book-eyeglasses_1057-44688.jpg",
    bio: "Dedicated to fitness and sports, promoting teamwork and a healthy lifestyle."
  }
];

export default function MeetOurTeam() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" color="primary.dark" gutterBottom>
        Meet Our Team
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
        Our dedicated faculty ensures holistic development by fostering curiosity and excellence in students.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teachers.map((teacher, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 5, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
              <CardMedia component="img" height="260" image={teacher.image} alt={teacher.name} />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight={700} color="secondary.dark">
                  {teacher.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {teacher.role}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {teacher.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
