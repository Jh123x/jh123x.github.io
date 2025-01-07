import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Metadata } from 'next'
import GlobalStyle from 'src/styles/GlobalStyle'
import { NoSSRNav } from './client'

export const metadata: Metadata = {
    title: 'Wen Junhua',
    description: 'Jh123x Portfolio Website',
    manifest: '/manifest.json',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return ( 
        <html lang="en">
            <body>
                <GlobalStyle />
                <AppRouterCacheProvider
                    options={{ 
                        key: 'css',
                        enableCssLayer: true,
                    }}
                >
                    <NoSSRNav children={children} />
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
