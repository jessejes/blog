import Blog from "@/types/blog";
import { loadBlogsFromDirectory, loadSpecificBlog } from "@/utils/content";
import { convertMarkdownToHTML } from "@/utils/markdown";
import md from 'markdown-it';
import Head from "next/head";
import Link from "next/link";


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
        <>
            <Head>
                <title>{props.blog.title}</title>
                <link rel="icon" href="/avatar.jpg" />
            </Head>
            <div className="flex flex-col flex-grow justify-start items-start px-6 gap-1">
                <nav className="inline-flex">
                    <Link className="text-xl text-white" href="/">Home</Link>
                    <div className="text-xl text-white px-1">»</div>
                    <Link className="text-xl text-white" href="/blogs">Blogs</Link>
                </nav>
                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl">{props.blog.title}</h1>
                    <div className="flex">
                        {convertMarkdownToHTML(props.blog.content)}
                    </div>
                </div>
            </div>
        </>
    )
}