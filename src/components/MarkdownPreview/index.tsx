'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import 'highlight.js/styles/github-dark.css'

interface Props {
    content: string
}

const MarkdownPreview = ({ content }: Props) => {
    return (
        <div className='prose prose-invert prose-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 max-w-none'>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    h1: ({ children }) => (
                        <h1 className='mb-4 border-b border-white/20 pb-2 text-2xl font-bold text-white'>
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className='mb-3 border-b border-white/10 pb-1 text-xl font-semibold text-white'>
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className='mb-2 text-lg font-medium text-white'>{children}</h3>
                    ),
                    h4: ({ children }) => (
                        <h4 className='mb-2 text-base font-medium text-gray-200'>{children}</h4>
                    ),
                    p: ({ children }) => (
                        <p className='mb-3 leading-relaxed text-gray-200'>{children}</p>
                    ),
                    ul: ({ children }) => (
                        <ul className='mb-3 ml-4 list-disc space-y-1 text-gray-200'>{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className='mb-3 ml-4 list-decimal space-y-1 text-gray-200'>
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => <li className='text-gray-200'>{children}</li>,
                    strong: ({ children }) => (
                        <strong className='font-semibold text-white'>{children}</strong>
                    ),
                    em: ({ children }) => <em className='text-gray-300 italic'>{children}</em>,
                    code: ({ children, className }) => {
                        const isInline = !className
                        if (isInline) {
                            return (
                                <code className='rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-green-400'>
                                    {children}
                                </code>
                            )
                        }
                        return <code className={className}>{children}</code>
                    },
                    pre: ({ children }) => (
                        <pre className='mb-4 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4'>
                            {children}
                        </pre>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className='mb-4 rounded-r border-l-4 border-green-400 bg-white/5 py-2 pl-4 text-gray-300 italic'>
                            {children}
                        </blockquote>
                    ),
                    table: ({ children }) => (
                        <div className='mb-4 overflow-x-auto'>
                            <table className='min-w-full border-collapse rounded-lg border border-white/20'>
                                {children}
                            </table>
                        </div>
                    ),
                    thead: ({ children }) => <thead className='bg-white/10'>{children}</thead>,
                    th: ({ children }) => (
                        <th className='border border-white/20 px-4 py-2 text-left font-semibold text-white'>
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className='border border-white/20 px-4 py-2 text-gray-200'>
                            {children}
                        </td>
                    ),
                    a: ({ children, href }) => (
                        <a
                            href={href}
                            className='text-green-400 underline transition-colors hover:text-green-300'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {children}
                        </a>
                    ),
                    hr: () => <hr className='my-6 border-white/20' />
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownPreview
