import Blog from '@/types/blog';
import { loadBlogsFromDirectory } from '@/utils/content';
import Link from 'next/link';

export interface BlogsProps {
    blogs: Blog[]
}

export async function getStaticProps() {
    return {
      props: {
            blogs: loadBlogsFromDirectory()
        }
    };
}

export default function Blogs(props: BlogsProps) {

    return (
        <>
            {props.blogs.map((blog) => (
                <Link key={blog.slug} href={`blogs/${blog.slug}`}>{blog.title}</Link>
            ))}
        </>
    )
}