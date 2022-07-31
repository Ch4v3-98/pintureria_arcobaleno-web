import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      variant="primary"
      className=" rounded-circle p-3"
      aria-label="Volver arriba"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1',
        opacity: visible ? '1' : '0',
        transition: 'opacity 0.3s ease-in-out',
      }}
      disabled={!visible}
      onClick={scrollToTop}
    >
      <Icon.ArrowUpShort size={30} color="white" />
    </Button>
  );
}
