'use client'

import { Send } from 'lucide-react'
import { useState, FormEvent } from 'react'
import { VoiceInput, StreamingResponse, PromtSettings } from './components'
import { generatePrompt } from '@/actions'
import { useSettingsStore } from '@/store'

const Input = () => {
    const { model, length, style } = useSettingsStore()

    const [prompt, setPrompt] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)

    const [chunks, setChunks] = useState<string[]>([])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!prompt.trim() || isGenerating) return

        setIsGenerating(true)
        setChunks([])

        try {
            const generatedChunks = await generatePrompt(prompt, { model, length, style })
            setChunks(generatedChunks)
        } catch (error) {
            console.error('Error generating prompt:', error)
            setChunks(['Error generating response. Please try again.'])
        }
    }

    return (
        <div
            className={`mx-auto w-full max-w-4xl text-center duration-700 ease-in-out ${
                chunks.length > 0 ? 'mt-8' : 'mt-[20vh]'
            }`}
        >
            <div className='mb-12'>
                <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
                    Ideas into Prompts
                </h2>
                <p className='text-lg text-gray-300 md:text-xl'>Write • Generate • Done</p>
            </div>

            <div className='w-full'>
                <form onSubmit={handleSubmit} className='group relative'>
                    {/* Subtle glow effect behind input */}
                    <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 blur-sm transition-opacity duration-500 group-focus-within:opacity-60'></div>

                    <label
                        className='relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 focus-within:border-blue-400/70 focus-within:bg-white/8 focus-within:shadow-lg focus-within:shadow-blue-500/10 hover:bg-white/8 hover:shadow-md hover:shadow-blue-500/5'
                        htmlFor='prompt'
                    >
                        <PromtSettings />

                        <input
                            id='prompt'
                            type='text'
                            placeholder='Ask me anything...'
                            className='flex-1 bg-transparent text-lg text-white placeholder-gray-400 outline-none'
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={isGenerating}
                        />

                        <div className='flex items-center gap-0.5'>
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
                        </div>
                    </label>
                </form>

                {chunks.length > 0 && (
                    <StreamingResponse chunks={chunks} onComplete={() => setIsGenerating(false)} />
                )}
            </div>
        </div>
    )
}
export default Input
