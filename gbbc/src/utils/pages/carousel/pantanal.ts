import { CommonCarrouselInterface } from "./common"

const pathToPantanal = `/assets/images/biomes/pantanal`

export const pantanalCarouselItems: CommonCarrouselInterface = {
    forest: [
        {
            src: `${pathToPantanal}/forest/pantanal-1.webp`,
            alt: `Pantanal 1`,
        },
        {
            src: `${pathToPantanal}/forest/pantanal-2.webp`,
            alt: `Pantanal 2`,
        },
        {
            src: `${pathToPantanal}/forest/pantanal-3.webp`,
            alt: `Pantanal 3`,
        },
        {
            src: `${pathToPantanal}/forest/pantanal-4.webp`,
            alt: `Pantanal 4`,
        },
        {
            src: `${pathToPantanal}/forest/pantanal-5.webp`,
            alt: `Pantanal 5`,
        },
    ], 
    animals: [
        {
            src: `${pathToPantanal}/animals/anta.webp`,
            alt: `tapir`,
            captionTitle: 'Anta'
        },
        {
            src: `${pathToPantanal}/animals/ariranha.webp`,
            alt: `giant otter`,
            captionTitle: 'Ariranha'
        },
        {
            src: `${pathToPantanal}/animals/capivara.webp`,
            alt: `capybara`,
            captionTitle: 'Capivara'
        },
        {
            src: `${pathToPantanal}/animals/macaco-prego.webp`,
            alt: `capuchin monkey`,
            captionTitle: 'Macaco-prego'
        },
        {
            src: `${pathToPantanal}/animals/tamandua.webp`,
            alt: `anteater`,
            captionTitle: 'Tamanduá'
        }, 
    ], 
    flora: [
        {
            src: `${pathToPantanal}/flowers/babacual.webp`,
            alt: `babassu`,
            captionTitle: 'Babaçu',
        },
        {
            src: `${pathToPantanal}/flowers/caramba.webp`,
            alt: `damn`,
            captionTitle: 'Caramba'
        },
        {
            src: `${pathToPantanal}/flowers/jenipapo.webp`,
            alt: `genipap`,
            captionTitle: 'Jenipapo'
        },
        {
            src: `${pathToPantanal}/flowers/p-formiga.webp`,
            alt: `antwood`,
            captionTitle: 'Pau-formiga'
        },
        {
            src: `${pathToPantanal}/flowers/tucum.webp`,
            alt: `tucum`,
            captionTitle: 'Tucum'
        },
    ]
}