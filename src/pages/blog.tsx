import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function Blog({ data }: PageProps<Queries.BlogPostsQuery>){
    return (
    <Layout title="Blog">
        <h1>Hello welcome to my blog</h1>
        <section>
            {data.allMdx.nodes.map((file, index) => 
            <article key={index}>
                <Link to={`/blog/${file.frontmatter?.slug}`} >
                    <h3>{file.frontmatter?.title}</h3>
                    <h5>{file.frontmatter?.author} in : {file.frontmatter?.category}</h5>
                    <h6>{file.frontmatter?.date}</h6>
                    <hr/>
                    <p>{file.excerpt}</p>
                </Link>
            </article>)}
        </section>
    </Layout>
    )
}

// 해당 코드의 Blog 컴포넌트에 바로 적용됨 (프레임워크)
// query 정보는 `로컬서버/___graphql` 에 접속해서 확인할 수 있음
// 쿼리 데이터는 설정한 경로의 mdx 파일의 형식에 맞춰야함.
export const query = graphql`
    query BlogPosts {
        allMdx {
            nodes {
                frontmatter {
                    author
                    category
                    date
                    title
                    slug
                }
                excerpt(pruneLength: 50)
            }
        }
    }
    
`;

// Head 설정
export const Head = () => <Seo title="Blog"/>

export default Blog;