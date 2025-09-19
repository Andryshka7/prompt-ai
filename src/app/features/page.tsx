import { Header } from '@/components'
import { ArrowLeft, Mic, Settings, Zap, Brain, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Features = () => {
    return (
        <div className='flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-slate-900 to-black'>
            {/* Background Effects */}
            <div className='absolute inset-0 overflow-hidden'>
                {/* Main glowing orbs */}
                <div className='absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-blue-500 opacity-60 mix-blend-multiply blur-3xl filter'></div>
                <div className='absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-cyan-500 opacity-60 mix-blend-multiply blur-3xl filter delay-1000'></div>
                <div className='absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-indigo-500 opacity-40 mix-blend-multiply blur-3xl filter delay-500'></div>
                <div className='absolute top-20 left-20 h-60 w-60 animate-pulse rounded-full bg-purple-500 opacity-30 mix-blend-multiply blur-2xl filter delay-700'></div>
                <div className='absolute right-20 bottom-20 h-60 w-60 animate-pulse rounded-full bg-pink-500 opacity-30 mix-blend-multiply blur-2xl filter delay-300'></div>

                {/* Additional subtle glowing elements */}
                <div className='absolute top-1/4 right-1/4 h-32 w-32 animate-pulse rounded-full bg-emerald-500 opacity-25 mix-blend-multiply blur-2xl filter delay-200'></div>
                <div className='absolute bottom-1/3 left-1/3 h-40 w-40 animate-pulse rounded-full bg-teal-500 opacity-20 mix-blend-multiply blur-2xl filter delay-800'></div>
                <div className='absolute top-3/4 right-1/3 h-24 w-24 animate-pulse rounded-full bg-violet-500 opacity-25 mix-blend-multiply blur-xl filter delay-400'></div>
                <div className='absolute top-1/6 left-1/2 h-28 w-28 animate-pulse rounded-full bg-sky-500 opacity-20 mix-blend-multiply blur-xl filter delay-600'></div>

                {/* Subtle accent lines */}
                <div className='absolute top-1/2 left-0 h-px w-1/3 animate-pulse bg-gradient-to-r from-transparent via-blue-400/30 to-transparent delay-1200'></div>
                <div className='absolute right-0 bottom-1/4 h-px w-1/4 animate-pulse bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent delay-900'></div>
                <div className='absolute top-1/3 right-0 h-1/3 w-px animate-pulse bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent delay-1500'></div>

                {/* Corner accent elements */}
                <div className='absolute top-0 right-0 h-32 w-32 animate-pulse rounded-bl-full bg-gradient-to-bl from-blue-500/10 to-transparent delay-500'></div>
                <div className='absolute bottom-0 left-0 h-32 w-32 animate-pulse rounded-tr-full bg-gradient-to-tr from-cyan-500/10 to-transparent delay-1000'></div>
            </div>

            <Header />

            <main className='relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16'>
                <div className='mx-auto -mt-15 w-full max-w-6xl'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {/* Voice Input Feature */}
                        <div className='group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/20'>
                            <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500'>
                                <Mic className='h-8 w-8 text-white' />
                            </div>
                            <h3 className='mb-4 text-xl font-semibold text-white'>Voice Input</h3>
                            <p className='leading-relaxed text-gray-300'>
                                Speak naturally and let our AI understand your requests. Perfect for
                                hands-free operation and quick idea capture.
                            </p>
                        </div>

                        {/* Real-time Streaming Feature */}
                        <div className='group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/20'>
                            <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500'>
                                <Zap className='h-8 w-8 text-white' />
                            </div>
                            <h3 className='mb-4 text-xl font-semibold text-white'>
                                Real-time Streaming
                            </h3>
                            <p className='leading-relaxed text-gray-300'>
                                Get responses as they're generated, not all at once. Experience the
                                magic of AI thinking in real-time.
                            </p>
                        </div>

                        {/* Smart AI Feature */}
                        <div className='group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/20'>
                            <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500'>
                                <Brain className='h-8 w-8 text-white' />
                            </div>
                            <h3 className='mb-4 text-xl font-semibold text-white'>Smart AI</h3>
                            <p className='leading-relaxed text-gray-300'>
                                Powered by OpenAI GPT-4o for intelligent, context-aware responses
                                that understand your intent and deliver perfect prompts.
                            </p>
                        </div>

                        {/* Prompt Optimization Feature */}
                        <div className='group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20'>
                            <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500'>
                                <Sparkles className='h-8 w-8 text-white' />
                            </div>
                            <h3 className='mb-4 text-xl font-semibold text-white'>
                                Prompt Optimization
                            </h3>
                            <p className='leading-relaxed text-gray-300'>
                                Transform basic ideas into perfectly crafted prompts that get better
                                results from any AI model.
                            </p>
                        </div>

                        {/* Settings & Customization Feature */}
                        <div className='group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-pink-500/20'>
                            <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-red-500'>
                                <Settings className='h-8 w-8 text-white' />
                            </div>
                            <h3 className='mb-4 text-xl font-semibold text-white'>
                                Customizable Settings
                            </h3>
                            <p className='leading-relaxed text-gray-300'>
                                Fine-tune your experience with customizable settings for prompt
                                style, length, and AI model preferences.
                            </p>
                        </div>

                        {/* Clean Interface Feature */}
                        <div className='group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/20'>
                            <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500'>
                                <div className='h-8 w-8 rounded-lg bg-white/20'></div>
                            </div>
                            <h3 className='mb-4 text-xl font-semibold text-white'>
                                Clean Interface
                            </h3>
                            <p className='leading-relaxed text-gray-300'>
                                Minimalist design focused on what matters most - turning your ideas
                                into perfect prompts without distractions.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Features
