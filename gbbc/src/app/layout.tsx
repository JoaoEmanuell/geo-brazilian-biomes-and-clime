import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'GBCC',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const bodyClassName = `${inter.className} bg-black text-white`
    return (
        <html lang="en">
            <body className={bodyClassName}>{children}</body>
        </html>
    )
}
