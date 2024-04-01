import styled from "styled-components";

export const Container = styled.div`
    background-color: #F4F7FF;
    width: 100%;
    min-height: 100vh;
    min-width: 330px;
    display: grid;
    grid-template-columns: ${(props) => props.$opendrawer ? '180px 1fr' : '50px 1fr'};
    align-items: center;
    transition: 0.2s ease-in-out;

    @media (max-width: 1200px) {
        grid-template-columns: ${(props) => props.$opendrawer ? '160px 1fr' : '50px 1fr'};
    }
`

export const Drawer = styled.div`
    background-color: #5e4fa8;
    width: ${(props) => props.$opendrawer ? '100%' : '50px'};
    border-right: 2px solid #6b5ac0;
    box-shadow: 5px 0 30px 5px rgba(0, 0, 0, 0.135);
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
    background-color: ${(props) => props.selected ? '#7865d3' : 'none'};
    width: 100%;
    padding: 8px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: #6959ba;
    }
`

export const MainContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainNav = styled.nav`
    background-color: #5e4fa8;
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
`

export const Box = styled.div`
    width: 98%;
    margin-top: 20px;
    box-shadow: -2px -10px 5px 0px rgba(0, 0, 0, 0.2);
`
