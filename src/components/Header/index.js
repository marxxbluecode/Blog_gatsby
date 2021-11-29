import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';

export function Header() {
    const data = useStaticQuery(graphql`
    query{
        datablog{
            headers {
                logo {
                  url
                }
                logoName
                githubicon {
                  url
                }
                linkedinicon {
                  url
                }
                discordIcon {
                  url
                }
                title
                subtitle
                home
                projects
                author
                poems
                headerBackground {
                    url
                }
            }
        }
    }
`);

const { logo, logoName, githubicon, linkedinicon, discordIcon, title, subtitle, home, projects, author, poems, headerBackground } = data.datablog.headers[0];

    return (
        <>
        <S.Container back={headerBackground.url}>
                <S.Nav>
                <S.NavLinks>
                        <S.Logo src={logo.url} alt="logo" />
                        <S.LogoName>{logoName}</S.LogoName>
                    </S.NavLinks>
                <S.NavLinks>
                        <S.icon src={githubicon.url} alt="github" />
                        <S.icon src={linkedinicon.url} alt="linkedin" />
                        <S.icon src={discordIcon.url} alt="discord" />
                </S.NavLinks>
                </S.Nav>
                <S.Content>
                        <S.title>{title}</S.title>
                        <S.subtitle>{subtitle}</S.subtitle>
                </S.Content>
                <S.NavBottom>
                    <S.NavLink>{home}</S.NavLink>
                    <S.NavLink>{projects}</S.NavLink>
                    <S.NavLink>{author}</S.NavLink>
                    <S.NavLink>{poems}</S.NavLink>
                </S.NavBottom>
        </S.Container>
        </>
    );
}