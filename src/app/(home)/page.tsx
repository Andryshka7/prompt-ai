import { Mic, Settings } from 'lucide-react'
import { Header, Footer } from '@/components'

const Home = () => {
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

            <main className='relative z-10 flex flex-1 flex-col items-center justify-center px-6'>
                <div className='mx-auto -mt-36 w-full max-w-4xl text-center'>
                    {/* Hero Section */}
                    <div className='mb-12'>
                        <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
                            Ideas into Prompts
                        </h2>
                        <p className='text-lg text-gray-300 md:text-xl'>Write • Generate • Done</p>
                    </div>

                    {/* Input Container */}
                    <div className='group relative'>
                        {/* Subtle glow effect behind input */}
                        <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 blur-sm transition-opacity duration-500 group-focus-within:opacity-60'></div>

                        <label
                            className='relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 focus-within:border-blue-400/70 focus-within:bg-white/8 focus-within:shadow-lg focus-within:shadow-blue-500/10 hover:bg-white/8 hover:shadow-md hover:shadow-blue-500/5'
                            htmlFor='prompt'
                        >
                            {/* Settings Button */}
                            <button className='flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25'>
                                <Settings className='h-5 w-5' />
                            </button>

                            {/* Main Input */}
                            <input
                                id='prompt'
                                type='text'
                                placeholder='Ask me anything...'
                                className='flex-1 bg-transparent text-lg text-white placeholder-gray-400 outline-none'
                            />

                            {/* Voice Button */}
                            <button className='flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25'>
                                <Mic className='h-5 w-5' />
                            </button>
                        </label>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home
