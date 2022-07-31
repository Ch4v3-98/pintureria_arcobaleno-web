import { Button } from 'react-bootstrap';
import { Cart, CartFill } from 'react-bootstrap-icons';
import { useShoppingCart } from '../../../context/ShoppingCartContext';

export function ShoppingCartButton() {
  const { openCart, cartItemsQuantity } = useShoppingCart();

  return (
    <Button
      onClick={openCart}
      style={{ position: 'relative' }}
      variant="outline-light"
      className="rounded-circle text-light p-3"
      aria-label="Carrito de compras"
    >
      {cartItemsQuantity > 0 ? (
        <>
          <CartFill size={23} />
          <div
            className="rounded-circle d-flex justify-content-center align-items-center bg-secondary"
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              top: -10,
              right: 0,
              transform: 'translate(25%, 25%)',
            }}
          >
            {cartItemsQuantity}
          </div>
        </>
      ) : (
        <Cart size={24} />
      )}
    </Button>
  );
}
