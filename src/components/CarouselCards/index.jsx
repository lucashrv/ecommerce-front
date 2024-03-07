import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useState } from 'react';
import ProductCard from '../ProductCard';
import {
    ArrowsButton,
    ArrowsDiv,
    CarouselContainer,
    CarouselContent,
    CarouselSlider
} from './styled';

export default function Carousel() {
    const [positionSlider, setPositionSlider] = useState(0);
    const [countIndex, setCountIndex] = useState(0);

    const items = [
        {
            name: 'name1',
            image: 'image1',
            price: 'price1'
        },
        {
            name: 'name2',
            image: 'image2',
            price: 'price2'
        },
        {
            name: 'name3',
            image: 'image3',
            price: 'price3'
        },
        {
            name: 'name4',
            image: 'image4',
            price: 'price4'
        },
        {
            name: 'name4',
            image: 'image4',
            price: 'price4'
        },
        {
            name: 'name4',
            image: 'image4',
            price: 'price4'
        }
    ]

    const slider = {
        width: 220,
        countSlides: items.length - 5, // total - visible items
        prevItem: () => {
            if (countIndex === 0) return
            else {
                setCountIndex(prev => prev - 1)
                setPositionSlider(prev => prev - slider.width)
            }
        },
        nextItem: () => {
            if (countIndex === slider.countSlides) return
            else {
                setCountIndex(prev => prev + 1)
                setPositionSlider(prev => prev + slider.width)
            }
        }
    }

    return (
        <>
            <CarouselContainer>
                <CarouselContent>
                    <CarouselSlider style={{ right: positionSlider }}>
                        {items.map((item, index) => (
                            <ProductCard key={index} />
                        ))}
                    </CarouselSlider>
                </CarouselContent>

                <ArrowsDiv>
                    <ArrowsButton onClick={slider.prevItem}>
                        <ArrowBackIosRoundedIcon fontSize="medium" />
                    </ArrowsButton>
                    <ArrowsButton onClick={slider.nextItem}>
                        <ArrowForwardIosRoundedIcon fontSize="medium" />
                    </ArrowsButton>
                </ArrowsDiv>

            </CarouselContainer>
        </>
    )
}