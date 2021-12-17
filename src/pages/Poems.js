import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from '../components/Estilos/Poemstyle';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';
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
                poems {
                    title
                    paragraphpoem
                    title1
                    title10
                    title2
                    title3
                    title4
                    title5
                    title6
                    title7
                    title8
                    title9
                    poem10
                    poem3
                    poem4
                    poem5
                    poem6
                    poem7
                    poem8
                    poem9
                    poema1
                    poema2
                  }

            }
        }
    `);	

    const { title, paragraphpoem, title1, title10, title2, title3, title4, title5, title6, title7, title8, title9,poem10, poem3, poem4, poem5, poem6, poem7, poem8, poem9, poema1, poema2} = data.datablog.poems[0];

    return (
        <>
         <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="icon" href={neoyokio}/>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            <title>Poems</title>
        </Helmet>
        <GlobalStyle />
        <Header />
            <S.Container>
                <S.Content>
                    <S.title>{title}</S.title>
                    <S.Paragraph>{paragraphpoem}</S.Paragraph>

                    <S.Poem>
                        <S.Titlepoem>{title1}</S.Titlepoem>
                        <S.Paragraphpoem>{poema1}</S.Paragraphpoem>
                    </S.Poem>
                    <S.Poemb>
                        <S.Titlepoem>{title2}</S.Titlepoem>
                        <S.Paragraphpoem>{poema2}</S.Paragraphpoem>
                    </S.Poemb>
                    <S.Poemc>
                        <S.Titlepoem>{title3}</S.Titlepoem>
                        <S.Paragraphpoem>{poem3}</S.Paragraphpoem>
                    </S.Poemc>
                    <S.Poemd>
                        <S.Titlepoem>{title4}</S.Titlepoem>
                        <S.Paragraphpoem>{poem4}</S.Paragraphpoem>
                    </S.Poemd>
                    <S.Poeme>
                        <S.Titlepoem>{title5}</S.Titlepoem>
                        <S.Paragraphpoem>{poem5}</S.Paragraphpoem>
                    </S.Poeme>
                    <S.Poemf>
                        <S.Titlepoem>{title6}</S.Titlepoem>
                        <S.Paragraphpoem>{poem6}</S.Paragraphpoem>
                    </S.Poemf>
                    <S.Poemg>
                        <S.Titlepoem>{title7}</S.Titlepoem>
                        <S.Paragraphpoem>{poem7}</S.Paragraphpoem>
                    </S.Poemg>
                    <S.Poemh>
                        <S.Titlepoem>{title8}</S.Titlepoem>
                        <S.Paragraphpoem>{poem8}</S.Paragraphpoem>
                    </S.Poemh>
                    <S.Poemi>
                        <S.Titlepoem>{title9}</S.Titlepoem>
                        <S.Paragraphpoem>{poem9}</S.Paragraphpoem>
                    </S.Poemi>
                    <S.Poemj>
                        <S.Titlepoem>{title10}</S.Titlepoem>
                        <S.Paragraphpoem>{poem10}</S.Paragraphpoem>
                    </S.Poemj>
                </S.Content>
                

            </S.Container>
            <Footer />
        </>
    )
}