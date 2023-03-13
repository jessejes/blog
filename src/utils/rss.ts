import { Feed } from "feed";
import fs from "fs";
import md from 'markdown-it';
import { loadBlogsFromDirectory } from "./content";

export default async function generateRSS() {

    const blogs = loadBlogsFromDirectory();
    const siteURL = process.env.VERCEL_URL;
    const date = new Date();
    const author = {
      name: "jessejes",
      email: "blog@jessejes.com",
      link: siteURL
    };

    const feed = new Feed({
      title: "jessejes",
      description: "jessejes's blog",
      id: siteURL,
      link: siteURL,
      image: `${siteURL}/avatar.jpg`,
      favicon: `${siteURL}/avatar.jpg`,
      copyright: `All rights reserved ${date.getFullYear()}, jessejes`,
      updated: date,
      generator: "Feed for Node.js",
      feedLinks: {
        rss2: `${siteURL}/rss/feed.xml`,
      },
      author,
    });

    blogs.forEach((blog) => {
      const url = `${siteURL}/blog/${blog.slug}`;
      feed.addItem({
        title: blog.title,
        id: url,
        link: url,
        description: blog.description,
        content: md().render(blog.content),
        author: [author],
        contributor: [author],
        date: new Date(blog.date),
      });
    });
  
    fs.mkdirSync("./public/rss", { recursive: true });
    fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
      
}