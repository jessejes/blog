import fs from 'fs';
import matter from 'gray-matter';
import Blog from "@/types/blog";

const contentPath = "src/content"

function loadBlogsFromDirectory(): Blog[] {

    const files = fs.readdirSync(`${contentPath}/blogs`);

    return files.map((fileName) => {

        const slug = fileName.replace(".md", "")
        const file = fs.readFileSync(`${contentPath}/blogs/${fileName}`, 'utf-8');
        const readMatter = matter(file);

        return { slug: slug, title: readMatter.data["title"], content: readMatter.content };
    })
}

function loadSpecificBlog(slug: string | string[] | undefined) {

    console.log(`${contentPath}/blogs/${slug}.md`)

    const file = fs.readFileSync(`${contentPath}/blogs/${slug}.md`, 'utf-8');
    const readMatter = matter(file);

    return { slug: slug, title: readMatter.data["title"], content: readMatter.content };
}

export { loadSpecificBlog, loadBlogsFromDirectory }