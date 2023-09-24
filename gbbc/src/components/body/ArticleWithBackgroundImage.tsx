import { PropsWithChildren } from 'react'

interface ArticleWithBackgroundImageInterface {
    imageSrc: string
}

export function ArticleWithBackgroundImage(
    props: PropsWithChildren<ArticleWithBackgroundImageInterface>
) {
    return (
        <article
            className="relative bg-fixed bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${props.imageSrc})`,
            }}
        >
            <div>{props.children}</div>
        </article>
    )
}
