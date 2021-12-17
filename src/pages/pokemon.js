import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from '../components/Estilos/portfoliostyle';
import { Header } from '../components/Header';
import { Helmet } from 'react-helmet';
import { Footer } from '../components/Footer';
import neoyokio from '../images/neoyokio.png';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    overflow-x: hidden;
}
a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
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
export default function Project() {
    const data = useStaticQuery(graphql`
        query {
            datablog{
                pokemons {
                    imgproject {
                      url
                    }
                    title
                    paragraph
                    imgbtn {
                      url
                    }
                    back
                  }
            }      
        }
    `);

    const { imgproject, title, paragraph, imgbtn, back } = data.datablog.pokemons[0];

    return(
        <>
         <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="icon" href={neoyokio}/>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            <title>Projects</title>
        </Helmet>
        <GlobalStyle />
        <Header />
        <S.Container>
        <Link to="https://suspicious-joliot-975265.netlify.app/"><S.Img src={imgproject.url} alt="project icon"/></Link>
                        <S.readmore>Click on the image to see the page online</S.readmore>
                <S.Title>{title}</S.Title>
                <S.Paragraph>{paragraph}</S.Paragraph>
                <S.hover>
                        <Link to="/Projects"><S.Icon src={imgbtn.url} alt="icon"/></Link>
                        <Link to="/Projects"><S.readmore>{back}</S.readmore></Link>
                </S.hover>
        </S.Container>
        <Footer />
        </>
    )
}