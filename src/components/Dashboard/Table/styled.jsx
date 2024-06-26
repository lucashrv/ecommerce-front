import styled from "styled-components";

export const SearchContainer = styled.div`
    margin: 5px 0 15px 0;
`

export const XButton = styled.button`
    background-color: inherit;
    padding: 3px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
`

export const TableContainer = styled.div`
    border: 1px solid #00000017;
    box-shadow: -1px -1px 10px 1px rgba(0, 0, 0, 0.151);
    border-radius: 10px;
    padding: 10px 10px;
`

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    margin-top: 5px;
    border-radius: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3px;
`
export const TdButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 0;
    background-color: inherit;
    border: 1px solid #3232322f;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #ffffff81;
    }
`

export const PopoverButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;

    &>button {
        cursor: pointer;
        font-size: 10px;
        border: 1px solid;
        border-radius: 3px;
        padding: 3px;
        color: #fff;
    }

    &>button:first-of-type {
        background-color: #5cc224;
    }

    &>button:last-child {
        background-color: #e92323;
    }

    &>button:first-of-type:hover {
        background-color: #5ccf1e;
    }

    &>button:last-child:hover {
        background-color: #ff6b6b;
    }
`

export const LoadingContainer = styled.div`
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

// TablePagination styled

export const TablePagContainer = styled.div`
padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2px;
`

export const ButtonNavigate = styled.button`
    border: .5px solid #4646463b;
    background-color: inherit;
    padding: 2px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;

    &:hover {
        background-color: #e8e7e7;
    }
`

export const ButtonNavigatePages = styled.button`
    border: .5px solid #4646463b;
    width: 29.33px;
    height: 29.33px;
    background-color: inherit;
    padding: 2px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;

    background-color: ${(props) => props.selected ? '#d7d7d7' : 'inherit'};

    &:hover {
        background-color: ${(props) => props.selected ? '#d7d7d7' : '#e8e7e7'};
    }
`
