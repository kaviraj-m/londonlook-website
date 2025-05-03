import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import VirtualTour from "../components/VirtualTour";
import { Box } from "@mui/material";
import Infrastructure from "../components/Infrastructure";
import ProgramsOffered from "../components/ProgramsOffered";
import AboutSchool from "../components/AboutSchool";

const Home = () => {
  return (
    <Box 
      sx={{ 
        overflowX: "hidden", 
        maxWidth: "100vw",
        position: "relative",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `
            radial-gradient(circle at 10% 10%, rgba(255, 0, 0, 0.03) 25%, transparent 25%),
            radial-gradient(circle at 30% 25%, rgba(0, 255, 0, 0.03) 25%, transparent 25%),
            radial-gradient(circle at 55% 40%, rgba(0, 0, 255, 0.03) 25%, transparent 25%),
            radial-gradient(circle at 80% 15%, rgba(255, 255, 0, 0.03) 25%, transparent 25%),
            radial-gradient(circle at 90% 70%, rgba(255, 0, 255, 0.03) 25%, transparent 25%),
            radial-gradient(circle at 20% 85%, rgba(0, 255, 255, 0.03) 25%, transparent 25%)
          `,
          backgroundSize: "20% 20%, 30% 30%, 25% 25%, 40% 40%, 30% 30%, 35% 35%",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0",
          backgroundRepeat: "repeat",
          opacity: 0.7,
          zIndex: -1,
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
          zIndex: -1,
          pointerEvents: "none",
        }
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "5%",
          left: "2%",
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "#FF5252",
          animation: "float 8s ease-in-out infinite",
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: "80%",
          left: "15%",
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          backgroundColor: "#FFD740",
          animation: "float 12s ease-in-out infinite 1s",
          zIndex: 0,
          opacity: 0.5,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: "30%",
          right: "10%",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#2196F3",
          animation: "float 10s ease-in-out infinite 2s",
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: "15%",
          right: "20%",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          backgroundColor: "#4CAF50",
          animation: "float 9s ease-in-out infinite 0.5s",
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-15px) translateX(15px); }
            50% { transform: translateY(0) translateX(30px); }
            75% { transform: translateY(15px) translateX(15px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `}
      </style>
      
      <HeroSection />
      <FeaturesSection />
      <AboutSchool/>
      <ProgramsOffered/>
      <Infrastructure/>
      <VirtualTour />
    </Box>
  );
};

export default Home;
