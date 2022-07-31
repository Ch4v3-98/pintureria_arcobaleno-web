import { Container, Image, NavbarBrand, Stack } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { AccountButton } from './AccountButton';
import SearchBar from './SearchBar';
import { SearchButton } from './SearchButton';
import { ShoppingCartButton } from '../navbar/ShoppingCartButton';

export function PageHeader() {
  const { user } = useAuth();

  return (
    <Container fluid className="bg-primary">
      <Container className="p-3 d-flex align-items-center justify-content-between">
        <NavbarToggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className="bg-secondary border border-2 border-terciary"
        />
        <NavbarBrand as={NavLink} to="/" className="d-none d-sm-block">
          <Image
            id="logo"
            src="/imgs/Arcobaleno-logos_white.png"
            alt="Logo Arcobaleno"
            style={{ height: '50px', marginLeft: '40px' }}
          />
        </NavbarBrand>
        <SearchBar className="d-none d-lg-flex w-50" />
        <Stack direction="horizontal" gap={2}>
          <div className="d-none d-md-flex text-md-end">
            {user && (
              <span className="text-light" style={{ fontSize: '0.85rem' }}>
                Bienvenido, <strong>{user.name}</strong>
              </span>
            )}
          </div>
          <SearchButton />
          <AccountButton />
          <ShoppingCartButton />
        </Stack>
      </Container>
    </Container>
  );
}
