import { Col, Container, Image, Nav, Row, Stack } from 'react-bootstrap';
import {
  Clock,
  Facebook,
  Instagram,
  Telephone,
  Whatsapp,
} from 'react-bootstrap-icons';
import { NavLink } from './NavLink';
import SocialMediaButton from './SocialMediaButton';

export function Footer() {
  return (
    <Container
      fluid
      className="bg-primary"
      //   style={{ position: 'fixed', right: 0, bottom: 0, left: 0 }}
    >
      <Container className="p-3">
        <Row className="d-flex justify-content-between">
          <Col>
            <Row className="">
              <Col className="">
                <Image
                  id="logo"
                  src="/imgs/Arcobaleno-logos_black.png"
                  alt="Logo Arcobaleno"
                  style={{ height: '50px' }}
                />
              </Col>
            </Row>
            <Row className="">
              <Col>
                <Nav className="flex-column  align-content-start">
                  <NavLink to="/" title="Preguntas Frecuentes" />
                  <NavLink to="/" title="Contacto" />
                  <NavLink to="/" title="Términos y Condiciones" />
                </Nav>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="">
              <Col>
                <div className="fw-bold d-flex justify-content-center align-items-center p-2">
                  Atención al cliente
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start p-2">
                  <div>
                    <Telephone size={20} /> +56 9 55555555
                  </div>
                  <div>
                    <Whatsapp size={20} /> +54 3404 55555555
                  </div>
                  <div>
                    <Clock size={20} /> Dias y Horarios de atención:
                    <br />
                    Lunes a Viernes de 9 a 18hs
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="text-center">
            <Stack
              direction="horizontal"
              gap={2}
              className="d-flex justify-content-center p-3"
            >
              <SocialMediaButton
                title="Facebook"
                href="#"
                icon={<Facebook size={30} />}
              />
              <SocialMediaButton
                title="Instagram"
                href="#"
                icon={<Instagram size={30} />}
              />
            </Stack>
            <p className="text-white">
              © 2022 Arcobaleno. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
