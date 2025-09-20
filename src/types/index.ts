interface PromptSettings {}

interface Prompt {
    id: string
    from: string
    name: string
    createdAt: string
}

interface StreamChunk {
    content: string
    isComplete: boolean
}

export type { PromptSettings, Prompt, StreamChunk }
