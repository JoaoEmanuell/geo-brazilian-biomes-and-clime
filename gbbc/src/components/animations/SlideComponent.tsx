import { PropsWithChildren, ReactNode } from 'react'

import Slide from 'react-reveal/Slide'

interface SlideComponentInterface {
    direction: 'top' | 'right' | 'bottom' | 'left'
}

export function SlideComponent(
    props: PropsWithChildren<SlideComponentInterface>
) {
    const SlideTop = (children: ReactNode) => {
        return <Slide top>{children}</Slide>
    }
    const SlideRight = (children: ReactNode) => {
        return <Slide right>{children}</Slide>
    }
    const SlideBottom = (children: ReactNode) => {
        return <Slide bottom>{children}</Slide>
    }
    const SlideLeft = (children: ReactNode) => {
        return <Slide left>{children}</Slide>
    }

    const direction = {
        top: SlideTop,
        right: SlideRight,
        bottom: SlideBottom,
        left: SlideLeft,
    }
    return direction[props.direction](props.children)
}
