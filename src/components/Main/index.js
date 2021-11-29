import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';

export function Main() {
    const data = useStaticQuery(graphql`
    query {
        datablog {
            mains {
                mainTitle
                mainParagraph
                cachtphrase
              }
        }
    }
`);

    const { mainTitle, mainParagraph, cachtphrase } = data.datablog.mains[0];

    return (
        <>
            <S.Container>
                <S.Content>
                    <S.MainTitle>{mainTitle}</S.MainTitle>
                    <S.MainParagraph>{mainParagraph}</S.MainParagraph>
                    <S.Cachtphrase>{cachtphrase}</S.Cachtphrase>
                </S.Content>
               
            </S.Container>
        </>
    );
}