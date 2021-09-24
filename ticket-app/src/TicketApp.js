import React from 'react'
import { UiProvider } from './context/UIContext'
import { RouterPage } from './pages/RouterPage'

export const TicketApp = () => {
    return (
        <UiProvider>
            <RouterPage />
        </UiProvider>
    )
}
