const prompt = {
    id: 'prompt_ai_001',
    content: `# How Redis Enhances Real-Time Trading Platforms

Redis significantly boosts performance in trading systems by providing:

## Key Features

### 1. **Low-latency Caching**
- Order books and market data
- Sub-millisecond response times
- Memory-based storage

### 2. **Pub/Sub Messaging**
- Instant updates across services
- Real-time data distribution
- Event-driven architecture

### 3. **Snapshot Storage**
- Quick system state recovery
- Point-in-time backups
- Disaster recovery support

### 4. **High Throughput**
- Thousands of requests per second
- Horizontal scaling capabilities
- Optimized for financial workloads

## Code Example

\`\`\`javascript
// Redis configuration for trading platform
const redis = new Redis({
  host: 'trading-cache.redis.com',
  port: 6379,
  retryDelayOnFailover: 100,
  enableReadyCheck: false,
  maxRetriesPerRequest: null
});

// Subscribe to market data updates
redis.subscribe('market:updates', (err, count) => {
  console.log(\`Subscribed to \${count} channels\`);
});
\`\`\`

## Performance Benefits

| Metric | Before Redis | With Redis | Improvement |
|--------|-------------|------------|-------------|
| Response Time | 50ms | 1ms | **50x faster** |
| Throughput | 100 req/s | 10,000 req/s | **100x higher** |
| Memory Usage | 2GB | 500MB | **4x more efficient** |

> **Note**: Redis ensures that traders always see the most up-to-date information without delays, making it essential for modern trading platforms.

## Conclusion

In short, Redis is a game-changer for real-time trading systems, providing the speed and reliability needed for high-frequency trading operations.`,
    settings: {
        model: 'STRONG',
        length: 'MEDIUM',
        style: 'TECHNICAL'
    },
    createdAt: '2025-09-21T12:00:00.000Z'
}

const LOREM_TEXT =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'

const LENGTH = 100 // words

const generateStreamingLoremIpsum = async (prompt?: string): Promise<string[]> => {
    // Generate 800 words by repeating and varying the Lorem text
    const words = LOREM_TEXT.split(' ')

    const generatedWords: string[] = []

    // Use prompt hash for consistent text selection
    let seed = 0

    if (prompt) {
        // Simple hash function to get consistent starting position
        for (let i = 0; i < prompt.length; i++) {
            const char = prompt.charCodeAt(i)
            seed = (seed << 5) - seed + char
            seed = seed & seed // Convert to 32-bit integer
        }
        seed = Math.abs(seed)
    } else {
        seed = Math.floor(Math.random() * 10000)
    }

    // Generate 800 words by cycling through the Lorem text with variations
    for (let i = 0; i < LENGTH; i++) {
        const wordIndex = (seed + i) % words.length

        let word = words[wordIndex]

        // Add some variation to make it more interesting
        if (i > 0 && i % 50 === 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }
        if (i > 0 && i % 100 === 0) {
            word += '.'
        }

        generatedWords.push(word)
    }

    // Join words and split into characters for streaming
    const text = generatedWords.join(' ')
    const chunks: string[] = []

    for (let i = 0; i < text.length; i++) {
        chunks.push(text[i])
    }

    return chunks
}

export { prompt, generateStreamingLoremIpsum }
