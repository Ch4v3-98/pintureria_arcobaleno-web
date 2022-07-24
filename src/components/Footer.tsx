import { Col, Container, Image, Nav, Row, Stack } from 'react-bootstrap';
import {
  Clock,
  Envelope,
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
            <Image
              id="logo"
              src="/imgs/Arcobaleno-logos_white.png"
              alt="Logo Arcobaleno"
              className="mb-2"
              style={{ height: '50px', position: 'relative', top: '-15px' }}
            />
            <Nav className="ms-3 flex-column  align-content-start">
              <NavLink to="/contacto" title="Contacto" />
              <NavLink to="/faq" title="Preguntas Frecuentes" />
              <NavLink
                to="/terminos-y-condiciones"
                title="Términos y Condiciones"
              />
            </Nav>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <Row>
              <Col className="">
                <Heading className="h6 fw-bold text-light text-uppercase">
                  Atención al cliente
                </Heading>
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <div className="mb-1">
                    <Telephone size={18} color="white" />
                    <span
                      className="ms-2 text-light"
                      style={{ fontSize: '0.95rem' }}
                    >
                      03404 43-1287
                    </span>
                  </div>
                  <div className="mb-1">
                    <Whatsapp size={18} color="white" />
                    <span
                      className="ms-2 text-light"
                      style={{ fontSize: '0.95rem' }}
                    >
                      +54 3404 53-2864
                    </span>
                  </div>
                  <div className="mb-1">
                    <Envelope size={18} color="white" />
                    <span
                      className="ms-2 text-light"
                      style={{ fontSize: '0.95rem' }}
                    >
                      arcobalenopintureria@cegnet.com.ar
                    </span>
                  </div>
                  <div className="">
                    <Clock size={18} color="white" />
                    <span
                      className="ms-2 text-light"
                      style={{ fontSize: '0.95rem' }}
                    >
                      Horarios de atención:
                      <br />
                      <ul
                        className="list-unstyled"
                        style={{ marginLeft: '27px' }}
                      >
                        <li>
                          Lunes a Viernes: 8:00 - 12:00 / 15:30 - 19:30 hs.
                        </li>
                        <li>Sábados: 8:00 - 12:00hs</li>
                      </ul>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <Heading className="h6 fw-bold text-light text-uppercase">
              Seguínos en nuestras redes
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
