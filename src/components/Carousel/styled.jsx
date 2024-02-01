import styled from "styled-components";

export const CarouselContainer = styled.section`
    position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
`

export const CarouselContent = styled.div`
    position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
`

export const CarouselItem = styled.img`
    width: 100%;
    height: auto;
    display: block;
`

export const ButtonsDiv = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative;
    bottom: 40px; */
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%) translate(0, -25px);
`

export const ButtonSlider = styled.button`
    height: 6px;
    width: 35px;
    cursor: pointer;
    background-color: ${(props) => props.selected ? '#747373' : '#fff'};
    border: none;
    margin: 5px;
    border-radius: 15px;
    transition: background-color .3s;

    &:hover {
        background-color: #747373;
    }
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
    border: 1px solid white;
    cursor: pointer;
    background-color: #ffffffa5;
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
