import { PropsWithChildren } from 'react'
import { FadeComponent } from './FadeComponent'
import { SlideComponent } from './SlideComponent'
import { BounceComponent } from './BounceComponent'
import { FlipComponent } from './FlipComponent'
import { RollComponent } from './RollComponent'
import { ZoomComponent } from './ZoomComponent'

interface AnimationComponentInterface {
    animationType: 'fade' | 'slide' | 'bounce' | 'flip' | 'roll' | 'zoom'
    direction: 'top' | 'right' | 'bottom' | 'left'
}

export function AnimationComponent(
    props: PropsWithChildren<AnimationComponentInterface>
) {
    const components = {
        fade: FadeComponent,
        slide: SlideComponent,
        bounce: BounceComponent,
        flip: FlipComponent,
        roll: RollComponent,
        zoom: ZoomComponent,
    }
    const Component = components[props.animationType]
    return <Component direction={props.direction}>{props.children}</Component>
}
