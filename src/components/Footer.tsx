import { Col, Container, Image, Nav, Row, Stack } from 'react-bootstrap';
import {
  Clock,
  Facebook,
  Instagram,
  Telephone,
  Whatsapp,
} from 'react-bootstrap-icons';
import { Heading } from './Heading';
import { NavLink } from './NavLink';
import SocialMediaButton from './SocialMediaButton';

export function Footer() {
  return (
    <Container fluid className="bg-primary p-5">
      <Container className="">
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <Row>
              <Col>
                <Image
                  id="logo"
                  src="/imgs/Arcobaleno-logos_black.png"
                  alt="Logo Arcobaleno"
                  className="mb-3"
                  style={{ height: '50px' }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav className="ms-3 flex-column  align-content-start">
                  <NavLink to="/" title="Preguntas Frecuentes" />
                  <NavLink to="/" title="Contacto" />
                  <NavLink to="/" title="Términos y Condiciones" />
                </Nav>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <Row>
              <Col className="">
                <Heading className="h6 fw-bold text-light">
                  Atención al cliente
                </Heading>
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <div className="mb-1">
                    <Telephone size={18} color="white" />
                    <span
                      className="ms-2 text-light"
                      style={{ fontSize: '0.95rem' }}
                    >
                      +56 9 55555555
                    </span>
                  </div>
                  <div className="mb-1">
                    <Whatsapp size={18} color="white" />
                    <span
                      className="ms-2 text-light"
                      style={{ fontSize: '0.95rem' }}
                    >
                      +54 3404 55555555
                    </span>
                  </div>
                  <div>
                    <Clock size={18} color="white" />
                    <span
                      className="ms-2 text-light"
                      style={{ fontSize: '0.95rem' }}
                    >
                      Lunes a Viernes de 9 a 18hs
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <Heading className="h6 fw-bold text-light">
              Siguenos en nuestras redes
            </Heading>
            <Stack
              direction="horizontal"
              gap={2}
              className="d-flex justify-content-start"
            >
              <SocialMediaButton
                title="Facebook"
                href="#"
                icon={<Facebook size={25} />}
              />
              <SocialMediaButton
                title="Instagram"
                href="#"
                icon={<Instagram size={25} />}
              />
            </Stack>
            <p className="text-white mt-3">
              © 2022 Arcobaleno. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
