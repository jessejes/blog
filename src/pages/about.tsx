import Navbar from "@/components/navbar";
import MarkdownContent from "@/types/markdown-content";
import { loadContentFromMarkdown } from "@/utils/content";
import { convertMarkdownToHTML } from "@/utils/markdown";

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
    return (convertMarkdownToHTML(props.content.content))
}