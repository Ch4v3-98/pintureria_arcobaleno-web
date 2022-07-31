import { Col, Container, Row } from 'react-bootstrap';
import { HomeCarousel } from '../components/HomeCarousel';
import { StoreItem } from '../components/store/StoreItem';
import paintItems from '../data/pinturas';

export function Home() {
  return (
    <Container>
      <HomeCarousel />
      <section className="mb-4">
        <div className="mb-3 p-4 text-center rounded-3 bg-secondary border border-2">
          <h3 className="m-0 text-light">Lo más vendido</h3>
        </div>
        <Row sm={2} xs={1} md={3} xl={5} className="g-2 g-sm-0">
          {paintItems
            .map((item) => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))
            .slice(0, 10)}
        </Row>
      </section>
    </Container>
  );
}
