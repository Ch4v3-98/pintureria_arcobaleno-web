import { Col, Container, Row } from 'react-bootstrap';
import { Heading } from '../components/Heading';
import Sidebar from '../components/Sidebar';

const FAQ = () => {
  return (
    <Container className="my-5">
      <Row>
        <Sidebar />
        <Col>
          <Heading className="h3">Preguntas frecuentes</Heading>
          <div className="mb-4">
            <div className="p-3 bg-secondary rounded-top">
              <h5 className="text-light text-uppercase m-0">
                Titulo Pregunta?
              </h5>
            </div>
            <div className="p-3 bg-light rounded-bottom border-start border-primary border-4">
              <p className="text-secondary m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl
                consectetur nisl, eu consectetur nisl nisl eu consectetur nisl
                nisl.
              </p>
            </div>
          </div>
          <div className="mb-3 ">
            <div className="p-3 bg-secondary rounded-top">
              <h5 className="text-light text-uppercase m-0">
                Titulo Pregunta?
              </h5>
            </div>
            <div className="p-3 bg-light border-start border-primary border-4">
              <p className="text-secondary m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl
                consectetur nisl, eu consectetur nisl nisl eu consectetur nisl
                nisl.
              </p>
            </div>
          </div>
          <div className="mb-3 ">
            <div className="p-3 bg-secondary rounded-top">
              <h5 className="text-light text-uppercase m-0">
                Titulo Pregunta?
              </h5>
            </div>
            <div className="p-3 bg-light border-start border-primary border-4">
              <p className="text-secondary m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl
                consectetur nisl, eu consectetur nisl nisl eu consectetur nisl
                nisl.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
