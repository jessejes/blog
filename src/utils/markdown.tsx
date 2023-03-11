import md from 'markdown-it';

export function convertMarkdownToHTML(markdownContent: string): JSX.Element {
    return (
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: md().render(markdownContent) }} />
    )
}