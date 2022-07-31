import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Header>Checkout</Card.Header>
            <Card.Body>
              <Card.Title>Compra Completada</Card.Title>
              <Card.Text className="mt-3">
                <CheckCircle size={125} className="text-success" />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="outline-primary"
                className="w-50 fw-bold"
                onClick={handleClick}
              >
                Volver a Inicio
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
