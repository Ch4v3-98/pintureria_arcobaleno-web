import marcas from '../data/marcas';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heading } from '../components/Heading';

export function Marcas() {
  return (
    <Container>
      <Heading className="mt-5 h5">Marcas</Heading>
      <Row className="g-3">
        {marcas.map((marca) => (
          <Col md={6} lg={4} xl={3}>
            <Link to="/pinturas">
              <Card key={marca.id} className="p-5 h-100 hover-shadow bg-light">
                <Card.Img
                  variant="top"
                  src={marca.imagen}
                  alt={marca.nombre}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
