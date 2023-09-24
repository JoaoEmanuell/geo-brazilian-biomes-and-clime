import { PropsWithChildren, ReactNode } from 'react'

import Roll from 'react-reveal/Roll'

interface RollComponentInterface {
    direction: 'top' | 'right' | 'bottom' | 'left'
}

export function RollComponent(
    props: PropsWithChildren<RollComponentInterface>
) {
    const RollTop = (children: ReactNode) => {
        return <Roll top>{children}</Roll>
    }
    const RollRight = (children: ReactNode) => {
        return <Roll right>{children}</Roll>
    }
    const RollBottom = (children: ReactNode) => {
        return <Roll bottom>{children}</Roll>
    }
    const RollLeft = (children: ReactNode) => {
        return <Roll left>{children}</Roll>
    }

    const direction = {
        top: RollTop,
        right: RollRight,
        bottom: RollBottom,
        left: RollLeft,
    }
    return direction[props.direction](props.children)
}
