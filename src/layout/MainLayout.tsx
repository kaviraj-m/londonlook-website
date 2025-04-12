import { Box, CssBaseline } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo(0, 0);
    
    // Apply smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = "";
    };
  }, [pathname]);

  return (
    <Box
      sx={{
        overflowX: "hidden", 
        maxWidth: "100vw",
      }}
    >
      <CssBaseline />
      <Header />
      <Box 
        sx={{ 
          flexGrow: 1,
          // Add padding top to account for the fixed header
          pt: { xs: '70px', sm: '80px', md: '90px' },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
