import { CommonCarrouselInterface } from "./common"

const pathToAtlanticForest = `/assets/images/biomes/atlantic-forest`

export const atlanticForestCarouselItems: CommonCarrouselInterface = {
    forest: [
        {
            src: `${pathToAtlanticForest}/forest/mata-atlantica-1.webp`,
            alt: `Atlantic Forest 1`,
        },
        {
            src: `${pathToAtlanticForest}/forest/mata-atlantica-2.webp`,
            alt: `Atlantic Forest 2`,
        },
        {
            src: `${pathToAtlanticForest}/forest/mata-atlantica-3.webp`,
            alt: `Atlantic Forest 3`,
        },
        {
            src: `${pathToAtlanticForest}/forest/mata-atlantica-4.webp`,
            alt: `Atlantic Forest 4`,
        },
        {
            src: `${pathToAtlanticForest}/forest/mata-atlantica-5.webp`,
            alt: `Atlantic Forest 5`,
        },
    ], 
    animals: [
        {
            src: `${pathToAtlanticForest}/animals/beija-flor.webp`,
            alt: `Hummingbird`,
            captionTitle: 'Beija flor'
        },
        {
            src: `${pathToAtlanticForest}/animals/cobra-coral.webp`,
            alt: `Coral snake`,
            captionTitle: 'Cobra coral'
        },
        {
            src: `${pathToAtlanticForest}/animals/garca.webp`,
            alt: `Heron`,
            captionTitle: 'Garça'
        },
        {
            src: `${pathToAtlanticForest}/animals/jacare-do-papo-amarelo.webp`,
            alt: `Yellow-spotted alligator`,
            captionTitle: 'Jacaré-do-papo-amarelo'
        },
        {
            src: `${pathToAtlanticForest}/animals/tie-sangue.webp`,
            alt: `Tie blood`,
            captionTitle: 'Tie sangue'
        },
    ], 
    flora: [
        {
            src: `${pathToAtlanticForest}/flowers/cedro.webp`,
            alt: `cedar`,
            captionTitle: 'Cedro',
        },
        {
            src: `${pathToAtlanticForest}/flowers/figueira.webp`,
            alt: `jambo`,
            captionTitle: 'Figueira'
        },
        {
            src: `${pathToAtlanticForest}/flowers/jambo.webp`,
            alt: `jambo`,
            captionTitle: 'Jambo'
        },
        {
            src: `${pathToAtlanticForest}/flowers/jequitiba-rosa.webp`,
            alt: `pink jequitibá`,
            captionTitle: 'Jequitibá rosa'
        },
        {
            src: `${pathToAtlanticForest}/flowers/pau-brasil.webp`,
            alt: `Brazilwood tree`,
            captionTitle: 'Pau Brasil'
        },
    ]
}