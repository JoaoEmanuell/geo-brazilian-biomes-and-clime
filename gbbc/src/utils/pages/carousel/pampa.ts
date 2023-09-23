import { CommonCarrouselInterface } from "./common"

const pathToPampa = `/assets/images/biomes/pampa`

export const pampaCarouselItems: CommonCarrouselInterface = {
    forest: [
        {
            src: `${pathToPampa}/forest/pampa-1.webp`,
            alt: `Pampa 1`,
        },
        {
            src: `${pathToPampa}/forest/pampa-2.webp`,
            alt: `Pampa 2`,
        },
        {
            src: `${pathToPampa}/forest/pampa-3.webp`,
            alt: `Pampa 3`,
        },
        {
            src: `${pathToPampa}/forest/pampa-4.webp`,
            alt: `Pampa 4`,
        },
        {
            src: `${pathToPampa}/forest/pampa-5.webp`,
            alt: `Pampa 5`,
        },
    ], 
    animals: [
        {
            src: `${pathToPampa}/animals/cervo-do-pantanal.webp`,
            alt: `Wetland deer`,
            captionTitle: 'Cervo do pantanal'
        },
        {
            src: `${pathToPampa}/animals/ema.webp`,
            alt: `Ema`,
            captionTitle: 'Ema'
        },
        {
            src: `${pathToPampa}/animals/joao-de-barro.webp`,
            alt: `rufous hornero`,
            captionTitle: 'João de barro'
        },
        {
            src: `${pathToPampa}/animals/perdigao.webp`,
            alt: `perdigão`,
            captionTitle: 'Perdigão'
        },
        {
            src: `${pathToPampa}/animals/quero-quero.webp`,
            alt: `want-want`,
            captionTitle: 'Quero-quero'
        }, 
    ], 
    flora: [
        {
            src: `${pathToPampa}/flowers/algarrobo.webp`,
            alt: `mesquite`,
            captionTitle: 'Algarrobo',
        },
        {
            src: `${pathToPampa}/flowers/babosa-do-campo.webp`,
            alt: `field-aloe`,
            captionTitle: 'Babosa do campo'
        },
        {
            src: `${pathToPampa}/flowers/palmeira-ana.webp`,
            alt: `dwarf palm tree`,
            captionTitle: 'Palmeira anã'
        },
        {
            src: `${pathToPampa}/flowers/trevo-nativo.webp`,
            alt: `native clover`,
            captionTitle: 'Trevo nativo'
        },
        {
            src: `${pathToPampa}/flowers/unha-de-gato.webp`,
            alt: `cat nail`,
            captionTitle: 'Unha de gato'
        },
    ]
}