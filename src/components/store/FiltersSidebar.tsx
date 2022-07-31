import { Heading } from '../Heading';
import { Col, Form, InputGroup, Stack } from 'react-bootstrap';
import TextField from '../TextField';

function FiltersSidebar() {
  return (
    <Col md={3} style={{ marginTop: '5px' }}>
      <Heading className="h4">Filtrar por</Heading>

      <section>
        <h5 className="mb-3">Precio</h5>
        <Stack direction="horizontal" gap={1}>
          <Form.Control type="number" placeholder="Mínimo" min="0" />
          <span>-</span>
          <Form.Control type="number" placeholder="Máximo" min="1" />
        </Stack>
      </section>
    </Col>
  );
}

export default FiltersSidebar;
