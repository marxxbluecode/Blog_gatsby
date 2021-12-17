import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from '../components/Estilos/authorstyle';
import { Header } from '../components/Header';
import { Helmet } from 'react-helmet';
import { Footer } from '../components/Footer';
import neoyokio from '../images/neoyokio.png';
import { createGlobalStyle } from 'styled-components';


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

export default function Project() {
    const data = useStaticQuery(graphql`
        query {
            datablog{
                authors {
                    title
                    paragraph
                    minhafoto {
                      url
                    }
                    paragraphplaylist
                    stuff
                    rupaul {
                      url
                    }
                    evangelion {
                      url
                    }
                    itachi {
                      url
                    }
                    sora {
                      url
                    }
                    pikachu {
                      url
                    }
                    katara {
                      url
                    }
                    shinjisolo {
                      url
                    }
                    danaerys {
                      url
                    }
                    drogon {
                      url
                    }
                    steven {
                      url
                    }
                    carlton {
                      url
                    }
                    mySkills
                    photominha {
                    url
                    }
                    cliqueAqui
                    myskills2
                    mySkill3
                }
            }
        }
    `);	

    const { title, paragraph, myskills2, mySkill3, minhafoto, mySkills, photominha, paragraphplaylist, cliqueAqui, stuff, rupaul, evangelion, itachi, sora, pikachu, katara, shinjisolo, danaerys, drogon, steven, carlton } = data.datablog.authors[0];

    return (
        <>
        <GlobalStyle />
        <Helmet>
            <html lang="en"/>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="icon" href={neoyokio}/>
            <title>Author</title>
        </Helmet>
        <Header/>
        <S.Container>
                <S.title>{title}</S.title>
                <S.Paragraph>{paragraph}</S.Paragraph>
            <S.Content>
                <S.Left>
                   <S.Description>{mySkills}</S.Description>
                </S.Left>
                <S.Right>
                <S.Image src={minhafoto.url} alt="minhafoto"/>
                </S.Right>
            </S.Content>
            <S.Content>
                <S.Left2>
                    <S.Paragraph>{paragraphplaylist}</S.Paragraph>
                </S.Left2>
                <S.Right2>
                    <S.video src="https://open.spotify.com/embed/playlist/2lZmdP9UGkDfwkZFIUxn96?utm_source=generator"  frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></S.video>
                </S.Right2>
            </S.Content>
            <S.title2>{stuff}</S.title2>
            <S.Boxstuff>
              
            <S.stuff7 src={katara.url}/>
            <S.stuff6 src={itachi.url}/>
              
          
            <S.stuff5 src={shinjisolo.url}/>
            <S.stuff2 src={evangelion.url}/>
              
            <S.stuff10 src={steven.url}/>
            <S.stuff1 src={rupaul.url}/>
            <S.stuff3 src={sora.url}/>

            <S.stuff4 src={pikachu.url}/>
            <S.stuff8 src={danaerys.url}/>
            <S.stuff9 src={drogon.url}/>
            </S.Boxstuff>
        </S.Container>
        <S.bottom>
          <S.Description2>{myskills2}</S.Description2><a href="https://medium.com/@nicknagari/guia-b%C3%A1sico-da-n%C3%A3o-binariedade-97de1d9bc84d" ><S.Btn4>{cliqueAqui}</S.Btn4></a>
          <S.Description3>{mySkill3}</S.Description3><a href="https://br1lib.org/booklist/198284/d54eee" ><S.Btn4>{cliqueAqui}</S.Btn4></a>
        </S.bottom>
      
        <Footer/>
        </>
    )
}