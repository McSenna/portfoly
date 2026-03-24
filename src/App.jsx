import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar           from './components/layout/Navbar';
import Footer           from './components/layout/Footer';
import Home             from './pages/Home';
import useTheme         from './hooks/useTheme';
import useParticleCanvas from './hooks/useParticleCanvas';
import useCursor        from './hooks/useCursor';

const App = () => {
  const { isLight, toggleTheme } = useTheme();
  useParticleCanvas();
  useCursor();

  return (
    <BrowserRouter>
      <Navbar isLight={isLight} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
