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

export const getStaticProps: GetStaticProps = async ({ params }) => {

    if (params == undefined)
        throw new Error("Variable 'params' is undefined")

    return {
        props: {
            blog: loadSpecificBlog(params.slug)
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