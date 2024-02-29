import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useEffect, useState } from 'react';
import {
    ArrowsButton,
    ArrowsDiv,
    ButtonSlider,
    ButtonsDiv,
    CarouselContainer,
    CarouselContent,
    CarouselItem
} from './styled';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/2d0c3636-a6d9-47d6-8c37-a0e30cd05a74___13d703b703aa12a5a7b7d6e6b6c0cd0f.jpg',
        'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/ed4763b0-b669-4cb3-880a-d6576d61477b___543390e13465efb13be7d9ba51d7df09.png',
        'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/e65b8559-444a-44e3-bca9-c01733f0bf53___b4561d4b46d81c14e9f071fa81c96373.png'
    ]

    const buttons = {
        goTo: (index) => {
            setCurrentIndex(index)
        },
        generate: (array) => (
            array.map((item, index) => (
                <ButtonSlider
                    key={index}
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
        const carouselTimer = setTimeout(() => {
            buttons.nextItem(items)
        }, 6000);

        return () => clearTimeout(carouselTimer)

    }, [currentIndex])

    return (
        <>
            <CarouselContainer>
                <CarouselContent>
                    {items.map((item, index) => (
                        index === currentIndex && (
                            <CarouselItem
                                key={index}
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