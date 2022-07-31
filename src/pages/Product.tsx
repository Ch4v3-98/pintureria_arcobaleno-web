import { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Stack, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Heading } from '../components/Heading';
import products from '../data/productos';
import { formatCurrency } from '../utilities/formatCurrency';

function Product() {
  const { productId } = useParams();
  const [selectedImage, setImage] = useState('');

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
    <Container className="my-5">
      <Row>
        <div style={{ width: '150px' }}>
          <Stack gap={2}>
            {product.images.map((image) => (
              <Button
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
        <Col className="bg-white text-center">
          <Image
            fluid
            rounded
            className="p-5"
            src={selectedImage}
            alt={product.name}
            style={{ height: '500px', objectFit: 'contain' }}
          />
        </Col>
        <Col md={6}>
          <Stack className="h-100 rounded bg-light p-5">
            <Heading className="h3">{product.name}</Heading>
            <div>{formatCurrency(product.price).slice(0, -3)}</div>
          </Stack>
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
