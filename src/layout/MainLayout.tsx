import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box sx={{ minHeight: '80vh', padding: '20px' }}>{children}</Box>
      <Footer />
    </Box> 
  );
};

export default MainLayout;
