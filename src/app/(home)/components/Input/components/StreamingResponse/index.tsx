'use client'

import { useEffect, useState, useRef } from 'react'
import { Copy, Check, Expand, Shrink } from 'lucide-react'

interface Props {
    chunks: string[]
    onComplete?: (fullText: string) => void
}

const StreamingResponse = ({ chunks, onComplete }: Props) => {
    const [displayText, setDisplayText] = useState('')
    const [isStreaming, setIsStreaming] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const isGeneratingRef = useRef(false)

    useEffect(() => {
        if (!chunks.length || isGeneratingRef.current) return

        const startStreaming = async () => {
            isGeneratingRef.current = true
            setIsStreaming(true)
            setDisplayText('')

            try {
                let fullText = ''

                // Simple streaming animation
                for (let i = 0; i < chunks.length; i++) {
                    if (!isGeneratingRef.current) break

                    fullText += chunks[i]
                    setDisplayText(fullText)

                    if (i < chunks.length - 1) {
                        await new Promise((resolve) => setTimeout(resolve, 20))
                    }
                }

                if (isGeneratingRef.current) {
                    setIsStreaming(false)
                    onComplete?.(fullText)
                }
            } catch (error) {
                console.error('Streaming error:', error)
                setDisplayText('Error generating response. Please try again.')
                setIsStreaming(false)
            } finally {
                isGeneratingRef.current = false
            }
        }

        startStreaming()

        return () => {
            isGeneratingRef.current = false
        }
    }, [chunks])

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(displayText)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy text:', error)
        }
    }

    if (!chunks.length) return null

    return (
        <div className='mt-6 w-full max-w-4xl'>
            <div className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm'>
                <div className='mb-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-green-400'></div>
                        <span className='text-sm text-gray-400'>
                            {isStreaming ? 'Generating...' : 'Complete'}
                        </span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={handleCopy}
                            disabled={isStreaming}
                            className='flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25 disabled:pointer-events-none disabled:opacity-50'
                            title={isCopied ? 'Copied!' : 'Copy to clipboard'}
                        >
                            {isCopied ? (
                                <Check className='h-4 w-4 text-green-400' />
                            ) : (
                                <Copy className='h-4 w-4' />
                            )}
                        </button>
                        <button
                            onClick={() => {}}
                            disabled={isStreaming}
                            className='flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25 disabled:pointer-events-none disabled:opacity-50'
                            title='Expand'
                        >
                            <Expand className='h-4 w-4' />
                        </button>
                    </div>
                </div>

                <div className='relative max-h-75 min-h-18 overflow-hidden text-white transition-all'>
                    <div className='text-left font-mono text-sm leading-relaxed whitespace-pre-wrap'>
                        <span className='relative'>
                            {displayText}
                            {isStreaming && (
                                <span className='absolute ml-1 h-5 w-0.5 animate-pulse bg-white'></span>
                            )}
                        </span>
                    </div>
                    {displayText.length > 500 && (
                        <div className='pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t from-white/5 to-transparent' />
                    )}
                </div>
            </div>
        </div>
    )
}

export default StreamingResponse
