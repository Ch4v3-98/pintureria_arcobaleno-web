import marcas from '../data/marcas';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heading } from '../components/Heading';

export function Brands() {
  return (
    <Container className="my-5">
      <Heading className="h3">Marcas con las que trabajamos</Heading>
      <Row className="g-2">
        {marcas.map((marca) => (
          <Col key={marca.id} md={6} lg={4} xl={3}>
            <Link to="/pinturas">
              <Card key={marca.id} className="p-5 h-100 hover-shadow bg-light">
                <Card.Img
                  variant="top"
                  src={marca.image}
                  alt={marca.name}
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
