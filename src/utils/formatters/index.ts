const formatDate = (timestamp: string) => {
    if (!timestamp) return '-'

    const date = new Date(timestamp)

    // Convert to Moscow timezone (UTC+3)
    const moscowDate = new Date(date.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }))

    const day = moscowDate.getDate().toString().padStart(2, '0')
    const month = (moscowDate.getMonth() + 1).toString().padStart(2, '0')

    const hour = moscowDate.getHours().toString().padStart(2, '0')
    const minute = moscowDate.getMinutes().toString().padStart(2, '0')

    return `${day}.${month} ${hour}:${minute}`
}

export { formatDate }
