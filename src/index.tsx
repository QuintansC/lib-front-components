import * as React from 'react';

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};


import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

interface CarouselProps {
    images?: string[]
}

export const CarouselComponent = ({ images }: CarouselProps) => {
  return (
    <Carousel>
      {images?.map(image =>{
        return (
          <Carousel.Item>
            <img src={image} alt=""></img>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}