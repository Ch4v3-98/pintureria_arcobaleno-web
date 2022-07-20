import { Button } from 'react-bootstrap';
import { Cart, CartFill } from 'react-bootstrap-icons';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function ShoppingCartButton() {
  const { openCart, cartItemsQuantity } = useShoppingCart();

  return (
    <Button
      onClick={openCart}
      style={{ width: '3rem', height: '3rem', position: 'relative' }}
      variant="outline-light"
      className="rounded-circle text-light"
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
