import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Accesorios } from './pages/Accesorios';
import { Contacto } from './pages/Contacto';
import { Herramientas } from './pages/Herramientas';
import { Home } from './pages/Home';
import { Marcas } from './pages/Marcas';
import { Pinturas } from './pages/Pinturas';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pinturas" element={<Pinturas />} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
