import { CommonCarrouselInterface } from "./common"

const pathToCaatinga = `/assets/images/biomes/caatinga`

export const caatingaCarouselItems: CommonCarrouselInterface = {
    forest: [
        {
            src: `${pathToCaatinga}/forest/caatinga-1.webp`,
            alt: `Caatinga 1`,
        },
        {
            src: `${pathToCaatinga}/forest/caatinga-2.webp`,
            alt: `Caatinga 2`,
        },
        {
            src: `${pathToCaatinga}/forest/caatinga-3.webp`,
            alt: `Caatinga 3`,
        },
        {
            src: `${pathToCaatinga}/forest/caatinga-4.webp`,
            alt: `Caatinga 4`,
        },
        {
            src: `${pathToCaatinga}/forest/caatinga-5.webp`,
            alt: `Caatinga 5`,
        },
    ], 
    animals: [
        {
            src: `${pathToCaatinga}/animals/agouti.webp`,
            alt: `agouti`,
            captionTitle: 'Cutia'
        },
        {
            src: `${pathToCaatinga}/animals/brocket-deer.webp`,
            alt: `brocket deer`,
            captionTitle: 'Veado catingueiro'
        },
        {
            src: `${pathToCaatinga}/animals/cavy.webp`,
            alt: `Cavy`,
            captionTitle: 'Preá'
        },
        {
            src: `${pathToCaatinga}/animals/sarue.webp`,
            alt: `Saruê`,
            captionTitle: 'Saruê'
        },
        {
            src: `${pathToCaatinga}/animals/white-wing.webp`,
            alt: `White wing`,
            captionTitle: 'Asa branca'
        },
    ], 
    flora: [
        {
            src: `${pathToCaatinga}/flowers/angico.webp`,
            alt: `angico`,
            captionTitle: 'Cedro',
        },
        {
            src: `${pathToCaatinga}/flowers/facheiro.webp`,
            alt: `facheiro`,
            captionTitle: 'Facheiro'
        },
        {
            src: `${pathToCaatinga}/flowers/mandacaru.webp`,
            alt: `mandacaru`,
            captionTitle: 'Mandacaru'
        },
        {
            src: `${pathToCaatinga}/flowers/schinus-terebinthifolius-raddi.webp`,
            alt: `schinus terebinthifolius raddi`,
            captionTitle: 'Aroeira'
        },
        {
            src: `${pathToCaatinga}/flowers/xique-xique.webp`,
            alt: `xique-xique`,
            captionTitle: 'Xique-Xique'
        },
    ]
}