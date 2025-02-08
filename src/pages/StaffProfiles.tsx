import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const staff = [
  { name: 'Ms. Priya Sharma', subject: 'Mathematics' },
  { name: 'Mr. Rahul Kumar', subject: 'Science' },
];

const StaffProfiles = () => {
  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Meet Our Teachers
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {staff.map((teacher, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{teacher.name}</Typography>
                <Typography variant="body1">{teacher.subject}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StaffProfiles;
