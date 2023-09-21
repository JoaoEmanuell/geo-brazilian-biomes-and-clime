import { PropsWithChildren } from 'react'
import Fade from 'react-reveal/Fade'

import { CenterDiv } from './CenterDiv'

interface CenterDivFadeInProps {
    className?: string
    id?: string
}

export function CenterDivFadeIn(
    props: PropsWithChildren<CenterDivFadeInProps>
) {
    return (
        <Fade left>
            <CenterDiv className={props.className} id={props.id}>
                {props.children}
            </CenterDiv>
        </Fade>
    )
}
