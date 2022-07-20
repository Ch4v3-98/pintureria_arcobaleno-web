import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CartPlusFill } from 'react-bootstrap-icons';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseItemQuantity } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100 hover-shadow">
      {quantity > 0 && (
        <OverlayTrigger overlay={<Tooltip>{quantity} en el carrito</Tooltip>}>
          <div
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '0.5rem',
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
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'contain' }}
        className="p-2"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
          <span className="text-muted fs-6">{name}</span>
        </Card.Title>
        <Card.Text className="fs-5">
          <span className="  text-dark">
            {formatCurrency(price)}
            {/* <sup style={{ fontSize: '13px', marginLeft: '2px' }}>
              {decimals}
            </sup> */}
          </span>
        </Card.Text>
        <div className="mt-auto">
          <Button
            className="w-100 d-flex flex-fill justify-content-center align-items-center"
            onClick={() => increaseItemQuantity(id)}
          >
            <CartPlusFill color="white" />
            <span className="ms-2 text-light fw-bold">Agregar</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
