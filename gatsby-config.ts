import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DevStickers`,
    siteUrl: `https://www.yourdomain.tld`,
    dscription: "Buy the best stickers",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true, // graphql 사용

  // 플러그인 - 각 플러그인의 적용대상 설정
  // filesystem 에서 blog-posts 에 있는 파일정보 가져옴. 
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        path: `${__dirname}/blog-posts`,
      }
    }
  ],
}

export default config
