import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';

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

    const { copyright, home, projects, author, poems } = data.datablog.footers[0];

    return (
        <>
        <S.Container>
            <S.Copyright>{copyright}</S.Copyright> 
            <S.Boxlinks>
                <S.Link to={home}>Home</S.Link>
                <S.Link to={projects}>Projects</S.Link>
                <S.Link to={author}>Author</S.Link>
                <S.Link to={poems}>Poems</S.Link>
            </S.Boxlinks>
        </S.Container>
        </>
    );
}