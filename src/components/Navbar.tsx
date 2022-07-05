import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavbarBrand,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from 'react-bootstrap';
import NavbarOffcanvas from 'react-bootstrap/esm/NavbarOffcanvas';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';
import { CategoriesDropdown } from './CategoriesDropdown';
import { ShoppingCartButton } from './ShoppingCartButton';

export function Navbar() {
  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      bg="danger"
      variant="dark"
      className="shadow-sm mb-3"
    >
      <Container>
        <Nav className="me-auto align-items-center">
          <NavbarBrand href="/">
            <img
              src="/imgs/Arcobaleno-logos_black.png"
              alt="Logo Arcobaleno"
              style={{ height: '50px' }}
            />
          </NavbarBrand>
          <NavbarToggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <NavbarOffcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <OffcanvasHeader closeButton>
              <OffcanvasTitle id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <CategoriesDropdown />
              <Nav.Link to="/pinturas" as={NavLink}>
                Pinturas
              </Nav.Link>
              <Nav.Link to="/herramientas" as={NavLink}>
                Herramientas
              </Nav.Link>
              <Nav.Link to="/accesorios" as={NavLink}>
                Accesorios
              </Nav.Link>
              <Nav.Link to="/marcas" as={NavLink}>
                Marcas
              </Nav.Link>
              <Nav.Link to="/contacto" as={NavLink}>
                Contacto
              </Nav.Link>
            </OffcanvasBody>
          </NavbarOffcanvas>
        </Nav>
        <ShoppingCartButton />
      </Container>
    </BootstrapNavbar>
  );
}
