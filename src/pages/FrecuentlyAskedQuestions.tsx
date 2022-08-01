import { Col, Container, Row } from 'react-bootstrap';
import { Heading } from '../components/Heading';
import Sidebar from '../components/Sidebar';
import questions from '../data/questions';
import FAQ from '../components/FAQ';

const FrecuentlyAskedQuestions = () => {
  return (
    <Container className="my-3 my-lg-5">
      <Row>
        <Sidebar />
        <Col>
          <Heading className="h3">Preguntas frecuentes</Heading>
          <section>
            {questions.map((faq) => (
              <FAQ key={faq.id} {...faq} />
            ))}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default FrecuentlyAskedQuestions;
