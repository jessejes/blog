import Blog from "@/types/blog";
import { loadBlogsFromDirectory, loadSpecificBlog } from "@/utils/content";
import { GetStaticProps } from "next";
import md from 'markdown-it';

interface BlogPageProps {
    blog: Blog;
}

export async function getStaticPaths() {

    return {
        paths: loadBlogsFromDirectory().map(blog => "/blogs/" + blog.slug.replace(".md", "")),
        fallback: false
    }
}

export async function getStaticProps({ params: { slug }}) {
    return {
        props: {
            blog: loadSpecificBlog(slug)
        }
    }
}

export default function BlogPage(props: BlogPageProps) {

    return (
        <div>
            <h1>{props.blog.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(props.blog.content) }} />
        </div>
    )
}