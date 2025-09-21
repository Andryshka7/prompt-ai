import { AnswerStyleEnum, OpenAIModelEnum, PromptLengthEnum } from '@/utils'

interface PromptSettings {
    model: OpenAIModelEnum
    length: PromptLengthEnum
    style: AnswerStyleEnum
}

interface Prompt {
    id: string
    content: string
    settings: PromptSettings
    createdAt: string
}

interface StreamChunk {
    content: string
    isComplete: boolean
}

export type { PromptSettings, Prompt, StreamChunk }
