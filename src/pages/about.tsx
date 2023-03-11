import MarkdownContent from "@/types/markdown-content";
import { loadContentFromMarkdown } from "@/utils/content";
import { convertMarkdownToHTML } from "@/utils/markdown";
import Head from "next/head";

interface AboutProps {
    content: MarkdownContent
}

export async function getStaticProps() {
    return {
        props: {
            content: loadContentFromMarkdown("src/content/about.md", "about")
        }
    }
}

export default function About(props: AboutProps) {
    return (
        
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/avatar.jpg" />
            </Head>
            {convertMarkdownToHTML(props.content.content)}
        </>   
        
    )
}