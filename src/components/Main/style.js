import styled from "styled-components";


export const Container = styled.section`
@import(href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");
    display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
    background-color: #fff;
    padding: 6vw;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80vw;
    height: auto;
`
export const MainTitle = styled.h1`
    font-size: 3.3vw;
    font-weight: bold;
    margin-bottom: 1.5vw;
    color: #1e234a;
    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`
export const MainParagraph = styled.p`
    font-size: 1.66vw;
    font-weight: normal;
    widht: 100%;
    word-break: break-word;
    line-height: 1.625;
    color: #1e234a;
    margin-bottom: 2.5vw;
    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`
export const Cachtphrase = styled.p`
    font-size: 2vw;
    font-weight: 600;
    font-style: italic;
    widht: 50%;
    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    width: 74%;
    color: #474f90;
    padding-left: 1vw;
    border-left: 4px solid #474f90;
    border-radius: 4px;
`