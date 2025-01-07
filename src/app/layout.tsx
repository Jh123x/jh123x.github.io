import * as React from 'react'
import { Metadata } from 'next'
import { App } from 'src/app/app';
import GlobalStyle from 'src/styles/GlobalStyle'

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
            <GlobalStyle />
            <body>
                <App children={children} />
            </body>
        </html>
    )
}