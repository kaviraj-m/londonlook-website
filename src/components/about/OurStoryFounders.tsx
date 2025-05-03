import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import { School, EmojiPeople, Stars, Favorite } from "@mui/icons-material";
import { motion } from "framer-motion";

// Import Google Fonts
import '@fontsource/bubblegum-sans';
import '@fontsource/fredoka';
import '@fontsource/patrick-hand';
import '@fontsource/baloo-2';
import '@fontsource/comic-neue';

const founder = {
  name: "Dr. K. Krishnamoorthy",
  role: "Founder & Chairperson",
  image: "https://res.cloudinary.com/daom8i3k5/image/upload/v1745428604/WhatsApp_Image_2025-04-23_at_16.52.21_2ed54a51_z8bodt.jpg",
  qualifications: "M.E., Ph.D."
};

export default function OurStoryFounders() {
  return (
    <Box 
      sx={{ 
        background: "linear-gradient(180deg, #FFF8E1 0%, #FFECB3 100%)",
        pt: 10,
        pb: 12,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative floating elements */}
      <Box
        component={motion.div}
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(233, 30, 99, 0.1)",
          top: "50px",
          left: "8%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{ 
          y: [0, 20, 0],
          x: [0, 15, 0, -15, 0],
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        sx={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(63, 81, 181, 0.1)",
          bottom: "80px",
          right: "10%",
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          textAlign="center" 
          mb={6}
        >
          <Typography 
            variant="h3" 
            fontWeight={700} 
            gutterBottom
            sx={{
              color: "#8E24AA",
              fontFamily: "'Fredoka', cursive",
              fontSize: { xs: '2rem', md: '2.5rem' },
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2
            }}
          >
            <Stars sx={{ 
              color: "#FFA000", 
              fontSize: { xs: 30, md: 40 },
              animation: "spin 3s infinite linear" 
            }}/>
            Our Story & Founders
            <Stars sx={{ 
              color: "#FFA000", 
              fontSize: { xs: 30, md: 40 },
              animation: "spin 3s infinite linear"
            }}/>
          </Typography>
          
          <Typography 
            variant="body1" 
            maxWidth="md" 
            margin="auto"
            sx={{
              color: "#5D4037",
              fontFamily: "'Comic Neue', cursive",
              fontSize: "1.1rem",
              background: "rgba(255, 255, 255, 0.6)",
              borderRadius: "20px",
              p: 2,
              border: "2px dashed #FFA000"
            }}
          >
            Established in Tamil Nadu, London Look School is committed to providing an innovative and nurturing environment.
            Our mission is to cultivate leaders who excel academically, ethically, and socially.
          </Typography>
        </Box>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{ 
            maxWidth: "900px", 
            mx: "auto", 
            mb: 8, 
            px: { xs: 2, md: 0 },
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "30px",
            p: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            border: "3px solid #FFC107",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Typography 
            variant="h3" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 4, 
              fontSize: { xs: '1.8rem', md: '2.2rem' }, 
              fontFamily: "'Fredoka', cursive",
              color: "#FF5722",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              position: "relative",
              zIndex: 1
            }}
          >
            <EmojiPeople sx={{ 
              color: "#FF5722",
              fontSize: 35,
              animation: "bounce 2s infinite" 
            }}/>
            Founder's Message
          </Typography>
          
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ py: 2 }}
          >
            {[
              "We believe that all children have a unique potential that needs to be encouraged and channeled, so that learning is continuous and lifelong. We understand that in order for children to succeed in today's highly complex and technologically powered world, children need a whole new set of skills to succeed in life.",
              "We strongly believe that each child has own Strength, which needs to be honed continuously to enhance a child's confident and sense of achievement. Our team understand what is necessary to excel in everything.",
              "We also believe that parents are our most important partners in paving the way for the successful path for a child. We always maintain the kind relationship with the parents.",
              "Thank you for trusting us with your children's education. We are honored to partner with you on this exciting journey."
            ].map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.2) }}
              >
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    fontSize: '1.1rem', 
                    lineHeight: 1.8, 
                    mb: 3, 
                    color: "#333", 
                    fontFamily: "'Comic Neue', cursive", 
                    textAlign: 'justify',
                    px: 2,
                  }}
                >
                  {paragraph}
                </Typography>
              </motion.div>
            ))}
            
            <Typography 
              variant="h6" 
              textAlign="right" 
              sx={{ 
                mt: 3, 
                fontFamily: "'Baloo 2', cursive", 
                fontWeight: 600, 
                mr: 2,
                fontStyle: "italic",
                color: "#8E24AA"
              }}
            >
              - {founder.name}
            </Typography>
          </Box>
        </Box>

        <Box 
          id="founder-profile"
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 4, 
              color: "#8E24AA", 
              fontSize: { xs: '1.8rem', md: '2.2rem' }, 
              fontFamily: "'Fredoka', cursive",
              fontWeight: "bold" 
            }}
          >
            About Our Founder
          </Typography>
          
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                sx={{ position: "relative" }}
              >
                <CardMedia
                  component="img"
                  image={founder.image}
                  alt={founder.name}
                  sx={{
                    width: { xs: "260px", md: "300px" },
                    height: { xs: "260px", md: "300px" },
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "5px solid #FFC107",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  }}
                />
                <Box 
                  component={motion.div}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    bgcolor: "#FFA000",
                    color: "white",
                    borderRadius: "50%",
                    width: 60,
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    border: "3px solid white",
                  }}
                >
                  <School fontSize="medium" />
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                sx={{ 
                  borderRadius: "20px", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  border: "3px solid #E1BEE7",
                  overflow: "hidden",
                  bgcolor: "rgba(255, 255, 255, 0.8)"
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                      color: "#6A1B9A",
                      fontFamily: "'Fredoka', cursive", 
                      fontSize: { xs: '1.6rem', md: '1.8rem' }, 
                      fontWeight: "bold" 
                    }}
                  >
                    {founder.name}
                  </Typography>
                  
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      mb: 2, 
                      color: "#AB47BC", 
                      fontFamily: "'Baloo 2', cursive", 
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    <Favorite sx={{ color: "#E91E63", fontSize: 20 }} />
                    {founder.role} <span style={{ fontWeight: 400, marginLeft: 5 }}>({founder.qualifications})</span>
                  </Typography>
                  
                  {[
                    "Dr. K. Krishnamoorthy is a distinguished educator with extensive experience in the field of education and school administration.",
                    "Driven by a vision to transform education in the region, he established London Look School to provide quality education that combines academic excellence with character development.",
                    "His dedication to innovative teaching methods and holistic development of students has shaped the school's educational philosophy."
                  ].map((paragraph, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.1 + (index * 0.2) }}
                    >
                      <Typography 
                        variant="body1" 
                        paragraph 
                        sx={{ 
                          mb: 2, 
                          lineHeight: 1.7, 
                          fontFamily: "'Comic Neue', cursive",
                          color: "#424242" 
                        }}
                      >
                        {paragraph}
                      </Typography>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      {/* Animation keyframes */}
      <Box
        sx={{
          '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' }
          },
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' }
          }
        }}
      />
    </Box>
  );
}
