import { Col, Container, Row } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';
import { Heading } from '../components/Heading';
import Sidebar from '../components/Sidebar';

function About() {
  const listItem = (text: string) => (
    <li>
      <span className="text-dark">
        <Check size={18} className="text-primary" />
      </span>
      <span className="ms-1 text-dark">
        <span style={{ fontSize: '0.9rem' }}>
          <strong>{text}</strong>
        </span>
      </span>
    </li>
  );

  return (
    <Container className="my-5">
      <Row>
        <Sidebar />
        <Col>
          <Heading className="h3">Sobre Arcobaleno</Heading>
          <section>
            <span style={{ fontSize: '0.95rem' }}>
              <p>
                Arcobaleno es una empresa de pintura que se dedica a la venta de
                pinturas de alta calidad. Nuestra empresa cuenta con una amplia
                gama de productos, desde pinturas de alta calidad hasta pinturas
                de bajo costo.
              </p>
              <p>
                Además, contamos con una amplia gama de productos de pintura
                para el hogar.
              </p>
              <p>
                Somos una empresa familiar de la localidad de Gálvez, provincia
                de Santa fe, a cargo de Roberto Anghinolfi, y su hijo, Bruno
                Anghinolfi, con más de 30 años de trayectoria en el rubro
                comercial.
                <br />
                <br />
                Se trabaja para ofrecer el mejor asesoramiento sobre todos los
                productos comercializados, con metas claras, con creatividad,
                excelencia en la calidad de la mercadería ofrecida, atendiendo a
                las diversas necesidades y requerimientos de los clientes y
                profesionales con el objeto de cumplir ampliamente los
                estándares necesarios para distinguirnos en nuestra localidad y
                en la zona de influencia.
              </p>
            </span>
            <hr />
            <h5 className="mb-3 text-primary">Nuestros valores</h5>
            <ul className="list-unstyled">
              {listItem('Vocación de atención al cliente.')}
              {listItem('Honestidad e integridad.')}
              {listItem('Responsabilidad.')}
              {listItem('Trabajo en equipo.')}
              {listItem('Respeto.')}
              {listItem('Compromiso.')}
              {listItem('Humildad.')}
              {listItem('Buen humor.')}
            </ul>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
