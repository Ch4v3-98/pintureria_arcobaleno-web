import {
  Container,
  Image,
  Nav,
  Navbar as BootstrapNavbar,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import NavbarOffcanvas from 'react-bootstrap/esm/NavbarOffcanvas';
import { CategoriesDropdown } from './CategoriesDropdown';
import { NavItem } from './NavItem';
import { PageHeader } from '../header/PageHeader';

export function Navbar() {
  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
      variant="dark"
      className="p-0 d-flex flex-column"
      sticky="top"
    >
      <PageHeader />
      <Container className="p-1">
        <NavbarOffcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
        >
          <OffcanvasHeader closeButton className="bg-primary">
            <OffcanvasTitle id={`offcanvasNavbarLabel-expand-lg`}>
              <Image
                id="logo"
                rounded
                src="/imgs/Arcobaleno-logos_white.png"
                className="bg-primary"
                alt="Logo Arcobaleno"
                style={{ height: '50px' }}
              />
            </OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <Nav
              justify
              className="nav-bar flex-fill justify-content-start align-items-start justify-content-md-end align-items-lg-center border border-0"
            >
              <CategoriesDropdown />
              <NavItem to="/" title="Inicio" icon={<Icon.HouseFill />} />
              <NavItem
                to="/pinturas"
                title="Pinturas"
                icon={<Icon.Palette2 />}
              />
              <NavItem
                to="/accesorios"
                title="Accesorios"
                icon={<Icon.BrushFill />}
              />

              <NavItem to="/marcas" title="Marcas" icon={<Icon.ViewList />} />
              <NavItem
                to="/soporte/contacto"
                path="/soporte/"
                title="Soporte"
                icon={<Icon.InfoCircle />}
              />
            </Nav>
          </OffcanvasBody>
        </NavbarOffcanvas>
      </Container>
    </BootstrapNavbar>
  );
}
