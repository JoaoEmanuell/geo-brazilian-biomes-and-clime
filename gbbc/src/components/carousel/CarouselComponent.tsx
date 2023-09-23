import { Carousel, Typography } from '@material-tailwind/react'
import Image from 'next/image'

export interface CarrouselItemObjectInterface {
    src: string // Full path
    alt: string
    captionTitle?: string
    captionText?: string
}

export interface CarouselComponentInterface {
    carrouselItems: Array<CarrouselItemObjectInterface>
}

export function ReactCarousel(props: CarouselComponentInterface) {
    const carouselItemImageWidth = 1280
    const carouselItemImageHeight = 720
    const constructBaseTitleDiv = (title?: string) => {
        if (title) {
            return (
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            {title}
                        </Typography>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    const carouselItems = props.carrouselItems
    var itemsComponent: Array<React.JSX.Element> = []
    carouselItems.forEach((item) => {
        const itemComponent = (
            <div className="relative h-full w-full">
                <Image
                    src={item.src}
                    alt={item.alt}
                    width={carouselItemImageWidth}
                    height={carouselItemImageHeight}
                    className="object-scale-down h-64 w-full"
                />
                {constructBaseTitleDiv(item.captionTitle)}
            </div>
        )
        itemsComponent.push(itemComponent)
    })
    return (
        <div className="px-4">
            <Carousel
                transition={{ duration: 1.5 }}
                className="rounded-xl h-64 w-full"
            >
                {...itemsComponent}
            </Carousel>
        </div>
    )
}
