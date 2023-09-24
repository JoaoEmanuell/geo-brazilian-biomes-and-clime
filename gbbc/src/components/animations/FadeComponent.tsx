import { PropsWithChildren, ReactNode } from 'react'

import Fade from 'react-reveal/Fade'

interface FadeComponentInterface {
    direction: 'top' | 'right' | 'bottom' | 'left'
}

export function FadeComponent(
    props: PropsWithChildren<FadeComponentInterface>
) {
    const fadeTop = (children: ReactNode) => {
        return <Fade top>{children}</Fade>
    }
    const fadeRight = (children: ReactNode) => {
        return <Fade right>{children}</Fade>
    }
    const fadeBottom = (children: ReactNode) => {
        return <Fade bottom>{children}</Fade>
    }
    const fadeLeft = (children: ReactNode) => {
        return <Fade left>{children}</Fade>
    }

    const direction = {
        top: fadeTop,
        right: fadeRight,
        bottom: fadeBottom,
        left: fadeLeft,
    }
    return direction[props.direction](props.children)
}
