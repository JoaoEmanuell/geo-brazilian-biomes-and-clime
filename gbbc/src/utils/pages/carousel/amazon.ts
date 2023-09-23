import { CommonCarrouselInterface } from "./common"

const pathToAmazon = `/assets/images/biomes/amazon`

export const amazonCarouselItems: CommonCarrouselInterface = {
    forest: [
        {
            src: `${pathToAmazon}/forest/amazon-1.webp`,
            alt: `Amazon photo 1`,
        },
        {
            src: `${pathToAmazon}/forest/amazon-2.webp`,
            alt: `Amazon photo 2`,
        },
        {
            src: `${pathToAmazon}/forest/amazon-3.webp`,
            alt: `Amazon photo 3`,
        },
        {
            src: `${pathToAmazon}/forest/amazon-4.webp`,
            alt: `Amazon photo 4`,
        },
        {
            src: `${pathToAmazon}/forest/amazon-5.webp`,
            alt: `Amazon photo 5`,
        },
    ], 
    animals: [
        {
            src: `${pathToAmazon}/animals/blue-arara.webp`,
            alt: `Blue arara`,
            captionTitle: 'Arara azul'
        },
        {
            src: `${pathToAmazon}/animals/dolphin-red.webp`,
            alt: `Dolphin red`,
            captionTitle: 'Boto cor de rosa'
        },
        {
            src: `${pathToAmazon}/animals/jaguar.webp`,
            alt: `Jaguar`,
            captionTitle: 'Onça pintada'
        },
        {
            src: `${pathToAmazon}/animals/red-arara.webp`,
            alt: `red-arara`,
            captionTitle: 'Arara vermelha'
        },
        {
            src: `${pathToAmazon}/animals/toucan.webp`,
            alt: `Toucan`,
            captionTitle: 'Tucano'
        },
    ], 
    flora: [
        {
            src: `${pathToAmazon}/flora/cocoa.webp`,
            alt: `cocoa`,
            captionTitle: 'Cacau',
        },
        {
            src: `${pathToAmazon}/flora/cupuaçu.webp`,
            alt: `Cupuaçu`,
            captionTitle: 'Cupuaçu',
            captionText: 'Usado no açaí'
        },
        {
            src: `${pathToAmazon}/flora/guarana.webp`,
            alt: `Guarana`,
            captionTitle: 'Guarana'
        },
        {
            src: `${pathToAmazon}/flora/rubber-tree.webp`,
            alt: `rubber-tree`,
            captionTitle: 'Seringueira'
        },
        {
            src: `${pathToAmazon}/flora/water-lily.webp`,
            alt: `Water lily`,
            captionTitle: 'Vitória Régia'
        },
    ]
}