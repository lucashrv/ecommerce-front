import styled from "styled-components";
import colors from "../../styles/colors";

export const ContainerSearch = styled.div``

export const Input = styled.input`
    width: 100%;
    height: 25px;
    border-radius: 15px 0 0 15px;
    border: none;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;

    &:focus {
        outline: none;
    }
`

export const ButtonIcon = styled.button`
    background-color: ${colors.white};
    height: 30px;
    width: 30px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
