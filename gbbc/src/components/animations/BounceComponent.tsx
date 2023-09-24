import { PropsWithChildren, ReactNode } from 'react'

import Bounce from 'react-reveal/Bounce'

interface BounceComponentInterface {
    direction: 'top' | 'right' | 'bottom' | 'left'
}

export function BounceComponent(
    props: PropsWithChildren<BounceComponentInterface>
) {
    const BounceTop = (children: ReactNode) => {
        return <Bounce top>{children}</Bounce>
    }
    const BounceRight = (children: ReactNode) => {
        return <Bounce right>{children}</Bounce>
    }
    const BounceBottom = (children: ReactNode) => {
        return <Bounce bottom>{children}</Bounce>
    }
    const BounceLeft = (children: ReactNode) => {
        return <Bounce left>{children}</Bounce>
    }

    const direction = {
        top: BounceTop,
        right: BounceRight,
        bottom: BounceBottom,
        left: BounceLeft,
    }
    return direction[props.direction](props.children)
}
