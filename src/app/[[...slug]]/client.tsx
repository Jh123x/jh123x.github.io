'use client'

import dynamic from 'next/dynamic'
import * as React from 'react'
import GlobalStyle from "../../styles/GlobalStyle";
import { HashRouter } from "react-router-dom";

const App = dynamic(() => import('../../App'), { ssr: false })

export const ClientOnly = () => {

    return <>
        <GlobalStyle />
        <HashRouter basename="/">
            <App />
        </HashRouter>
    </>
}