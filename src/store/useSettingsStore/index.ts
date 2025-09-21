import { PromptSettings } from '@/types'
import { AnswerStyleEnum, OpenAIModelEnum, PromptLengthEnum } from '@/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsStore extends PromptSettings {
    updateSettings: (settings: Partial<PromptSettings>) => void
}

const useSettingsStore = create<SettingsStore>()(
    persist(
        (set) => ({
            model: OpenAIModelEnum.NORMAL,
            length: PromptLengthEnum.MEDIUM,
            style: AnswerStyleEnum.FORMAL,

            updateSettings: (settings) =>
                set((state) => ({
                    ...state,
                    ...settings
                }))
        }),
        {
            name: 'settings',
            partialize: ({ model, length, style }) => ({ model, length, style })
        }
    )
)

export default useSettingsStore
