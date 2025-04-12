import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
