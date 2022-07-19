import { Button, Container, Form, NavbarBrand, Stack } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';
import { AccountButton } from './AccountButton';
import { SearchButton } from './SearchButton';
import { ShoppingCartButton } from './ShoppingCartButton';

export function PageHeader() {
  return (
    <Container fluid className="bg-primary">
      <Container className="p-3 d-flex align-items-center justify-content-between">
        <NavbarToggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className="bg-dark"
        />
        <NavbarBrand as={NavLink} to="/">
          <img
            id="logo"
            src="/imgs/Arcobaleno-logos_black.png"
            alt="Logo Arcobaleno"
            style={{ height: '50px' }}
          />
        </NavbarBrand>
        <Form className="d-none d-lg-flex col-md-6 rounded-4 border border-1 border-light">
          <Form.Control
            type="search"
            placeholder="Buscar"
            className="rounded-0 rounded-start"
            aria-label="Search"
          />
          <Button variant="" className="bg-secondary rounded-0 rounded-end">
            <Icon.Search className="text-light" size={22} />
          </Button>
        </Form>
        <Stack direction="horizontal" gap={2}>
          <SearchButton />
          <AccountButton />
          <ShoppingCartButton />
        </Stack>
      </Container>
    </Container>
  );
}
