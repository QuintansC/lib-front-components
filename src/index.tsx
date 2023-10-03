import * as React from 'react';
import { Carousel } from "react-bootstrap"
import './bootstrap.min.css';

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