import { Container, Col, Row, Stack } from 'react-bootstrap';
import FiltersSidebar from '../components/store/FiltersSidebar';
import paintItems from '../data/paints';
import { StoreItem } from '../components/store/StoreItem';
import { Heading } from '../components/Heading';

export function Paints() {
  return (
    <Container className="my-5">
      <Row>
        <FiltersSidebar />
        <Col>
          <Heading className="h3">Pinturas</Heading>
          <Stack className="bg-light p-4 border shadow">
            <span className="text-muted">
              Mostrando {paintItems.length} de {paintItems.length} productos
            </span>
          </Stack>
          <Row className="g-0">
            {paintItems.map((item) => (
              <Col key={item.id} md={3}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
