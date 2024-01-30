import styled from "styled-components";
import Typography from '@mui/material/Typography';
import colors from '../../styles/colors.jsx'

export const Container = styled.nav`
    background-color: ${colors.navbar};
    width: 100%;
    min-width: 640px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1000;
`

export const DivRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-right: 15px;
    cursor: pointer;
`

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-left: 10px;
    cursor: pointer;
`

export const DivLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 20px;
    padding: 10px;
    cursor: pointer;

    &:hover {
        color: #f3f3f3
    }
`

export const DivSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    min-width: 200px;
    max-width: 300px;
    margin: 0 30px;
`

export const CircleCart = styled.div`
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    font-size: 8px;
    font-weight: 700;
    border-radius: 50%;
    position: absolute;
    bottom: 28px;
    left: 28px;
    z-index: 1;
`

export const Span = styled.span`
    font-size: .7rem;
    margin-left: 1px;
    font-weight: 600;
    display: inline-block;
    transition: text-decoration 1s ;

    &::before {
        content: '';
        width: 0px;
        height: 1px;
        display: block;
        background: #fff;
        transition: 0.3s linear;
    }

    &:hover::before {
        width: 100%;
    }
`

export const MenuButton = styled.div`
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 10px;

    @media (min-width: 700px) {
        display: none;
    }
`

export const TypographyLogo = ({ label, href }) => {
    return <>
        <DivLogo>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href={href ?? '#'}
                sx={{
                    fontFamily: 'sans-serif',
                    fontWeight: 500,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '25px'
                }}
            >
                {label ?? 'LOGO'}
            </Typography>
        </DivLogo>
    </>
}
