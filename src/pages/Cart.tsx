import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import {
  Container,
  Row,
  Col,
  Stack,
  Button,
  Table,
  Image,
  Form,
} from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { CartItem } from '../components/CartItem';
import { Heading } from '../components/Heading';
import Price from '../components/Price';
import { useShoppingCart } from '../context/ShoppingCartContext';
import products from '../data/products';
import { Product } from '../data/types';
import { formatCurrency } from '../utilities/formatCurrency';

function Cart() {
  const {
    cartItems,
    cartItemsQuantity,
    getItemQuantity,
    removeItem,
    clearCart,
  } = useShoppingCart();

  // const cartItem = (item: Product) => {
  //   return (
  //     <tr>
  //       <td>
  //         <div className="d-flex">
  //           <Image src={item.images[0]} alt={item.name} height={100} />
  //           <div className="ms-3">
  //             <p className="text-muted">{item.name}</p>
  //           </div>
  //         </div>
  //       </td>
  //       <td className="text-center">
  //         <Price price={item.price} />
  //       </td>
  //       <td>
  //         <Form.Control
  //           style={{ width: '60px' }}
  //           min={1}
  //           max={item.amount}
  //           type="number"
  //           value={quantity}
  //           onChange={(e) => setQuantity(Number(e.target.value))}
  //         />
  //       </td>
  //       <td>
  //         <p className="text-muted">
  //           <Price price={item.price * quantity} />
  //           <Button
  //             variant="outline-primary"
  //             className="ms-2"
  //             onClick={() => removeItem(item.id)}
  //           >
  //             <Trash size={20} />
  //           </Button>
  //         </p>
  //       </td>
  //     </tr>
  //   );
  // };

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
