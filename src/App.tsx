import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/footer/Footer';
import { Navbar } from './components/layout/navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Accessories } from './pages/Accessories';
import { Contact } from './pages/Contact';
import FrecuentlyAskedQuestions from './pages/FrecuentlyAskedQuestions';
import { Home } from './pages/Home';
import { Brands } from './pages/Brands';
import { Paints } from './pages/Paints';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicies from './pages/RefundPolicies';
import About from './pages/About';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Checkout from './pages/Checkout';

function App() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <ScrollToTop />
        <Navbar />
        <Container fluid className="mb-3 px-0" style={{ minHeight: '65vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pinturas" element={<Paints />} />
            <Route path="/accesorios" element={<Accessories />} />
            <Route path="/marcas" element={<Brands />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/faq" element={<FrecuentlyAskedQuestions />} />
            <Route path="/catalogo/:productId" element={<Product />} />
            <Route
              path="/terminos-y-condiciones"
              element={<TermsAndConditions />}
            />
            <Route path="/devoluciones" element={<RefundPolicies />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </AuthProvider>
  );
}

export default App;
