import { NavItem } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  title: string;
}

export function NavLink({ to, title }: NavLinkProps) {
  return (
    <NavItem
      as={Link}
      className="custom-link link-light text-decoration-none d-flex align-items-center align-content-center"
      to={to}
    >
      <Icon.CaretRight size={14} />
      &nbsp;
      <span style={{ fontSize: '0.9rem' }}>{title}</span>
    </NavItem>
  );
}
