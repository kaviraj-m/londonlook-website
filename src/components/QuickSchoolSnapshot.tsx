import { Box, Grid, Paper, Typography } from '@mui/material';

const QuickSchoolSnapshot = () => {
  const highlights = [
    { title: 'Grades', value: 'Kindergarten to 5th Grade' },
    { title: 'Teachers', value: '20+ Experienced Staff' },
    { title: 'Students', value: '500+ Enrolled' },
    { title: 'Facilities', value: 'Smart Classrooms, Play Area' },
  ];

  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Quick School Snapshot
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {highlights.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">{item.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickSchoolSnapshot;
