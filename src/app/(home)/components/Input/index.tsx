'use client'

import { Settings, Send } from 'lucide-react'
import { useState, useCallback, FormEvent } from 'react'
import { VoiceInput, StreamingResponse } from './components'
import { generatePrompt } from '@/actions'

const Input = () => {
    const [prompt, setPrompt] = useState('')

    const [isGenerating, setIsGenerating] = useState(false)

    const [chunks, setChunks] = useState<string[]>([])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!prompt.trim() || isGenerating) return

        console.log('prompt', prompt)

        setIsGenerating(true)
        setChunks([])

        try {
            const generatedChunks = await generatePrompt(prompt, {})
            setChunks(generatedChunks)
        } catch (error) {
            console.error('Error generating prompt:', error)
            setChunks(['Error generating response. Please try again.'])
        }
    }

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='group relative'>
                {/* Subtle glow effect behind input */}
                <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 blur-sm transition-opacity duration-500 group-focus-within:opacity-60'></div>

                <label
                    className='relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 focus-within:border-blue-400/70 focus-within:bg-white/8 focus-within:shadow-lg focus-within:shadow-blue-500/10 hover:bg-white/8 hover:shadow-md hover:shadow-blue-500/5'
                    htmlFor='prompt'
                >
                    {/* Settings Button */}
                    <button
                        type='button'
                        className='flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25'
                    >
                        <Settings className='h-5 w-5' />
                    </button>

                    {/* Main Input */}
                    <input
                        id='prompt'
                        type='text'
                        placeholder='Ask me anything...'
                        className='flex-1 bg-transparent text-lg text-white placeholder-gray-400 outline-none'
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        disabled={isGenerating}
                    />

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={!prompt.trim() || isGenerating}
                        className='flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                    >
                        <Send className='h-5 w-5' />
                    </button>

                    <VoiceInput
                        onTranscript={async (transcript: string) =>
                            setPrompt((prev) => `${prev} ${transcript}`)
                        }
                        disabled={isGenerating}
                    />
                </label>
            </form>

            {chunks.length > 0 && (
                <div className='mt-6'>
                    <StreamingResponse chunks={chunks} onComplete={() => setIsGenerating(false)} />
                </div>
            )}
        </div>
    )
}
export default Input
