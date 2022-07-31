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
      className="bg-light mb-3"
      nextIcon={<Icon.CaretRightFill color="white" size={40} />}
      prevIcon={<Icon.CaretLeftFill color="white" size={40} />}
    >
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/imgs/backgrounds/carousel-background-2.jpg"
          alt="First slide"
          style={{ objectFit: 'cover', height: '400px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/imgs/backgrounds/carousel-background-3.jpg"
          alt="Second slide"
          style={{ objectFit: 'cover', height: '400px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/imgs/backgrounds/carousel-background-4.jpg"
          alt="Third slide"
          style={{ objectFit: 'cover', height: '400px' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}
