import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Heading } from './Heading';

function Sidebar() {
  return (
    <Col md={3} className="support-sidebar h-100 mb-3">
      <Heading className="h5">Arcobaleno</Heading>
      <Nav variant="pills" className="flex-column bg-light p-1">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/soporte/contacto">
            Contacto
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/soporte/sobre-nosotros">
            Sobre nosotros
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/soporte/faq">
            Preguntas Frecuentes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/soporte/terminos-y-condiciones">
            Términos y Condiciones
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/soporte/devoluciones">
            Política de Devoluciones
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
}

export default Sidebar;
