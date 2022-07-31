import { Container, Row, Col, Stack, Button, Table } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { Heading } from '../components/Heading';
import { useShoppingCart } from '../context/ShoppingCartContext';

function Cart() {
  const { cartItemsQuantity, clearCart } = useShoppingCart();

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Heading className="h3">
            Carrito de compras
            <Button onClick={clearCart}>
              <Trash size={20} />
            </Button>
          </Heading>
        </Col>
      </Row>
      <Row md={2} xs={1} lg={3} xl={4} className="g-3">
        {cartItemsQuantity > 0 ? (
          <Stack>
            {/* {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))} */}
            <Table bgcolor="white">
              <thead style={{ backgroundColor: 'lightgray' }}>
                <tr>
                  <th className="col-8">Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {/* {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))} */}
              </tbody>
            </Table>
            <div className="mt-3 ms-auto fw-bold fs-5">
              Total{' '}
              {/* {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find((item) => item.id === cartItem.id);
                  return total + (item ? item.price * cartItem.quantity : 0);
                }, 0),
              )} */}
            </div>
          </Stack>
        ) : (
          <div className="text-center mt-4">
            <h5>No hay productos en el carrito</h5>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default Cart;
