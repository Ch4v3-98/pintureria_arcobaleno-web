import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function CategoriesDropdown({ ...props }) {
  return (
    <DropdownButton
      id="categories-dropdown"
      className="rounded d-inline-block bg-primary"
      variant="outline-terciary"
      title={
        <span className="text-uppercase pe-3" style={{ fontSize: '0.95rem' }}>
          Categorías
        </span>
      }
      {...props}
    >
      <Dropdown.Item as={Link} to="/pinturas">
        Pinturas
      </Dropdown.Item>
      <NavDropdown.Item as={Link} to="/accesorios">
        Accesorios
      </NavDropdown.Item>
    </DropdownButton>
  );
}
