import { PropsWithChildren, ReactNode } from 'react'

import Zoom from 'react-reveal/Zoom'

interface ZoomComponentInterface {
    direction: 'top' | 'right' | 'bottom' | 'left'
}

export function ZoomComponent(
    props: PropsWithChildren<ZoomComponentInterface>
) {
    const ZoomTop = (children: ReactNode) => {
        return <Zoom top>{children}</Zoom>
    }
    const ZoomRight = (children: ReactNode) => {
        return <Zoom right>{children}</Zoom>
    }
    const ZoomBottom = (children: ReactNode) => {
        return <Zoom bottom>{children}</Zoom>
    }
    const ZoomLeft = (children: ReactNode) => {
        return <Zoom left>{children}</Zoom>
    }

    const direction = {
        top: ZoomTop,
        right: ZoomRight,
        bottom: ZoomBottom,
        left: ZoomLeft,
    }
    return direction[props.direction](props.children)
}
