import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Accesorios } from './pages/Accesorios';
import { Contacto } from './pages/Contacto';
import FAQ from './pages/FAQ';
import { Home } from './pages/Home';
import { Marcas } from './pages/Marcas';
import { Pinturas } from './pages/Pinturas';
import TerminosCondiciones from './pages/TerminosCondiciones';

function App() {
  return (
    <ShoppingCartProvider>
      <ScrollToTop />
      <Navbar />
      <Container className="mb-3" style={{ minHeight: '90vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pinturas" element={<Pinturas />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/terminos-y-condiciones"
            element={<TerminosCondiciones />}
          />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
