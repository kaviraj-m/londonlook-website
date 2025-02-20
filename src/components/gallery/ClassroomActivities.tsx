import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const activities = [
  {
    title: "Role Playing",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740044572/Role_playing_sashlh.jpg",
    description: "Developing confidence and communication skills through creative dramatic play and storytelling activities."
  },
  {
    title: "Yoga & Meditation",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740062079/Extra_curricular_Activity_Yoga_wznpoq.jpg",
    description: "Promoting physical and mental well-being through yoga and mindfulness practices."
  },
  {
    title: "Creative Art Activities",
    image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1740047428/Colouring_activity_for_Kg_students_i3unwi.jpg",
    description: "Nurturing artistic expression through coloring and creative activities."
  },
  {
    title: "Interactive Learning",
    image: "https://www.springboardsupplies.co.uk/cdn/shop/articles/pexels-yan-krukov-8612990_800x.jpg?v=1627557564",
    description: "Smart classrooms with digital learning tools for interactive lessons."
  },
  {
    title: "Group Projects",
    image: "https://www.springboardsupplies.co.uk/cdn/shop/articles/pexels-yan-krukov-8612990_800x.jpg?v=1627557564",
    description: "Collaborative projects to build teamwork and problem-solving skills."
  }
];

export default function ClassroomActivities() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom fontWeight={700} textAlign="center" color="primary.dark">
        Classroom Activities
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={4} sx={{ px: 2 }}>
        Our classrooms are filled with engaging activities that promote creativity, teamwork, and interactive learning.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {activities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 5, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
              <CardMedia component="img" height="220" image={activity.image} alt={activity.title} />
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="secondary.dark">
                  {activity.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {activity.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
