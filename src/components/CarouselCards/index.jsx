import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ProductCard from '../ProductCard';
import {
    ArrowsButton,
    ArrowsDiv,
    CarouselContainer,
    CarouselContent
} from './styled';

export default function Carousel() {
    // const [currentIndex, setCurrentIndex] = useState(0);

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
        }
    ]

    const buttons = {
        prevItem: (array) => {
            setCurrentIndex(prev => (prev - 1 + array.length) % array.length)
        },
        nextItem: (array) => {
            setCurrentIndex(prev => (prev + 1) % array.length)
        }
    }

    return (
        <>
            <CarouselContainer>
                <CarouselContent>
                    {items.map((item, index) => (
                        <ProductCard key={index} />
                    ))}
                </CarouselContent>

                <ArrowsDiv>
                    <ArrowsButton onClick={() => buttons.prevItem(items)}>
                        <ArrowBackIosRoundedIcon fontSize="medium" />
                    </ArrowsButton>
                    <ArrowsButton onClick={() => buttons.nextItem(items)}>
                        <ArrowForwardIosRoundedIcon fontSize="medium" />
                    </ArrowsButton>
                </ArrowsDiv>

            </CarouselContainer>
        </>
    )
}