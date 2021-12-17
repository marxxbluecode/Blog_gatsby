import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';
import { Link } from 'gatsby';

export function Footer() {
    const data = useStaticQuery(graphql`
        query {
            datablog {
                footers {
                    copyright
                    home
                    projects
                    author
                    poems
                  }
            }
        }
`);

    const {copyright, home, projects, author, poems } = data.datablog.footers[0];

    return (
        <>
        <S.Container>
            <S.Copyright>{copyright}</S.Copyright> 
            <S.Boxlinks>
                <Link to= "/">{home}</Link>
                <Link to= "/Projects">{projects}</Link>
                <Link to= "/Author">{author}</Link>
                <Link to= "/Poems">{poems}</Link>
            </S.Boxlinks>
        </S.Container>
        </>
    );
}