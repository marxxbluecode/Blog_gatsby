import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.back});
    background-size: cover;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: relative;
    bottom: 7vw;
`
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vw 10vw 0vw 10vw;
    width: 100%;
    height: auto;
    margin-bottom: 2vh;
   
`
export const LogoName = styled.p`
    font-size: 2vw;
    font-weight: bold;
    color: #FBF5F3;
    @media (max-width: 425px) {
        font-size: 3vw;
        margin-left: 1vw;
    }
`
export const NavLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 13vw;
    height: 5vw;
    @media (max-width: 425px) {
        font-size: 1.5vw;
    }
`
export const Logo = styled.img`
    width: 3vw;
    cursor: pointer;
    &:hover {
        transform: rotate(360deg);
        transition: 1s ease-in-out;
    }
    @media (max-width: 425px) {
        width: 5vw;
    }
`
export const icon = styled.img`
    width: 2vw;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
    }
    @media (max-width: 425px) {
        width: 3vw;
    }
`
export const title = styled.h1`
    font-size: 4vw;
    color: #1e234a;
    margin-top: 15vh;
    @media (max-width: 425px) {
        font-size: 8vw;
    }
`
export const subtitle = styled.p`
    font-size: 2vw;
    color: #7161EF;
    opacity: 0.7;
    font-weight: bold;
    @media (max-width: 425px) {
        font-size: 4vw;
    }
`
export const NavBottom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2vw 10vw 1vw 10vw;
    @media (max-width: 425px) {
        font-size: 2vw;
    }
` 
export const NavLink = styled.li`
    font-size: 1.5vw;
    color: #fff;
    list-style: none;
    padding: 0.6vw;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    background: linear-gradient(to right, #7161EF, #7161EF 50%, #fff 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 575ms ease;
    &:hover {
        background-position: 0 100%;
        transform: scale(1.1);
    }
    @media (max-width: 425px) {
        font-size: 3.5vw;
    }
`