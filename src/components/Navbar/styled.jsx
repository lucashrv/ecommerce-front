import styled from "styled-components";
import Typography from '@mui/material/Typography';
import colors from '../../styles/colors'

export const Container = styled.nav`
    background-color: ${colors.navbar};
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
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
