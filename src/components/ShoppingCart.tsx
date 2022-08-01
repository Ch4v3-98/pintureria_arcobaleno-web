import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { CartItem } from './CartItem';
import products from '../data/products';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { user } = useAuth();
  const { closeCart, clearCart, cartItems, cartItemsQuantity } =
    useShoppingCart();

  const navigate = useNavigate();

  const handlePurchase = () => {
    closeCart();
    if (user) {
      navigate('/checkout');
      clearCart();
    } else {
      navigate('/login');
    }
  };

  return (
    <Offcanvas scroll show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton className="bg-primary">
        <Offcanvas.Title className="text-light">
          Carrito de compras
        </Offcanvas.Title>
      </Offcanvas.Header>
      <hr className="mt-0 mb-1" />
      <Offcanvas.Body>
        {cartItemsQuantity > 0 ? (
          <Stack>
            <Button
              onClick={handlePurchase}
              className="ls-wide text-light mb-1"
              variant="secondary"
            >
              Finalizar compra
            </Button>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="mt-3 ms-auto fw-bold fs-5">
              Total{' '}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find((item) => item.id === cartItem.id);
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
