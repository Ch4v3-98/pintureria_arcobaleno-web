import { Col, Container, Row } from 'react-bootstrap';
import { HomeCarousel } from '../components/HomeCarousel';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';

export function Home() {
  return (
    <Container className="">
      <Row>
        <Col>
          <HomeCarousel />
        </Col>
      </Row>
      <Row md={2} xs={1} lg={3} xl={4} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
