import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CartPlusFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import Price from '../Price';

type StoreItemProps = {
  id: string;
  name: string;
  price: number;
  images: string[];
  discount: number;
};

export function StoreItem({
  id,
  name,
  price,
  images,
  discount,
}: StoreItemProps) {
  const { getItemQuantity, increaseItemQuantity } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const productURL = `/catalogo/${id}`;

  return (
    <Card className="store-item h-100 rounded-0">
      {quantity > 0 && (
        <OverlayTrigger overlay={<Tooltip>{quantity} en el carrito</Tooltip>}>
          <div
            style={{
              position: 'absolute',
              top: '0.2rem',
              right: '0.2rem',
              zIndex: 1,
              width: '50px',
              height: '50px',
            }}
            className="d-flex justify-content-center align-items-center bg-info shadow-3-strong rounded-circle p-2"
          >
            <CartPlusFill size={20} color="white" className="" />
          </div>
        </OverlayTrigger>
      )}
      <Link to={productURL}>
        <Card.Img
          variant="top"
          src={images[0]}
          height="200px"
          style={{ objectFit: 'contain' }}
          className="p-2"
        />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between px-3 py-1">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
          <Link
            to={productURL}
            className="text-muted text-decoration-none"
            style={{ fontSize: '0.85rem' }}
          >
            {name}
          </Link>
        </Card.Title>
        <Card.Text>
          <Price price={price} discount={discount} />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="mt-1 bg-transparent">
        <Button
          className="w-100 d-flex flex-fill justify-content-center align-items-center rounded-pill"
          variant="outline-primary"
          onClick={() => increaseItemQuantity(id)}
          about="Agregar al carrito"
        >
          <CartPlusFill />
          <span className="ms-2 fw-bold" style={{ fontSize: '0.90rem' }}>
            Agregar
          </span>
        </Button>
      </Card.Footer>
    </Card>
  );
}
