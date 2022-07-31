import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  to: string;
  title: string;
  icon: ReactElement;
};

export function NavItem({ to, title, icon }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className="nav-item text-decoration-none d-flex align-items-center justify-content-center"
      style={({ isActive }) =>
        isActive ? { color: '#EFE608' } : { color: 'white' }
      }
    >
      {icon}
      &nbsp;&nbsp;
      <span style={{ fontSize: '0.95rem' }}>{title}</span>
    </NavLink>
  );
}
