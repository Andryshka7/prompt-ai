import { Settings, X } from 'lucide-react'
import { useState } from 'react'
import { Modal } from '@/components'
import { useSettingsStore } from '@/store'
import { OpenAIModelEnum, PromptLengthEnum, AnswerStyleEnum } from '@/utils'

const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

const PromtSettings = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { model, length, style, updateSettings } = useSettingsStore()

    return (
        <>
            <button
                type='button'
                onClick={() => setIsOpen(true)}
                className='flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-gray-500/25'
            >
                <Settings className='h-5 w-5' />
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className='w-full max-w-md rounded-2xl border border-white/10 bg-neutral-800/50 p-6 shadow-lg backdrop-blur-xs'>
                    {/* Header */}
                    <div className='mb-6 flex items-center justify-between'>
                        <h2 className='text-xl font-semibold text-white'>Prompt settings</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white'
                        >
                            <X className='h-4 w-4' />
                        </button>
                    </div>

                    {/* Settings Form */}
                    <div className='space-y-6'>
                        {/* Model Selection */}
                        <div>
                            <label className='mb-3 block text-sm font-medium text-gray-300'>
                                AI model
                            </label>
                            <div className='grid grid-cols-3 gap-2'>
                                {Object.values(OpenAIModelEnum).map((modelOption) => (
                                    <button
                                        key={modelOption}
                                        onClick={() => updateSettings({ model: modelOption })}
                                        className={`rounded-lg px-3 py-2 text-sm transition-all ${
                                            model === modelOption
                                                ? 'border border-blue-400/50 bg-blue-500/20 text-blue-400'
                                                : 'border border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10'
                                        }`}
                                    >
                                        {capitalizeFirstLetter(modelOption)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Length Selection */}
                        <div>
                            <label className='mb-3 block text-sm font-medium text-gray-300'>
                                Prompt length
                            </label>
                            <div className='grid grid-cols-3 gap-2'>
                                {Object.values(PromptLengthEnum).map((lengthOption) => (
                                    <button
                                        key={lengthOption}
                                        onClick={() => updateSettings({ length: lengthOption })}
                                        className={`rounded-lg px-3 py-2 text-sm transition-all ${
                                            length === lengthOption
                                                ? 'border border-blue-400/50 bg-blue-500/20 text-blue-400'
                                                : 'border border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10'
                                        }`}
                                    >
                                        {capitalizeFirstLetter(lengthOption)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Style Selection */}
                        <div>
                            <label className='mb-3 block text-sm font-medium text-gray-300'>
                                Answer style
                            </label>
                            <div className='grid grid-cols-3 gap-2'>
                                {Object.values(AnswerStyleEnum).map((styleOption) => (
                                    <button
                                        key={styleOption}
                                        onClick={() => updateSettings({ style: styleOption })}
                                        className={`rounded-lg px-3 py-2 text-sm transition-all ${
                                            style === styleOption
                                                ? 'border border-blue-400/50 bg-blue-500/20 text-blue-400'
                                                : 'border border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10'
                                        }`}
                                    >
                                        {capitalizeFirstLetter(styleOption)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default PromtSettings
