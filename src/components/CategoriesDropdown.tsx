import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function CategoriesDropdown({ ...props }) {
  return (
    <NavDropdown
      id="categories-dropdown"
      menuVariant="light"
      className="ms-5 my-1 border border-terciary bg-primary rounded"
      title={
        <span
          className="text-uppercase text-light me-4"
          style={{ fontSize: '0.85rem' }}
        >
          Categorías
        </span>
      }
      {...props}
    >
      <NavDropdown.Item as={Link} to="/pinturas">
        Pinturas
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/accesorios">
        Accesorios
      </NavDropdown.Item>
      {/* <NavDropdown.Divider /> */}
    </NavDropdown>
  );
}
