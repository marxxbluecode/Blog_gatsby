import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: auto;
    padding: 2vw 0vw 2vw 0vw;
    background-color: #15171a;
`
export const Copyright = styled.p`
    font-size: .9vw;
    color: #FBF5F3;
    opacity: .7;
`
export const Boxlinks = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 20vw;
    cursor: pointer;
    color: #d2d2d2;
    opacity: .7;
    padding: 0vw 2vw 0vw 2vw;
    -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
`
export const Link = styled.li`
    font-size: .9vw;
    margin-right: 1vw;
    list-style: none;
    &:hover {
        color: #fff;
        opacity: 1;
    }
`