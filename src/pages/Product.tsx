import { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Stack,
  Button,
  Card,
} from 'react-bootstrap';
import { CartPlus } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import products from '../data/products';

function Product() {
  const { productId } = useParams();
  const [selectedImage, setImage] = useState('');
  const { increaseItemQuantity } = useShoppingCart();

  const product = products.find((product) => product.id === productId);

  useEffect(() => {
    if (product) {
      setImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return <div className="text-center mt-5">Producto no encontrado</div>;
  }

  const handleImageClick = (image: string) => {
    setImage(image);
  };

  return (
    <Container fluid="lg" className="my-5">
      <Row>
        <div style={{ width: '150px' }}>
          <Stack gap={2}>
            {product.images.map((image) => (
              <Button
                key={image}
                variant="outline"
                className="product-mini-img p-0 bg-white shadow-0"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  key={image}
                  src={image}
                  alt={product.name}
                  style={{ height: '100px', objectFit: 'cover' }}
                />
              </Button>
            ))}
          </Stack>
        </div>
        <Col md={12} lg={5} className="bg-white text-center my-3 my-lg-0">
          <Image
            fluid
            rounded
            className="p-5"
            src={selectedImage}
            alt={product.name}
            style={{ height: '500px', objectFit: 'contain' }}
          />
        </Col>
        <Col md={12} lg={4} xl={5}>
          <Card className="rounded bg-light">
            <Card.Header className="text-start h4 bg-transparent p-4">
              {product.name}
            </Card.Header>
            <Card.Body>
              <Card.Text className="d-flex flex-column text-start p-2">
                <span
                  style={
                    product.discount > 0
                      ? { textDecoration: 'line-through', color: '#868e96' }
                      : {}
                  }
                >
                  {formatCurrency(product.price)}
                </span>
                {product.discount > 0 && (
                  <span className="fw-bold fs-5">
                    {' '}
                    {formatCurrency(
                      product.price - (product.price * product.discount) / 100,
                    )}
                  </span>
                )}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between bg-transparent py-3">
              <Button
                variant="primary"
                className="w-50 rounded-pill d-flex align-items-center text-center justify-content-center text-light fw-bold"
                style={{ padding: '0.60rem 1rem', textTransform: 'none' }}
                onClick={() => increaseItemQuantity(product.id)}
              >
                <CartPlus className="me-2" size={18} />
                <span style={{ fontSize: '0.85rem' }}>Agregar al carrito</span>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row className="justify-content-md-center">
        <Col md="8">
          <Stack>
            <h4 className="my-3 text-primary">Descripción</h4>
            <p>{product.description}</p>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
