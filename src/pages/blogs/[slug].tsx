import Blog from "@/types/blog";
import { loadBlogsFromDirectory, loadSpecificBlog } from "@/utils/content";
import md from 'markdown-it';
import Link from "next/link";
import styles from "@/styles/BlogPage.module.scss"

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
        <div className={styles.blog}>
            <nav className={styles.breadcrumb}>
                <Link href="/">Home</Link>
                <div>»</div>
                <Link href="/blogs">Blogs</Link>
            </nav>
            <div className={styles.content}>
                <h1>{props.blog.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(props.blog.content) }} />
            </div>
        </div>
    )
}