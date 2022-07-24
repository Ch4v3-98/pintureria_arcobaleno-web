import {
  Button,
  Container,
  Form,
  Image,
  InputGroup,
  NavbarBrand,
  Stack,
} from 'react-bootstrap';
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
        <NavbarBrand as={NavLink} to="/" className="d-none d-sm-block">
          <Image
            id="logo"
            src="/imgs/Arcobaleno-logos_white.png"
            alt="Logo Arcobaleno"
            style={{ height: '50px' }}
          />
        </NavbarBrand>
        <InputGroup className="d-none d-lg-flex w-50">
          <Form.Control
            type="search"
            placeholder="Buscar"
            className="rounded-0 rounded-start"
            aria-label="Search"
          />
          <Button
            variant=""
            className="bg-secondary rounded-0 rounded-end py-2"
          >
            <Icon.Search className="text-light" />
          </Button>
        </InputGroup>
        <Stack direction="horizontal" gap={2}>
          <SearchButton />
          <AccountButton />
          <ShoppingCartButton />
        </Stack>
      </Container>
    </Container>
  );
}
