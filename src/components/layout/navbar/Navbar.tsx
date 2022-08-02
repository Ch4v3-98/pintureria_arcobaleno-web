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
import { useState } from 'react';

export function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
      variant="dark"
      className="p-0 d-flex flex-column"
      sticky="top"
    >
      <PageHeader handleShow={handleShow} />
      <Container className="p-1">
        <NavbarOffcanvas
          show={show}
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
        >
          <OffcanvasHeader
            closeButton
            className="bg-primary"
            onClick={handleShow}
          >
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
              <NavItem
                to="/"
                title="Inicio"
                icon={<Icon.HouseFill />}
                onClick={handleShow}
              />
              <NavItem
                to="/pinturas"
                title="Pinturas"
                icon={<Icon.Palette2 />}
                onClick={handleShow}
              />
              <NavItem
                to="/accesorios"
                title="Accesorios"
                icon={<Icon.BrushFill />}
                onClick={handleShow}
              />
              <NavItem
                to="/marcas"
                title="Marcas"
                icon={<Icon.ViewList />}
                onClick={handleShow}
              />
              <NavItem
                to="/soporte/contacto"
                path="/soporte/"
                title="Soporte"
                icon={<Icon.InfoCircle />}
                onClick={handleShow}
              />
            </Nav>
          </OffcanvasBody>
        </NavbarOffcanvas>
      </Container>
    </BootstrapNavbar>
  );
}
