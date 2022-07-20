import {
  Container,
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
import { PageHeader } from './PageHeader';

export function Navbar() {
  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
      variant="dark"
      className="mb-3 p-0 d-flex flex-column shadow-0"
      sticky="top"
    >
      <PageHeader />
      <Container className="p-1">
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
            <Nav
              justify
              className="flex-fill justify-content-md-between align-items-center border border-0"
              // variant="tabs"
            >
              <NavItem
                to="/pinturas"
                title="PINTURAS"
                icon={<Icon.Palette2 />}
              />
              <NavItem
                to="/herramientas"
                title="HERRAMIENTAS"
                icon={<Icon.Tools />}
              />
              <NavItem
                to="/accesorios"
                title="ACCESORIOS"
                icon={<Icon.Boxes />}
              />
              <NavItem to="/marcas" title="MARCAS" icon={<Icon.Archive />} />
              <NavItem
                to="/contacto"
                title="CONTACTO"
                icon={<Icon.Envelope />}
              />
            </Nav>
          </OffcanvasBody>
        </NavbarOffcanvas>
      </Container>
    </BootstrapNavbar>
  );
}
