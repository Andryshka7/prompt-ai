'use server'

import { generateStreamingLoremIpsum } from '@/mockData'
import { PromptSettings } from '@/types'

const generatePrompt = async (prompt: string, settings: PromptSettings) => {
    try {
        const chunks = await generateStreamingLoremIpsum(prompt)
        return chunks
    } catch (error) {
        console.error('Error generating prompt:', error)
        return ['Error generating response. Please try again.']
    }
}

export default generatePrompt
