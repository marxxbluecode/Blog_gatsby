import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';
import { Link } from 'gatsby';

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
                        <a href="https://github.com/marxxbluecode"><S.icon src={githubicon.url} alt="github" /></a>
                        <a href="https://www.linkedin.com/in/marx-freitas-aa87aa19b/"><S.icon src={linkedinicon.url} alt="linkedin" /></a>
                        <a href="https://discord.com/channels/@me"><S.icon src={discordIcon.url} alt="discord" /></a>
                </S.NavLinks>
                </S.Nav>
                <S.Content>
                        <S.title>{title}</S.title>
                        <S.subtitle>{subtitle}</S.subtitle>
                </S.Content>
                <S.NavBottom>
                    <S.NavLink>
                        <Link to="/">{home}</Link>
                    </S.NavLink>
                    <S.NavLink>
                        <Link to="/Projects">{projects}</Link>
                    </S.NavLink>
                    <S.NavLink>
                        <Link to="/Author">{author}</Link>
                    </S.NavLink>
                    <S.NavLink>
                        <Link to="/Poems">{poems}</Link>
                    </S.NavLink>
                   
                </S.NavBottom>
        </S.Container>
        </>
    );
}