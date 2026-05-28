import AuthLayoutNav from '@/components/AuthLayoutNav'
import React from 'react'

const layout = ({ children }) => {
    return (
        <html lang="en">
            <body className="min-h-full flex flex-col">
                <AuthLayoutNav/>
                {children}
            </body>
        </html>
    )
}

export default layout
