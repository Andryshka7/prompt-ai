'use client'

import { PropsWithChildren, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import dynamic from 'next/dynamic'

interface Props extends PropsWithChildren {
    isOpen: boolean
    onClose: () => void
}

const Modal = ({ isOpen, onClose, children }: Props) => {
    const isBackdropClick = useRef(false)

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        isBackdropClick.current = e.target === e.currentTarget
    }

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isBackdropClick.current && e.target === e.currentTarget) {
            onClose()
        }
        isBackdropClick.current = false
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            e.key === 'Escape' && onClose()
        }

        if (isOpen) {
            document.documentElement.classList.toggle('overflow-hidden')

            document.addEventListener('keydown', handleKeyDown)

            return () => {
                document.removeEventListener('keydown', handleKeyDown)
            }
        } else {
            document.documentElement.classList.toggle('overflow-hidden')
        }
    }, [isOpen])

    return createPortal(
        <div
            className={`fixed inset-0 top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
        >
            <div
                className={`flex h-full w-full items-center justify-center duration-300 ease-out ${isOpen ? 'scale-100' : 'scale-95'}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                {children}
            </div>
        </div>,
        document.body
    )
}

export default dynamic(() => Promise.resolve(Modal), { ssr: false })
