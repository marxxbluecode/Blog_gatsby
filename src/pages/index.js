import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { createGlobalStyle } from 'styled-components';
import neoyokio from '../images/neoyokio.png';

const GlobalStyle = createGlobalStyle`
@import url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
@import(href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'San Francisco Display', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
body {
  background-color: #fff;
}
Link {
  font-size: .9vw;
  margin-right: 1vw;
  list-style: none;
  &:hover {
    color: #fff;
    opacity: 1;
  }

}
::-webkit-scrollbar-track {
  background-color: #F4F4F4;
}
::-webkit-scrollbar {
  width: 6px;
  background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
  background: #dad7d7;
}
`

export default function index() {
  return(
    <>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="icon" href={neoyokio}/>
      <title>Marxianismos</title>
    </Helmet>
    <GlobalStyle />
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
 