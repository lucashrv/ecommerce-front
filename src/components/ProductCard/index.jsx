import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Rating } from '@mui/material';
import {
    CardContentDiv,
    CardContentInside,
    ContainerDescription
} from './styled';

export default function ProductCard() {
    return (
        <Card
            sx={{
                minWidth: 200,
                maxWidth: 200,
                height: 300,
                margin: '0 10px'
            }}
            orientation="vertical"
            size="sm"
            variant="soft"
        >

            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <Typography level="body-sm" textAlign='center'>
                100% Whey Max Titanium x Dr. Peanut 900g - Max Titanium - Bueníssimo
            </Typography>
            <CardContentDiv>
                <Rating
                    // value={value}
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    sx={{ mr: 'auto', alignSelf: 'end', width: 'fit-content' }}
                />
                <CardContentInside>
                    <ContainerDescription>
                        <Typography fontSize="md" fontWeight="md">
                            R$ 9.999,99
                        </Typography>
                    </ContainerDescription>
                    <Button
                        color="neutral"
                        variant="outlined"
                        size="sm"
                        aria-label="Cart"
                        sx={{ ml: 'auto', alignSelf: 'end', fontWeight: 600 }}
                    >
                        Carrinho
                    </Button>
                </CardContentInside>
            </CardContentDiv>
        </Card >
    );
}