import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function AboutUs() {
    // layout component 를 만들고 이 컴포넌트 안에 있는 태그들은 모두 layout 의 children 으로 자동 배치됨.
    return(
    <Layout title="About us">
        <h1>About As</h1>
        <p>We are the happies sticker store</p>
    </Layout>
    )
}

// Head 설정
export const Head = () => <Seo title="About Us"/>

export default AboutUs;