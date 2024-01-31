import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem"
import { CarouselContainer } from './styled';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = ['items', 'asdasd']

    const buttons = {
        goTo: (index) => {
            setCurrentIndex(index)
        },
        generate: (array) => (
            array.map((item, index) => (
                <button
                    Key={index}
                    onClick={() => buttons.goTo(index)}
                >
                    ---
                </button>
            ))
        ),
        prevItem: (array) => {
            setCurrentIndex(prev => (prev - 1 + array.length) % array.length)
        },
        nextItem: (array) => {
            setCurrentIndex(prev => (prev + 1) % array.length)
        }
    }

    useEffect(() => {
        const carouselTimer = setInterval(() => {
            buttons.nextItem(items)
        }, 4000);

        return () => clearInterval(carouselTimer)

    }, [currentIndex])

    console.log('renders');
    return (
        <>
            {/* <h1>Carousel</h1>
            <CarouselItem>
            </CarouselItem> */}
            <CarouselContainer>
                <div className="carousel-content">
                    {items.map((item, index) => (
                        // <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                        //     {item}
                        // </div>
                        index === currentIndex && (
                            <>{item}</>
                        )
                    ))}
                </div>
                <div>

                </div>
                <div>
                    {buttons.generate(items)}

                </div>
                <button onClick={() => buttons.prevItem(items)}>Anterior</button>
                <button onClick={() => buttons.nextItem(items)}>Próximo</button>
            </CarouselContainer>
        </>
    )
}