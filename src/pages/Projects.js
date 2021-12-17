import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from '../components/Estilos/pojectstylo';
import { Header } from '../components/Header';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import neoyokio from '../images/neoyokio.png';
import { Footer } from '../components/Footer';



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
                projects {
                    title
                    subtitle
                    project1 {
                      url
                    }
                    project2 {
                      url
                    }
                    project3 {
                      url
                    }
                    project4 {
                      url
                    }
                    project5 {
                      url
                    }
                    project6 {
                      url
                    }
                    project7 {
                      url
                    }
                    project8 {
                      url
                    }
                    project9 {
                      url
                    }
                    titlePro1
                    titlePro2
                    titlePro3
                    titlePro4
                    titlePro5
                    titlePro6
                    titlePro7
                    titlePro8
                    titlePro9
                    paragraphpro1
                    paragraphpro2
                    paragraphpro3
                    paragraphpro4
                    paragraphPro5
                    paragraphPro6
                    paragraphpro7
                    paragraphPro8
                    paragraphpro9
                    iconhead {
                        url
                      }
                      readmore
                      time
                      time2
                      time3
                    
                    
                  }
            }
        }
    `);

    const { title, subtitle, project1, project2, project3, project4, project5, project6, project7, project8, project9, titlePro1, titlePro2, titlePro3, titlePro4, titlePro5, titlePro6, titlePro7, titlePro8, titlePro9, paragraphpro1, paragraphpro2, paragraphpro3, paragraphpro4, paragraphPro5, paragraphPro6, paragraphpro7, paragraphPro8, paragraphpro9, iconhead, readmore, time, time2, time3 } = data.datablog.projects[0];

    return (
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
            <S.Main>
                <S.BoxText>
                    <S.Title>{title}</S.Title>
                    <S.Subtitle>{subtitle}</S.Subtitle>
                </S.BoxText>
                <S.Row>
                    <S.BoxImage >
                        <S.Imghover>
                            <S.Image src={project1.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro1}</S.TitleImg>
                        <S.Paragraph>{paragraphpro1}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="Hades"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="Hades"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time2}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                    <S.BoxImage >
                        <S.Imghover>
                            <S.Image src={project2.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro2}</S.TitleImg>
                        <S.Paragraph>{paragraphpro2}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="strytegy"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="strytegy"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                    <S.BoxImage >
                        <S.Imghover>
                            <S.Image src={project3.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro3}</S.TitleImg>
                        <S.Paragraph>{paragraphpro3}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="Tomate"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="Tomate"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time3}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                </S.Row>
                <S.Row>
                    <S.BoxImage >
                        <S.Imghover>
                            <S.Image src={project4.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro4}</S.TitleImg>
                        <S.Paragraph>{paragraphpro4}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="streaming"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="streaming"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time2}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                    <S.BoxImage >
                    <S.Imghover>
                            <S.Image src={project5.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro5}</S.TitleImg>
                        <S.Paragraph>{paragraphPro5}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="pokemon"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="pokemon"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time3}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                    <S.BoxImage >
                        <S.Imghover>
                            <S.Image src={project6.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro6}</S.TitleImg>
                        <S.Paragraph>{paragraphPro6}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="todo"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="todo"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time2}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                </S.Row>
                <S.Row>
                    <S.BoxImage >
                        <S.Imghover>
                            <S.Image src={project7.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro7}</S.TitleImg>
                        <S.Paragraph>{paragraphpro7}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="vaporwave"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="vaporwave"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time3}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                    <S.BoxImage >
                        <S.Imghover>
                            <S.Image src={project8.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro8}</S.TitleImg>
                        <S.Paragraph>{paragraphPro8}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="car"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="car"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                    <S.BoxImage >
                        <S.Imghover>
                            <S.Image src={project9.url} alt="project1" />
                        </S.Imghover>
                        <S.TitleImg>{titlePro9}</S.TitleImg>
                        <S.Paragraph>{paragraphpro9}</S.Paragraph>
                        <S.Boxbottom>
                            <S.hover>
                                <a href="taxi"><S.Icon src={iconhead.url} alt="icon"/></a>
                                <a href="taxi"><S.readmore>{readmore}</S.readmore></a>
                            </S.hover>
                            <S.Time>{time}</S.Time>
                        </S.Boxbottom>
                    </S.BoxImage>
                </S.Row>
            </S.Main>
            <Footer />
        </> 
    );
}