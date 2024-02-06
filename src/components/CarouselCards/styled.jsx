import styled from "styled-components";

export const CarouselContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CarouselContent = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
    overflow: hidden;
    border: 1px solid red;
`

export const ArrowsDiv = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%) translate(0, -25px);
`

export const ArrowsButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: inherit;
    color: #111;
    transition: color .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 20px;

    &:hover {
        background-color: #ffffffc7;
    }
`
