import { Container, Col, Row, Stack } from 'react-bootstrap';
import FiltersSidebar from '../components/store/FiltersSidebar';
import accessoriesItems from '../data/accessories';
import { StoreItem } from '../components/store/StoreItem';
import { Heading } from '../components/Heading';

export function Accessories() {
  return (
    <Container fluid="lg" className="my-3 my-lg-5">
      <Row>
        <FiltersSidebar />
        <Col md={12} lg={9}>
          <Heading className="h3">Accesorios</Heading>
          <Stack className="bg-light p-4 border shadow">
            <span className="text-muted">
              Mostrando {accessoriesItems.length} de {accessoriesItems.length}{' '}
              productos
            </span>
          </Stack>
          <Row className="g-0">
            {accessoriesItems.map((item) => (
              <Col key={item.id} sm={6} md={4} xl={3}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
