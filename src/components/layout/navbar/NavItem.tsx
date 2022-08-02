import { ReactElement } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type NavItemProps = {
  to: string;
  path?: string;
  title: string;
  icon: ReactElement;
  onClick?: () => void;
};

export function NavItem({ to, title, icon, path, onClick }: NavItemProps) {
  const location = useLocation();

  // If the current route contains the path, add the active class
  const pathMatchs = path ? location.pathname.includes(path) : false;

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="nav-item text-decoration-none d-flex align-items-center justify-content-center"
      style={({ isActive }) =>
        isActive || pathMatchs ? { color: '#EFE608' } : { color: 'white' }
      }
    >
      {icon}
      &nbsp;&nbsp;
      <span style={{ fontSize: '0.95rem' }}>{title}</span>
    </NavLink>
  );
}
