'use client'

import { useEffect, useState, useRef } from 'react'
import { ExpandPromt, CopyPrompt } from './components'

import { prompt } from '@/mockData'
import { Prompt } from '@/types'

interface Props {
    chunks: string[]
    onComplete?: (fullText: string) => void
}

const StreamingResponse = ({ chunks, onComplete }: Props) => {
    const [displayText, setDisplayText] = useState('')
    const [isStreaming, setIsStreaming] = useState(false)

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
                        await new Promise((resolve) => setTimeout(resolve, 10))
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

    if (!chunks.length) return <div className='mt-6 w-full max-w-4xl' />

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
                    <div className='flex items-center'>
                        <CopyPrompt prompt={prompt as Prompt} disabled={isStreaming} />
                        <ExpandPromt prompt={prompt as Prompt} disabled={isStreaming} />
                    </div>
                </div>

                <div className='relative max-h-75 min-h-6 overflow-y-auto text-white transition-all'>
                    <div className='text-left font-mono text-sm leading-relaxed whitespace-pre-wrap'>
                        <span className='relative'>
                            {displayText}
                            {isStreaming && (
                                <span className='absolute ml-1 h-5 w-0.5 animate-pulse bg-white'></span>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StreamingResponse
