import { ClientOnly } from "./client"
import * as React from 'react'

export const generateStaticParams = () => [{ slug: [''] }]

export default function Page() { return <ClientOnly /> }