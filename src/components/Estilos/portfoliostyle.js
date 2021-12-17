import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 5vw 10vw 5vw 10vw; 
`
export const Img = styled.img`
    width: 60%;
    cursor: pointer;
    margin-left: 15vw;
    &:hover{
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
    }
    @media (max-width: 425px) {
        margin-left: 0vw;
        width: 80%;
    }

`
export const Title = styled.h1`
    font-size: 3.3vw;
    font-weight: bold;
    padding: 2vw 0vw 1vw 0vw;
    @media (max-width: 425px) {
        font-size: 5vw;
    }
`
export const Paragraph = styled.p`
    width: 50%;
    font-size: 1.5vw;
    padding: 0vw 0vw 2vw 0vw;
    @media (max-width: 425px) {
        font-size: 3vw;
        width: 70%;
    }
`
export const hover = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
        transition: 0.5s ease-in-out;
        transform: scale(1.2);
        color: hotpink;
    }
    
`
export const Icon = styled.img`
    width: 3vw;
    cursor: pointer;
    @media (max-width: 425px) {
        font-size: 5vw;
    }
`
export const readmore = styled.p`
    font-size: 1vw;
    margin-left: .5vw;
    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    cursor: pointer;
    @media (max-width: 425px) {
        font-size: 2vw;
        margin: 1vw;
    }
`
