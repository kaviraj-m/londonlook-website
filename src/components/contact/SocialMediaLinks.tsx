import { Stack, IconButton, Typography, Box } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export default function SocialMediaLinks() {
  return (
    <Box sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
        Follow Us on Social Media
      </Typography>
      <Stack direction="row" spacing={4} justifyContent="center">
        <IconButton 
          href="https://facebook.com" 
          target="_blank" 
          sx={{ 
            bgcolor: "#3b5998", 
            color: "#fff", 
            "&:hover": { bgcolor: "#2d4373" } 
          }}
        >
          <Facebook fontSize="large" />
        </IconButton>
        <IconButton 
          href="https://instagram.com" 
          target="_blank" 
          sx={{ 
            bgcolor: "#E1306C", 
            color: "#fff", 
            "&:hover": { bgcolor: "#C13584" } 
          }}
        >
          <Instagram fontSize="large" />
        </IconButton>
        <IconButton 
          href="https://wa.me/9442314351" 
          target="_blank" 
          sx={{ 
            bgcolor: "#25D366", 
            color: "#fff", 
            "&:hover": { bgcolor: "#128C7E" } 
          }}
        >
          <WhatsApp fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}
