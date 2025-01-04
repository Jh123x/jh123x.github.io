import { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
    title: 'Wen Junhua',
    description: 'Jh123x Portfolio Website',
    manifest: '/manifest.json',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}