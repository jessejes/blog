import md from 'markdown-it';

export function convertMarkdownToHTML(markdownContent: string): JSX.Element {
    return (
        <div dangerouslySetInnerHTML={{ __html: md().render(markdownContent) }} />
    )
}