import { Container, Typography, Card, CardContent, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkIcon from "@mui/icons-material/Link";

export default function SchoolAddress() {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" color="primary.dark" gutterBottom>
        School Address & Google Map
      </Typography>

      <Card sx={{ borderRadius: 3, boxShadow: 5, overflow: "hidden", maxWidth: "100%", mx: "auto" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.330410000192!2d78.827164975922!3d10.266086889534532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa3d07b91f61e9%3A0x29b3e09d7c2c4f2a!2sRajagopalapuram%2C%20Pudukkottai%2C%20Tamil%20Nadu%20622003!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

        <CardContent sx={{ textAlign: "center", p: 3 }}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h5" fontWeight={600}>
              London Look School, Tamil Nadu
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
              <LocationOnIcon color="primary" />
              <Typography variant="body1" color="textSecondary">
                9RF4+38F, Ramanathapuram Rd, Rajagopalapuram, Kavinad West, Tamil Nadu 622003
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
              <PhoneIcon color="primary" />
              <Typography variant="body1" color="textSecondary">
                094423 14351
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
              <LinkIcon color="primary" />
              <Typography
                variant="body1"
                color="primary"
                component="a"
                href="https://g.co/kgs/kVfdYQj"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none", fontWeight: 500 }}
              >
                View on Google Maps
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
