'use client';
import dynamic from 'next/dynamic'

export const NoSSRNav = dynamic(() => import('./app'), { ssr: false })