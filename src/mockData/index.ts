const LOREM_TEXT =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'

const LENGTH = 600

const generateRandomLoremIpsum = (): string => {
    const start = Math.floor(Math.random() * (LOREM_TEXT.length - 100))
    return LOREM_TEXT.substring(start, start + 100)
}

const generateStreamingLoremIpsum = async (prompt?: string): Promise<string[]> => {
    // Use prompt hash for consistent text selection
    let start = 0
    if (prompt) {
        // Simple hash function to get consistent starting position
        let hash = 0
        for (let i = 0; i < prompt.length; i++) {
            const char = prompt.charCodeAt(i)
            hash = (hash << 5) - hash + char
            hash = hash & hash // Convert to 32-bit integer
        }
        start = Math.abs(hash) % (LOREM_TEXT.length - LENGTH)
    } else {
        start = Math.floor(Math.random() * (LOREM_TEXT.length - LENGTH))
    }

    const text = LOREM_TEXT.substring(start, start + LENGTH)

    const chunks: string[] = []

    for (let i = 0; i < text.length; i++) {
        chunks.push(text[i])
    }

    return chunks
}

export { generateRandomLoremIpsum, generateStreamingLoremIpsum }
