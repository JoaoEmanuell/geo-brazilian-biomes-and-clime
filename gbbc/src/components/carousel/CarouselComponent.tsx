import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

export interface CarrouselItemObjectInterface {
    src: string // Full path
    alt: string
    captionTitle?: string
    captionText?: string
}

export interface CarouselComponentInterface {
    carrouselItems: Array<CarrouselItemObjectInterface>
}

export function CarouselComponent(props: CarouselComponentInterface) {
    const carouselItemImageWidth = 1080
    const carouselItemImageHeight = 720
    const carouselItemInterval = 6000

    const carouselItems = props.carrouselItems
    var itemsComponent: Array<Carousel.Item> = []
    carouselItems.forEach((item) => {
        const itemComponent = (
            <Carousel.Item interval={carouselItemInterval}>
                <Image
                    src={item.src}
                    alt={item.alt}
                    width={carouselItemImageWidth}
                    height={carouselItemImageHeight}
                    className="block w-100"
                />
                <Carousel.Caption>
                    <h3>{item.captionTitle}</h3>
                    <p>{item.captionText}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
        itemsComponent.push(itemComponent)
    })
    return (
        <Carousel fade pause="hover">
            {...itemsComponent}
        </Carousel>
    )
}
