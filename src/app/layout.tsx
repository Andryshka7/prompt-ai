import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/index.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'AI Prompt Tool - Voice-Powered AI Assistant',
    description:
        'Generate AI prompts and get real-time responses with voice input. Clean, minimalistic interface with streaming responses from OpenAI GPT-4o.'
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#000000'
}

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
