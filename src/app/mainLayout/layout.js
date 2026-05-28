import MainLayoutNav from '@/components/MainLayoutNav'
import React from 'react'

const layout = ({ children }) => {
    return (
        <html lang="en">
            <body className="min-h-full flex flex-col">
                <MainLayoutNav />
                {children}
            </body>
        </html>
    )
}

export default layout
