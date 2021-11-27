import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
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
    
`
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vw 10vw 2vw 10vw;
    width: 100%;
    height: 10vh;
    margin-bottom: 2vh;
`
export const LogoName = styled.p`
    font-size: 2vw;
    font-weight: bold;
    color: #fff;
`
export const NavLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 12vw;
`
export const Logo = styled.img`
    width: 2vw;
`
export const icon = styled.img`
    width: 2vw;
`
export const title = styled.h1`
    font-size: 4vw;
    color: #fff;
    margin-top: 15vh;
`
export const subtitle = styled.p`
    font-size: 2vw;
    color: #fff;
    opacity: 0.5;
`
export const NavBottom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2vw 10vw 2vw 10vw;
    position: relative;
    top: 40vh;
    
` 
export const NavLink = styled.li`
    font-size: 1.2vw;
    color: #fff;
    list-style: none;
    padding: 0.6vw;
`