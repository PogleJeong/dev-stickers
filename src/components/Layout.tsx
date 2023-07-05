import { Link } from "gatsby";
import React from "react";

interface ILayoutProps {
    children : any;
    title: string;
}

// children 에는 자동으로 해당 컴포넌트의 자식들이 할당됨
export default function Layout({children, title}:ILayoutProps) {
    return (
    <div>
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about-us">About us</Link>
                </li>
                <li>
                <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
        <main>
            <h1>{title}</h1>   
            {children}
        </main>
    </div>
    )
}