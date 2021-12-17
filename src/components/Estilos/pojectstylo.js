import styled from "styled-components";

export const Main = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 2vw 10vw 2vw 10vw;
    text-align: flex-start;
`  
export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100vw;
    padding: 2vw 13vw 2vw 13vw;
    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
    } 
`
export const Title = styled.h1`
    font-size: 3.3vw;
    font-weight: bold;
    margin: 4vw 0vw 1.5vw 0vw;
    color: #1e234a;
    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    @media (max-width: 425px) {
        font-size: 4vw;
    } 
`
export const Subtitle = styled.h1`
    font-size: 1.66vw;
    font-weight: normal;
    widht: 100%;
    word-break: break-word;
    line-height: 1.625;
    color: #1e234a;
    margin-bottom: 2.5vw;
    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    @media (max-width: 425px) {
        font-size: 2.5vw;
    }
`
export const BoxImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vw;
    width: 32%;
    @media (max-width: 425px) {
        width: 70%;
    }
`
export const Imghover = styled.div`
    position: relative;
    overflow: hidden;
    transition: all 0.9s;
    @media (max-width: 425px) {
        font-size: 1.5vw;
    }

` 
export const Image = styled.img`
    width: 23vw;    
    height: 13.889vw;  
    cursor: pointer;
    paddin-right: 1vw;
    overflow: hidden;
    &:hover {
        transition: 0.6s ease-in-out;
        transform: scale(1.3);  
    }
    @media (max-width: 425px) {
        width: 50vw;
        height: 30vw;
    }

`
export const TitleImg = styled.h1`
    font-size: 1.4vw;
    padding: .8vw 0vw .8vw 0vw;
    color: #1e234a;
    @media (max-width: 425px) {
        font-size: 2vw;
    }
`
export const Paragraph = styled.p`
    font-size: 1.1vw;
    width: 88%;
    color: #1e234a;
    @media (max-width: 425px) {
        font-size: 1.5vw;
    }
`
export const readmore = styled.p`
    font-size: 1vw;
    margin-left: .5vw;
    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    cursor: pointer;
    @media (max-width: 425px) {
        font-size: 1.2vw;
    }
`
export const Boxbottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5vw 0vw 0vw 0vw;
    color: #1e234a;
`
export const Icon = styled.img`
    width: 3vw;
    cursor: pointer;
    @media (max-width: 425px) {
        width: 4vw;
    }
`
export const Time = styled.p`
    font-size: .9vw;
    opacity: .7;
    font-family: apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    @media (max-width: 425px) {
        font-size: 1.2vw;
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
   @media (max-width: 425px) {
    padding: 2vw 0vw 1vw 0vw;
}
`

