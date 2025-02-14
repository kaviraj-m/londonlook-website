import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        overflowX: "hidden", 
        maxWidth: "100vw",  
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
