import { PropsWithChildren, ReactNode } from 'react'

import Flip from 'react-reveal/Flip'

interface FlipComponentInterface {
    direction: 'top' | 'right' | 'bottom' | 'left'
}

export function FlipComponent(
    props: PropsWithChildren<FlipComponentInterface>
) {
    const FlipTop = (children: ReactNode) => {
        return <Flip top>{children}</Flip>
    }
    const FlipRight = (children: ReactNode) => {
        return <Flip right>{children}</Flip>
    }
    const FlipBottom = (children: ReactNode) => {
        return <Flip bottom>{children}</Flip>
    }
    const FlipLeft = (children: ReactNode) => {
        return <Flip left>{children}</Flip>
    }

    const direction = {
        top: FlipTop,
        right: FlipRight,
        bottom: FlipBottom,
        left: FlipLeft,
    }
    return direction[props.direction](props.children)
}
