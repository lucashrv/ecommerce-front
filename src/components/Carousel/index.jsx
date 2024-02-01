import { useState, useEffect } from "react";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import {
    CarouselContainer,
    CarouselContent,
    ButtonsDiv,
    CarouselItem,
    ButtonSlider,
    ArrowsDiv,
    ArrowsButton
} from './styled';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = ['https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/2d0c3636-a6d9-47d6-8c37-a0e30cd05a74___13d703b703aa12a5a7b7d6e6b6c0cd0f.jpg', 'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/2d0c3636-a6d9-47d6-8c37-a0e30cd05a74___13d703b703aa12a5a7b7d6e6b6c0cd0f.jpg', 'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/2d0c3636-a6d9-47d6-8c37-a0e30cd05a74___13d703b703aa12a5a7b7d6e6b6c0cd0f.jpg']

    const buttons = {
        goTo: (index) => {
            setCurrentIndex(index)
        },
        generate: (array) => (
            array.map((item, index) => (
                <ButtonSlider
                    Key={index}
                    selected={index === currentIndex ? true : false}
                    onClick={() => buttons.goTo(index)}
                >
                </ButtonSlider>
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
        }, 6000);

        return () => clearInterval(carouselTimer)

    }, [currentIndex])

    return (
        <>
            <CarouselContainer>
                <CarouselContent>
                    {items.map((item, index) => (
                        index === currentIndex && (
                            <CarouselItem
                                Key={index}
                                src={item}
                                alt={'carousel-item-' + index}
                            />
                        )
                    ))}
                </CarouselContent>

                <ArrowsDiv>
                    <ArrowsButton onClick={() => buttons.prevItem(items)}>
                        <ArrowBackIosRoundedIcon fontSize="small" />
                    </ArrowsButton>
                    <ArrowsButton onClick={() => buttons.nextItem(items)}>
                        <ArrowForwardIosRoundedIcon fontSize="small" />
                    </ArrowsButton>
                </ArrowsDiv>

                <ButtonsDiv>
                    {buttons.generate(items)}
                </ButtonsDiv>

            </CarouselContainer>
        </>
    )
}
