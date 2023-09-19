import { PropsWithChildren } from 'react'

interface CenterDivProps {
    className?: string
}

export function CenterDiv(props: PropsWithChildren<CenterDivProps>) {
    const className = `container mx-auto mt-4 text-center ${props.className}`
    return <div className={className}>{props.children}</div>
}
