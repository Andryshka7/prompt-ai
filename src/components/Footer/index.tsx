const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className='relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm'>
            <div className='mx-auto max-w-6xl px-6 py-3'>
                <p className='text-center text-sm text-gray-500'>
                    © {currentYear} Prompt AI All Rights Reserved
                </p>
            </div>
        </footer>
    )
}
export default Footer
