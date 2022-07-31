import { Col, Container, Image, Nav, Row, Stack } from 'react-bootstrap';
import {
  Clock,
  Envelope,
  Facebook,
  House,
  HouseFill,
  Instagram,
  Telephone,
  Whatsapp,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Heading } from '../../Heading';
import { NavLink } from './NavLink';
import SocialMediaButton from './SocialMediaButton';

export function Footer() {
  return (
    <Container fluid className="bg-primary py-5 p-sm-5">
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <Link to="/">
              <Image
                id="logo"
                src="/imgs/Arcobaleno-logos_white.png"
                alt="Logo Arcobaleno"
                className="mb-2"
                style={{ height: '50px', position: 'relative', top: '-15px' }}
              />
            </Link>
            <Nav className="ms-3 flex-column  align-content-start">
              <NavLink to="/contacto" title="Contacto" />
              <NavLink to="/sobre-nosotros" title="Sobre nosotros" />
              <NavLink to="/faq" title="Preguntas Frecuentes" />
              <NavLink
                to="/terminos-y-condiciones"
                title="Términos y Condiciones"
              />
              <NavLink to="/devoluciones" title="Política de Devoluciones" />
            </Nav>
          </Col>
          <Col xs={12} sm={6} lg={4} className="my-3 mt-5 my-lg-0 mt-sm-0">
            <Row>
              <Col>
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
                  <div>
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
          <Col lg={4} className="my-3 my-lg-0">
            <section>
              <Heading className="h6 fw-bold text-light text-uppercase">
                Encontranos en
              </Heading>
              <div className="d-flex align-items-center">
                <HouseFill size={20} color="white" />
                &nbsp;
                <span className="text-light">
                  San Martín 230 - Gálvez, Santa Fe, Argentina
                </span>
              </div>
            </section>
            <section className="mt-5">
              <Heading className="h6 fw-bold text-light text-uppercase ">
                Seguínos en nuestras redes
              </Heading>
              <Stack
                direction="horizontal"
                gap={2}
                className="d-flex justify-content-start"
              >
                <SocialMediaButton
                  title="Facebook"
                  href="https://www.facebook.com/pintureriaarcobaleno/"
                  icon={<Facebook size={25} />}
                />
                <SocialMediaButton
                  title="Instagram"
                  href="https://www.instagram.com/arcobalenopintureria/"
                  icon={<Instagram size={25} />}
                />
              </Stack>
            </section>
          </Col>
          <hr className="my-1" />
          <span className="text-white mt-3 fw-bold">
            © 2022 Arcobaleno. Todos los derechos reservados.
          </span>
        </Row>
      </Container>
    </Container>
  );
}
