import { ReactElement } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  to: string;
  title: string;
  icon: ReactElement;
};

export function NavItem({ to, title, icon }: NavItemProps) {
  return (
    <Nav.Link
      to={to}
      as={NavLink}
      className="d-flex align-items-center align-content-center justify-content-center"
    >
      {icon}
      &nbsp;&nbsp;
      <span className="" style={{ fontSize: '0.85rem' }}>
        {title}
      </span>
    </Nav.Link>
  );
}
