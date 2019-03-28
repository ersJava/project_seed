import React from 'react';
import { Carousel } from 'react-bootstrap';
import Card from "../Card";

const CarouselItem = (props) => {
  const { id, active, direction, image, alt, heading, caption } = props; // 1

  return (
    <Carousel.Item
     <Card />
      <Carousel.Caption>
        <h3>{heading}</h3>
        <p>{caption}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default CarouselItem;