import styled from "styled-components";
import Typography from '@mui/material/Typography';
import colors from '../../utils/colors'

export const Container = styled.nav({
    backgroundColor: '#cb1111',
    border: '1px solid red',
    width: '100%',
    height: '50px',
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
})

export const DivRight = styled.div({
    border: '1px solid red',
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    width: 'fit-content',
    marginRight: '10px',
    cursor: 'pointer'
})

export const DivLogo = styled.div({
    border: '1px solid red',
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    width: 'fit-content',
    marginLeft: '10px',
    cursor: 'pointer'
})

export const TypographyLogo = (logo) => {
    return <>
        <DivLogo>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                    fontFamily: 'sans-serif',
                    fontWeight: 500,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '25px'
                }}
            >
                LOGO
            </Typography>
        </DivLogo>
    </>
}
