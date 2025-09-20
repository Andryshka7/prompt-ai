'use client'

import { Mic, Square, Loader2 } from 'lucide-react'
import { useState, useRef } from 'react'
import { convertSpeechToText } from '@/actions'
import dynamic from 'next/dynamic'

interface Props {
    onTranscript: (transcript: string) => void
    disabled?: boolean
}

const VoiceInput = ({ onTranscript, disabled = false }: Props) => {
    const [isRecording, setIsRecording] = useState(false)
    const [isTranscribing, setIsTranscribing] = useState(false)

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Blob[]>([])

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            audioChunksRef.current = []

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data)
                }
            }

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
                await transcribeAudio(audioBlob)

                // Stop all tracks to release microphone
                stream.getTracks().forEach((track) => track.stop())
            }

            mediaRecorder.start()
            setIsRecording(true)
        } catch (error) {
            console.error('Error starting recording:', error)
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)
        }
    }

    const transcribeAudio = async (audioBlob: Blob) => {
        setIsTranscribing(true)
        try {
            const formData = new FormData()
            formData.append('audio', audioBlob, 'recording.wav')

            const transcript = await convertSpeechToText(formData)
            onTranscript(transcript)
        } catch (error) {
            console.error('Error transcribing audio:', error)
        } finally {
            setIsTranscribing(false)
        }
    }

    const handleVoiceClick = () => {
        if (disabled) return
        isRecording ? stopRecording() : startRecording()
    }

    return (
        <button
            type='button'
            onClick={handleVoiceClick}
            disabled={isTranscribing || disabled}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 ${
                isRecording
                    ? 'bg-gray-600 text-white shadow-gray-500/25 hover:bg-gray-700'
                    : 'text-gray-400 hover:bg-white/10 hover:text-white hover:shadow-gray-500/25'
            }`}
        >
            {isTranscribing ? (
                <Loader2 className='h-5 w-5 animate-spin' />
            ) : isRecording ? (
                <Square className='h-5 w-5' />
            ) : (
                <Mic className='h-5 w-5' />
            )}
        </button>
    )
}

export default dynamic(() => Promise.resolve(VoiceInput), { ssr: false })
