import Link from 'next/link'

const Header = () => {
    return (
        <header className='relative z-10'>
            <div className='mx-auto flex max-w-7xl items-center justify-between p-6'>
                {/* Logo */}
                <Link href='/' className='flex items-center'>
                    <h1 className='text-2xl font-bold text-white md:text-3xl'>
                        <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent'>
                            Prompt AI
                        </span>
                    </h1>
                </Link>

                {/* Navigation */}
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
            </div>
        </header>
    )
}

export default Header
