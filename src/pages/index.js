import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
// import { Main } from "../components/Main";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'San Francisco Display', sans-serif;
}
body {
  background-color: #fff;
}
`

export default function index() {
  return(
    <>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Marxianismos</title>
    </Helmet>
    <GlobalStyle />
    <Header/>
    <h1>Ola meu parças</h1>
    <p>queridinhos</p>
    {/* <Main/>
    <Footer/> */}
    </>
  )
}