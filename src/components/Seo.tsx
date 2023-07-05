import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
    title: string;
}

//Header 를 적용하는 부분: 각 페이지에 맞게 Header 를 작성해주면 됨.
export default function Seo({title}:ISeoProps) {
    /*
        useStaticQuery는 빌드 시 리액트 훅을 사용하여 Gatsby의 GraphQL 데이터 계층을 쿼리하는 기능을 제공합니다. 
        이를 통해 React 컴포넌트는 구문 분석, 평가 및 컴포넌트에 삽입될 GraphQL 쿼리를 통해 데이터를 검색할 수 있습니다.
        useStaticQuery 훅은 모든 컴포넌트 또는 페이지에서 사용할 수 있습니다.
        
        실행 전에 typescript 처럼 query 를 먼저 점검해줌
    */
    const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
        query SeoData {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    console.log(data.site?.siteMetadata?.title);
    return(<title>{title} || {data.site?.siteMetadata?.title}</title>)
}

export const Head = () => <Seo title="Home"></Seo>