'use server'

import { openai } from '@/utils'

const convertSpeechToText = async (formData: FormData) => {
    const audioFile = formData.get('audio') as File

    if (!audioFile) {
        throw new Error('No audio file provided')
    }

    // const response = await openai.audio.transcriptions.create({
    //     file: audioFile,
    //     model: 'whisper-1'
    // })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return 'Hello, world!'
}

export default convertSpeechToText
