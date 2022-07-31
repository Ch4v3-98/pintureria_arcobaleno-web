import { Button, Form, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import products from '../data/products';
import { Trash } from 'react-bootstrap-icons';

type CartItemProps = {
  id: string;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem, increaseItemQuantity, decreaseItemQuantity } =
    useShoppingCart();

  const item = products.find((item) => {
    return item.id === id;
  });

  if (!item) {
    return null;
  }

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center rounded bg-light p-3"
    >
      <img
        src={item.images[0]}
        alt={item.name}
        style={{ width: '125px', height: '75px', objectFit: 'contain' }}
      />
      <div className="me-auto">
        <div style={{ fontSize: '0.85rem' }}>{item.name}</div>
      </div>
      <div>
        <Form.Group>
          <Form.Label>Cant.</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            min={1}
            max={item.amount}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value);
              if (newQuantity > quantity) {
                increaseItemQuantity(id);
              } else {
                decreaseItemQuantity(id);
              }
            }}
            className="mb-3"
          />
        </Form.Group>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-primary"
        className="shadow-0 border-0 bg-transparent"
        onClick={() => removeItem(item.id)}
      >
        <Trash size={20} />
      </Button>
    </Stack>
  );
}
