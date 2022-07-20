import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import * as Icon from 'react-bootstrap-icons';

export function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="bg-light mb-5"
      variant="dark"
      nextIcon={<Icon.CaretRightFill color="black" size={40} />}
      prevIcon={<Icon.CaretLeftFill color="black" size={40} />}
    >
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/imgs/Pintura-Alba-Foto1.jpg"
          alt="First slide"
          style={{ objectFit: 'contain', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/imgs/Pintura-Alba-Foto2.jpg"
          alt="Second slide"
          style={{ objectFit: 'contain', height: '400px' }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/imgs/Pintura-Alba-Foto3.jpg"
          alt="Third slide"
          style={{ objectFit: 'contain', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
