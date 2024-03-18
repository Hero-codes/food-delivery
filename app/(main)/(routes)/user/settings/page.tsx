import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const SettingsPage = () => {
    return (
        <div className='container mx-auto px-3'>
            <div className='flex h-full items-center justify-center'>
                <UserProfile />
            </div>
        </div>
    )
}

export default SettingsPage