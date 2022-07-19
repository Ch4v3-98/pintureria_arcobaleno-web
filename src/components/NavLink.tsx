import { NavItem } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  title: string;
};

export function NavLink({ to, title }: NavLinkProps) {
  return (
    <NavItem
      as={Link}
      className="custom-link link-light text-decoration-none align-items-center align-content-center d-flex"
      to={to}
    >
      <Icon.ArrowRightCircle size={16} />
      &nbsp;
      {title}
    </NavItem>
  );
}
