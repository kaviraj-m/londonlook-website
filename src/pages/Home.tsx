import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";
import VirtualTour from "../components/VirtualTour";
import { Box } from "@mui/material";
import Infrastructure from "../components/Infrastructure";
import ProgramsOffered from "../components/ProgramsOffered";
import AboutSchool from "../components/AboutSchool";

const Home = () => {
  return (
    <Box sx={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <HeroSection />
      <FeaturesSection />
      <AboutSchool/>
      <ProgramsOffered/>
      <Infrastructure/>
      <Testimonials />
      <VirtualTour />
    </Box>
  );
};

export default Home;
