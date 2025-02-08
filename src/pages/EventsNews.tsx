import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const events = [
  { date: 'March 10, 2025', title: 'Annual Day Celebration' },
  { date: 'April 15, 2025', title: 'Sports Day Event' },
];

const EventsNews = () => {
  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        School Events & News
      </Typography>
      <List>
        {events.map((event, index) => (
          <ListItem key={index}>
            <ListItemText primary={event.title} secondary={event.date} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EventsNews;
