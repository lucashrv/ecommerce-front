import styled from "styled-components";

export const Container = styled.div`
    background-color: #F1F1F1;
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: ${(props) => props.$opendrawer ? '180px 1fr' : '50px 1fr'};
    align-items: center;
    transition: 0.2s ease-in-out;

    @media (max-width: 1200px) {
        grid-template-columns: ${(props) => props.$opendrawer ? '160px 1fr' : '50px 1fr'};
    }
`

export const Drawer = styled.div`
    background-color: #3D6083;
    width: ${(props) => props.$opendrawer ? '100%' : '50px'};
    border-right: 2px solid #75b1eedc;
    height: 100vh;
    transition: 0.2s ease-in-out;
`

export const DrawerInfo = styled.div`
    border-bottom: 1px solid #ffffff1b;
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: ${(props) => props.$opendrawer ? 'space-between' : 'center'};
`

export const DrawerInfoItem = styled.div`
    color: #ffffff99;
    display: ${(props) => props.$opendrawer ? 'block' : 'none'};
    overflow: hidden;

    p {
        font-size: 10px;
        color: #ffffff53;
    }

    h5 {
        font-size: 14px;
        max-width: 120px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 1200px) {
            max-width: 100px;
        }
    }
`

export const DrawerList = styled.nav`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DrawerItemContainer = styled.div`
    color: #ffffff99;
    width: 100%;
    padding: 8px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: #477dc794
    }
`

export const MainContainer = styled.main`
    border: 1px solid red;
    width: 100%;
    height: 100vh;
`

export const MainNav = styled.nav`
    background-color: #3D6083;
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
`

export const LogoName = styled.div`
    color: #ffffffc5;
    font-size: 1.4rem;
    max-width: 180px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1200px) {
        font-size: 1.3rem;
    }

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
    @media (max-width: 320px) {
        font-size: 0.8rem;
        width: 50px;
    }
`
