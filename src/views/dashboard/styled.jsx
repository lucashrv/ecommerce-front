import styled from "styled-components";

export const Container = styled.div`
    background-color: #F4F7FF;
    width: 100%;
    height: calc(100vh - 50px);
    min-width: 330px;
    display: grid;
    grid-template-columns: ${(props) => props.$opendrawer ? '180px 1fr' : '50px 1fr'};
    transition: 0.2s ease-in-out;

    @media (max-width: 1200px) {
        grid-template-columns: ${(props) => props.$opendrawer ? '160px 1fr' : '50px 1fr'};
    }
`

export const Drawer = styled.div`
    background-color: #fcfcfc;
    width: ${(props) => props.$opendrawer ? '100%' : '50px'};
    border-right: 1px solid #00000048;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.135);
    height: calc(100vh - 50px);
    transition: 0.2s ease-in-out;
`

// export const DrawerInfo = styled.div`
//     width: 100%;
//     height: 50px;
//     display: flex;
//     padding: 0 10px;
//     align-items: center;
//     justify-content: ${(props) => props.$opendrawer ? 'space-between' : 'center'};
// `

export const DrawerList = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 50px);
`

export const DrawerListContainer = styled.nav`
    width: 100%;
    overflow-y: scroll;
    height: calc(100vh - 86.8px);

    &::-webkit-scrollbar {
    width: 4px;
    }

    &::-webkit-scrollbar-track {
    background: #fefefe;
    }

    &::-webkit-scrollbar-thumb {
    background: #418dff;
    }

    &::-webkit-scrollbar-thumb:hover {
    background: #76adff;
    }
`
export const DrawerItemContainer = styled.div`
    background-color: ${(props) => props.selected ? '#d9eeff' : 'none'};
    color: ${(props) => props.selected ? '#1F77FD' : '#434343b9'};
    box-shadow: ${(props) => props.selected
        ? '-5px 0 10px 1px rgba(69, 69, 69, 0.135)'
        : ''
    };
    border-bottom: 1px solid #dbdbdb21;
    margin: 2px auto;
    width: 95%;
    border-radius: 8px;
    padding: 8px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: #d8e3ed;
    }
`

export const DrawerItemFixedBottomContainer = styled.div`
    color: #ffffff99;
    background-color: #1F77FD;
    color: #fff;
    max-width: 180px;
    width: 100%;
    padding: 8px 11px 8px 17px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: #0d52ba;
    }
`

export const MainContainer = styled.main`
    width: 100%;
    max-height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainNav = styled.nav`
    background-color: #fcfcfc;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #00000013;
`

export const LogoContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
`

export const Box = styled.div`
    width: 98%;
    margin-top: 20px;
    box-shadow: -2px -10px 5px 0px rgba(0, 0, 0, 0.2);
`
