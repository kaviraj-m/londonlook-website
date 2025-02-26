import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";

const teachers = [
  {
    name: "B. Madhumitha",
    role: "Science and Mathematics Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740592978/B._Madhumitha_science_And_maths_teacher_3_yrs_experience_yq9tbp.jpg",
    bio: "3 years of experience in teaching Science and Mathematics."
  },
  {
    name: "Amudha",
    role: "Hindi Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740592977/Amudha._Hindi_teacher_10_yrs_experience_gders2.jpg",
    bio: "10 years of experience in teaching Hindi language."
  },
  {
    name: "K. Annalaakshmi",
    role: "English Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740593025/K._Annalaakshmi_English_teacher_3_yrs_experience_u8aben.jpg",
    bio: "3 years of experience in teaching English."
  },
  {
    name: "Banumathi",
    role: "Tamil & Kindergarten Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740593005/Banumathi_Tamil_teacher_Kg_teacher_4_yrs_experience_of_handling_kinder_garden_students_qn0bhn.jpg",
    bio: "4 years of experience in handling kindergarten students and teaching Tamil."
  },
  {
    name: "Abinaya",
    role: "Yoga & Physical Education Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740593098/Abinaya_yoga_and_physical_education_teacher_sqyyxc.jpg",
    bio: "Specialized in yoga and physical education for holistic development."
  },
  {
    name: "M. Ananthi",
    role: "English Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740593067/M.Ananthi_English_teacher_7_yrs_of_experience_wktdxw.jpg",
    bio: "7 years of experience in teaching English."
  },
  {
    name: "K. Amirdhavalli",
    role: "Tamil & Social Teacher",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740592977/K._Amirdhavalli_Tamil_teacher_and_social_teacher_2_yrs_experience_yrx0xq.jpg",
    bio: "2 years of experience in teaching Tamil and Social Studies."
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
      <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
        {teachers.map((teacher, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ 
              borderRadius: { xs: 2, sm: 3 }, 
              boxShadow: 5, 
              height: '100%',
              maxWidth: { xs: '300px', sm: 'none' },
              mx: { xs: 'auto', sm: 0 },
              transition: '0.3s', 
              '&:hover': { 
                boxShadow: 8,
                transform: { xs: 'none', sm: 'translateY(-8px)' }
              } 
            }}>
              <Box sx={{ 
                position: 'relative', 
                paddingTop: { xs: '100%', sm: '125%' }  // Square aspect ratio for mobile
              }}>
                <CardMedia 
                  component="img" 
                  image={teacher.image} 
                  alt={teacher.name}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <CardContent sx={{ 
                textAlign: "center",
                p: { xs: 1.5, sm: 2.5 }
              }}>
                <Typography 
                  variant="h6" 
                  fontWeight={700} 
                  color="secondary.dark"
                  sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
                >
                  {teacher.name}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="primary" 
                  gutterBottom
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                >
                  {teacher.role}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="textSecondary"
                  sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                >
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
