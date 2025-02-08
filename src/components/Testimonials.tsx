import { Box, Typography, Card, CardContent } from '@mui/material';

const testimonials = [
  { name: 'John Doe', review: 'Excellent school with caring teachers!' },
  { name: 'Jane Smith', review: 'My child loves going to school every day.' },
];

const Testimonials = () => {
  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        What Parents Say
      </Typography>
      {testimonials.map((testimonial, index) => (
        <Card sx={{ margin: '20px auto', maxWidth: '400px' }} key={index}>
          <CardContent>
            <Typography variant="body1">{testimonial.review}</Typography>
            <Typography variant="subtitle2" fontWeight="bold">
              - {testimonial.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Testimonials;
