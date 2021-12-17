import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    padding: 0vw 10vw 0vw 10vw;
`
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
`
export const title = styled.h1`
    font-size: 3vw;
    margin-bottom: 1vw;
    color: #1e234a;
    margin: 6vw 0vw 1.5vw 0vw;
    fontfamily: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    @media (max-width: 425px) {
        font-size: 4vw;
    }
`
export const title2 = styled.h1`
    font-size: 2vw;
    margin-bottom: 1vw;
    color: #1e234a;
    margin: 6vw 0vw 4vw 0vw;
    Width: 100%;
    text-align: center;
    fontfamily: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    
`   
export const Paragraph = styled.p`
    font-size: 1.66vw;
    margin: 1vw 0vw 4vw 0vw;
    color: #1e234a;
    fontfamily: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    @media (max-width: 425px) {
        font-size: 2.2vw;
    }
`
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    @media (max-width: 425px) {
        font-size: 4vw;
    }
`
export const Left2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 2vw 3vw 2vw 0vw;
    @media (max-width: 425px) {
        font-size: 4vw;
    }
    `
export const Right2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 8vw;
    align-items: center;
`
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    @media (max-width: 425px) {
        font-size: 1vw;
        width: 30%;
    }
`
export const Description = styled.p`
    font-size: 1.66vw;
    padding: 0vw 10vw 0vw 0vw;
    color: #1e234a;
    margin-bottom: 2vw
    margin-top: 2vw;
    z-index: -1;
    background-color: transparent;
`
export const Description2 = styled.p`
    font-size: 1.2vw;
    color: #1e234a;
    margin-bottom: 2vw
    margin-top: 2vw;
`
export const Description3 = styled.p`
    font-size: 1.2vw;
    color: #1e234a;
    margin-bottom: 2vw
    margin-top: 2vw;
`
export const Btn4 = styled.button`
font-size: 1.2vw;
color: #1e234a;
border none;
background-color: transparent;
padding: 0vw 0vw 0vw .5vw;
magin-bottom: 2vw;
textalign: center;
display: flex;
align-items: center;
height: 1vw;
color: hotpink;
outline: none;
cursor: pointer;
&:hover{
    transform: scale(1.1);
}
`
export const Image = styled.img`
    width: 15vw;
    border-radius: 10%;
`
export const icon1 = styled.img`
    width: 3vw;

`
export const video = styled.iframe`
    width: 100%;
    height: 50vh; 
    margin-top: 6vw;

`
export const click = styled.button`
    font-size: 1.66vw;
    color: hotpink;
    z-index: 999;
    position: relative;
    top: 5vw;
    &:hover{
        transform: scale(1.1);
        transition: all 0.5s;
    }
`
export const click2 = styled.p`
    font-size: 1.66vw;
    color: hotpink;
    &:hover{
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
    }
`
export const Boxstuff = styled.div`
    display: flex;
    justiy-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
`
export const stuff1 = styled.img`
    width: 12vw;
    margin: 0vw 5vw 0vw 5vw;
`
export const stuff2 = styled.img`
    width: 10vw;
    margin-left: 3vw;
    margin-right: 10vw;
`
export const stuff3 = styled.img`
    width: 10vw;
    height: 17vw;
    position: relative;
    top: 8vw;
    margin: 0vw 9vw 0vw 9vw;
`
export const stuff4 = styled.img`
    width: 7vw;
    height: 6vw;
    position: relative;
    top: 42vw;
`
export const stuff5 = styled.img`
    width: 10vw;
    height: 10vw;
    position: relative;
    top: 13vw;
`
export const stuff6 = styled.img`
    width: 10vw;
    height: 18vw;
    position: relative;
    top: 6vw;
    margin-right: 10vw;
`
export const stuff7 = styled.img`
    width: 25vw;
    height: 25vw;
`
export const stuff8 = styled.img`
    width: 2.5vw;
    height: 7vw;
    position: relative;
    top: 40vw;
    left: 25vw;
`
export const stuff9 = styled.img`
    width: 80vw;
    margin-top: -8vw;
    
    `
export const stuff10 = styled.img`
    width: 10vw;
    height: 10vw;
    position: relative;
    top: 12vw;
    margin: 0vw 9vw 0vw 9vw;
`
export const bottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0vw 10vw 0vw 10vw;
    margin-bottom: 2vw;
`




