import { Prompt } from '@/types'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface Props {
    prompt: Prompt
    disabled?: boolean
}

const CopyButton = ({ prompt, disabled }: Props) => {
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
        <button
            onClick={handleCopy}
            disabled={disabled}
            className='flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25 disabled:pointer-events-none disabled:opacity-50'
            title={isCopied ? 'Copied!' : 'Copy to clipboard'}
        >
            {isCopied ? <Check className='h-4 w-4 text-green-400' /> : <Copy className='h-4 w-4' />}
        </button>
    )
}
export default CopyButton
