import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { CartItem } from './CartItem';
import storeItems from '../data/items.json';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, cartItemsQuantity } = useShoppingCart();

  // const quantity

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header>
        <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
      </Offcanvas.Header>
      <hr className="mt-0 mb-1" />
      <Offcanvas.Body>
        {cartItemsQuantity > 0 ? (
          <Stack>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="mt-3 ms-auto fw-bold fs-5">
              Total{' '}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(
                    (item) => item.id === cartItem.id,
                  );
                  return total + (item ? item.price * cartItem.quantity : 0);
                }, 0),
              )}
            </div>
          </Stack>
        ) : (
          <div className="text-center mt-4">
            <h5>No hay productos en el carrito</h5>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
