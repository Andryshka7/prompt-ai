import { Modal, MarkdownPreview } from '@/components'
import { Prompt } from '@/types'
import { formatDate } from '@/utils'
import { Check, Copy, Expand, X } from 'lucide-react'
import { useState } from 'react'

interface Props {
    prompt: Prompt
    disabled?: boolean
}

const ExpandPromt = ({ prompt, disabled }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt.content)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy text:', error)
        }
    }
    return (
        <>
            <button
                onClick={() => setIsExpanded(true)}
                disabled={disabled}
                className='flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25 disabled:pointer-events-none disabled:opacity-50'
                title='Expand'
            >
                <Expand className='h-4 w-4' />
            </button>

            <Modal isOpen={isExpanded} onClose={() => setIsExpanded(false)}>
                <div className='relative mx-4 w-full max-w-5xl rounded-2xl border border-white/10 bg-neutral-800/50 p-6 backdrop-blur-sm'>
                    {/* Header */}
                    <div className='mb-3 flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='h-3 w-3 rounded-full bg-green-400'></div>
                            <h2 className='text-xl font-semibold text-white'>Prompt Details</h2>
                        </div>
                        <div className='flex items-center'>
                            <button
                                onClick={handleCopy}
                                className='flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25'
                                title={isCopied ? 'Copied!' : 'Copy to clipboard'}
                            >
                                {isCopied ? (
                                    <Check className='h-4 w-4 text-green-400' />
                                ) : (
                                    <Copy className='h-4 w-4' />
                                )}
                            </button>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className='flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25'
                                title='Close'
                            >
                                <X className='h-5 w-5' />
                            </button>
                        </div>
                    </div>

                    <div className='scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 max-h-130 overflow-y-auto rounded-xl border border-white/5 bg-black/20 p-4'>
                        <MarkdownPreview content={prompt.content} />
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default ExpandPromt
