import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

interface CarouselProps {
    images?: string[]
}

const CarouselComponent = ({ images }: CarouselProps) => {
    return (
        <Carousel>
            {images?.map(image =>{
                return (
                     <Carousel.Item>
                        <Image src={image} alt=""></Image>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default CarouselComponent