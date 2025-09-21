'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className='relative z-50'>
            <div className='mx-auto flex max-w-7xl items-center justify-between p-6'>
                {/* Logo */}
                <Link href='/' className='flex items-center' onClick={closeMobileMenu}>
                    <h1 className='text-2xl font-bold text-white md:text-3xl'>
                        <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent'>
                            Prompt AI
                        </span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className='hidden items-center space-x-8 md:flex'>
                    <Link
                        href='/features'
                        className='text-gray-300 transition-colors hover:text-white hover:drop-shadow-lg hover:drop-shadow-blue-500/50'
                    >
                        Features
                    </Link>

                    <Link
                        href='/about'
                        className='text-gray-300 transition-colors hover:text-white hover:drop-shadow-lg hover:drop-shadow-cyan-500/50'
                    >
                        About
                    </Link>

                    <button className='rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25'>
                        Contact
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className='relative z-[80] flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-white/10 md:hidden'
                    onClick={toggleMobileMenu}
                    aria-label='Toggle mobile menu'
                >
                    <div className='relative flex h-5 w-5 items-center justify-center'>
                        {/* Top line */}
                        <span
                            className={`absolute h-0.5 w-4 bg-white transition-all duration-300 ${
                                isMobileMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
                            }`}
                        />
                        {/* Middle line */}
                        <span
                            className={`h-0.5 w-4 bg-white transition-all duration-300 ${
                                isMobileMenuOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                            }`}
                        />
                        {/* Bottom line */}
                        <span
                            className={`absolute h-0.5 w-4 bg-white transition-all duration-300 ${
                                isMobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`absolute top-full right-0 left-0 z-[65] transition-transform duration-300 md:hidden ${
                    isMobileMenuOpen
                        ? 'pointer-events-auto translate-y-0'
                        : 'pointer-events-none -translate-y-4'
                }`}
            >
                <div
                    className={`mx-4 mt-2 rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition-opacity duration-300 ${
                        isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <nav className='flex flex-col p-4'>
                        <Link
                            href='/features'
                            className='group flex items-center rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white'
                            onClick={closeMobileMenu}
                        >
                            <span className='text-sm font-medium'>Features</span>
                            <div className='ml-auto h-1 w-1 rounded-full bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                        </Link>

                        <div className='mx-4 my-2 h-px bg-white/10' />

                        <Link
                            href='/about'
                            className='group flex items-center rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white'
                            onClick={closeMobileMenu}
                        >
                            <span className='text-sm font-medium'>About</span>
                            <div className='ml-auto h-1 w-1 rounded-full bg-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                        </Link>

                        <div className='mx-4 my-2 h-px bg-white/10' />

                        <button
                            className='group flex items-center rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:text-white'
                            onClick={closeMobileMenu}
                        >
                            <span className='text-sm font-medium'>Contact</span>
                            <div className='ml-auto h-1 w-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
