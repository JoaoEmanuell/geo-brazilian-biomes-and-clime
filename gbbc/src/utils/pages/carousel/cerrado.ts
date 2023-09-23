import { CommonCarrouselInterface } from "./common"

const pathToCerrado = `/assets/images/biomes/cerrado`

export const cerradoCarouselItems: CommonCarrouselInterface = {
    forest: [
        {
            src: `${pathToCerrado}/forest/cerrado-1.webp`,
            alt: `Cerrado 1`,
        },
        {
            src: `${pathToCerrado}/forest/cerrado-2.webp`,
            alt: `Cerrado 2`,
        },
        {
            src: `${pathToCerrado}/forest/cerrado-3.webp`,
            alt: `Cerrado 3`,
        },
        {
            src: `${pathToCerrado}/forest/cerrado-4.webp`,
            alt: `Cerrado 4`,
        },
        {
            src: `${pathToCerrado}/forest/cerrado-5.webp`,
            alt: `Cerrado 5`,
        },
    ], 
    animals: [
        {
            src: `${pathToCerrado}/animals/gato-do-mato.webp`,
            alt: `wild cat`,
            captionTitle: 'Gato do mato'
        },
        {
            src: `${pathToCerrado}/animals/lobo-guara.webp`,
            alt: `Guara wolf`,
            captionTitle: 'Lobo guara'
        },
        {
            src: `${pathToCerrado}/animals/raposa-do-campo.webp`,
            alt: `Country fox`,
            captionTitle: 'Raposa do campo'
        },
        {
            src: `${pathToCerrado}/animals/tatu-canastra.webp`,
            alt: `Giant armadillo`,
            captionTitle: 'Tatua canastra'
        },
        {
            src: `${pathToCerrado}/animals/veado-mateiro.webp`,
            alt: `Wild deer`,
            captionTitle: 'Veado mateiro'
        },
    ], 
    flora: [
        {
            src: `${pathToCerrado}/flowers/araca.webp`,
            alt: `arrack`,
            captionTitle: 'Araçá',
        },
        {
            src: `${pathToCerrado}/flowers/cajuzinho-do-cerrado.webp`,
            alt: `Cajuzinho do cerrado`,
            captionTitle: 'Cajuzinho do cerrado'
        },
        {
            src: `${pathToCerrado}/flowers/macauba.webp`,
            alt: `macaúba`,
            captionTitle: 'Macaúba'
        },
        {
            src: `${pathToCerrado}/flowers/mangaba.webp`,
            alt: `mangaba`,
            captionTitle: 'Mangaba'
        },
        {
            src: `${pathToCerrado}/flowers/pequi.webp`,
            alt: `pequi`,
            captionTitle: 'Pequi'
        },
    ]
}