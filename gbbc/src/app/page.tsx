'use client'

import { CenterDiv } from '@/components/body/CenterDiv'
import { ReactCarousel } from '@/components/carousel/CarouselComponent'
import { amazonCarouselItems } from '@/utils/pages/carousel/amazon'
import { atlanticForestCarouselItems } from '@/utils/pages/carousel/atlanticForest'
import { caatingaCarouselItems } from '@/utils/pages/carousel/caatinga'
import { cerradoCarouselItems } from '@/utils/pages/carousel/cerrado'
import { pampaCarouselItems } from '@/utils/pages/carousel/pampa'
import { pantanalCarouselItems } from '@/utils/pages/carousel/pantanal'
import { ArticleWithBackgroundImage } from '@/components/body/ArticleWithBackgroundImage'
import Image from 'next/image'
import { AnimationComponent } from '@/components/animations/AnimationComponent'
import { bgImages } from '@/utils/pages/bg-images/bg-images'

export default function BiomesPage() {
    return (
        <main className="bg-black text-white">
            <article className="mt-4 mb-4">
                <CenterDiv>
                    <AnimationComponent animationType="slide" direction="left">
                        <h1 className="text-6xl">Biomas brasileiros</h1>
                    </AnimationComponent>
                </CenterDiv>
                <CenterDiv className="mt-4">
                    <AnimationComponent animationType="roll" direction="right">
                        <p className="text-lg">
                            Um bioma é um conjunto de fatores bióticos – vivos –
                            e abióticos – não vivos – que podem ser
                            identificados a nível regional, apresentando
                            condições de geologia e clima semelhantes, em que,
                            ao longo da história, sofreram com os mesmos fatores
                            de formação de paisagem, resultando em uma
                            diversidade de flora e fauna para cada bioma.
                        </p>
                    </AnimationComponent>
                    <AnimationComponent animationType="flip" direction="bottom">
                        <p className="text-lg">
                            O Brasil é formado por seis biomas de
                            características distintas, sendo eles:
                        </p>
                    </AnimationComponent>
                </CenterDiv>

                <AnimationComponent animationType="zoom" direction="right">
                    <CenterDiv className="mt-4 py-4 text-xl">
                        <ul className="list-none">
                            <li>
                                <a href="#amazon">Amazônia</a>
                            </li>
                            <li>
                                <a href="#caatinga">Caatinga</a>
                            </li>
                            <li>
                                <a href="#cerrado">Cerrado</a>
                            </li>
                            <li>
                                <a href="#atlantic-forest">Mata Atlântica</a>
                            </li>
                            <li>
                                <a href="#pampa">Pampa</a>
                            </li>
                            <li>
                                <a href="#pantanal">Pantanal</a>
                            </li>
                        </ul>
                    </CenterDiv>
                </AnimationComponent>
                <AnimationComponent animationType="slide" direction="left">
                    <CenterDiv className="mt-4 px-4">
                        <Image
                            src="/assets/images/biomes/maps/brazilian-biomes-map.webp"
                            alt="Brazil biomes map"
                            width={1280}
                            height={720}
                        ></Image>
                    </CenterDiv>
                    <CenterDiv className="mt-4 px-4">
                        <Image
                            src="/assets/images/biomes/maps/brazilian-climate-map.webp"
                            alt="Brazil climate map"
                            width={1280}
                            height={720}
                        ></Image>
                    </CenterDiv>
                </AnimationComponent>
            </article>
            <ArticleWithBackgroundImage imageSrc={bgImages.amazon}>
                <CenterDiv id="amazon" className="py-4 space-y-4">
                    <AnimationComponent animationType="slide" direction="left">
                        <h1 className="text-5xl">Amazônia</h1>
                        <b></b>
                    </AnimationComponent>
                    <div className="mb-4">
                        <AnimationComponent
                            animationType="fade"
                            direction="top"
                        >
                            <p className="text-lg">
                                O bioma da amazônia ocupa cerca de 49% do
                                território brasileiro, possuindo a maior
                                floresta tropical do mundo, sendo equivalente a
                                1/3 das reservas de florestas tropicais úmidas
                                do mundo, abrigando a maior quantidade de
                                biodiversidade do planeta. Contendo cerca de 20%
                                da quantidade de água mundial e grande reservas
                                de minerais.
                            </p>
                            <p className="text-lg">
                                O clima da Amazônia é o <em>equatorial</em>{' '}
                                sendo caracterizado pela temperatura elevada,
                                grande umidade e baixa amplitude térmica,
                                variando entre 24°C e 26°C ao longo do ano.
                            </p>
                            <p className="text-lg">
                                Possui uma quantidade de chuvas adubante, em
                                média 2.000 mm anuais, os períodos de estiagem
                                praticamente não são percebidos
                            </p>
                        </AnimationComponent>
                    </div>
                    <div>
                        <ReactCarousel
                            carrouselItems={amazonCarouselItems.forest}
                        ></ReactCarousel>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="top"
                        >
                            <h2 className="text-2xl">Fauna</h2>
                        </AnimationComponent>
                        <AnimationComponent
                            animationType="bounce"
                            direction="right"
                        >
                            <p className="text-lg">
                                Possuindo uma riqueza animal incalculável, com
                                aproximadamente 30 milhões de espécies animais,
                                possuindo com uma complexa e rica teia
                                alimentar.
                            </p>
                        </AnimationComponent>
                        <div>
                            <ReactCarousel
                                carrouselItems={amazonCarouselItems.animals}
                            ></ReactCarousel>
                        </div>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="right"
                        >
                            <h2 className="text-2xl">Flora</h2>
                        </AnimationComponent>
                        <AnimationComponent
                            animationType="fade"
                            direction="bottom"
                        >
                            <p className="text-lg">
                                As plantas da Amazônia possuem grande valor de
                                uso pelo ser humano, com plantas que podem ser
                                usadas desde remédios até produtos artesanais,
                                possuindo cerca de 14.000 espécies de árvores
                                que possuem sementes.
                            </p>
                        </AnimationComponent>
                        <div>
                            <ReactCarousel
                                carrouselItems={amazonCarouselItems.flora}
                            ></ReactCarousel>
                        </div>
                    </div>
                </CenterDiv>
            </ArticleWithBackgroundImage>
            <ArticleWithBackgroundImage imageSrc={bgImages.caatinga}>
                <CenterDiv id="caatinga" className="py-4 text-black space-y-4">
                    <AnimationComponent animationType="slide" direction="left">
                        <h1 className="text-5xl">Caatinga</h1>
                        <br />
                    </AnimationComponent>
                    <div className="mb-4">
                        <AnimationComponent
                            animationType="flip"
                            direction="left"
                        >
                            <p className="text-lg">
                                Ocupa aproximadamente 10% do território,
                                localizado em uma área de clima semiárido, com
                                grande variedade de paisagens.
                            </p>
                            <p className="text-lg">
                                O desmatamento e as queimadas são muito comuns
                                nesse bioma, sendo que aproximadamente 36% da
                                área original desse bioma já foi ocupada pelo
                                homem, para a prática da agropecuária.
                            </p>
                            <p className="text-lg">
                                A caatinga está localizada entre as zonas
                                climáticas <em>Tropical Zona Equatorial</em> e o
                                <em>Tropical Brasil Central</em>, em decorrência
                                disso, possui uma clima semiárido, com
                                precipitação média de 800mm por ano, com
                                períodos chuvosos que podem chegar a anualmente
                                1000mm, enquanto nos mais secos chega apenas a
                                200mm.
                            </p>
                        </AnimationComponent>
                    </div>
                    <div>
                        <ReactCarousel
                            carrouselItems={caatingaCarouselItems.forest}
                        ></ReactCarousel>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="top"
                        >
                            <h2 className="text-2xl">Fauna</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="bounce"
                                direction="bottom"
                            >
                                <p className="text-lg">
                                    A fauna da Caatinga é bastante
                                    diversificada, com cerca de 1.200 espécies
                                    de animais, incluindo mamíferos, aves,
                                    répteis, anfíbios e peixes. Entre as quais
                                    327 são espécies são endêmicas, ou seja, só
                                    ocorrem nesse bioma.
                                </p>
                                <br />
                                <p className="text-lg">
                                    Os animais da Caatinga apresentam adaptações
                                    para sobreviver às condições adversas do
                                    clima semiárido.
                                </p>
                                <br />
                                <ol className="list-decimal text-lg space-y-4">
                                    <li>
                                        <strong>
                                            Mudanças no comportamento:{' '}
                                        </strong>
                                        alguns animais são ativos à noite,
                                        quando as temperaturas são mais amenas,
                                        ou realizam migrações para regiões mais
                                        úmidas durante a seca.
                                    </li>
                                    <li>
                                        <strong>Mudanças na dieta:</strong>{' '}
                                        alguns animais se alimentam de plantas
                                        adaptadas ao clima semiárido, como
                                        cactos e bromélias.
                                    </li>
                                </ol>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={caatingaCarouselItems.animals}
                            ></ReactCarousel>
                        </div>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="right"
                        >
                            <h2 className="text-2xl">Flora</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="roll"
                                direction="top"
                            >
                                <p className="text-lg">
                                    A flora da Caatinga é bastante
                                    diversificada, com cerca de 3.347 espécies
                                    de plantas, incluindo árvores, arbustos,
                                    cactos, bromélias e gramíneas. Muitas dessas
                                    espécies são endêmicas, ou seja, só ocorrem
                                    nesse bioma.
                                </p>
                                <br />
                                <p className="text-lg">
                                    As plantas da Caatinga apresentam adaptações
                                    para sobreviver às condições adversas do
                                    clima semiárido. Algumas dessas adaptações
                                    incluem:
                                </p>
                                <br />
                                <ol className="list-decimal text-lg space-y-4">
                                    <li>
                                        <strong>
                                            Perda de folhas na seca:
                                        </strong>{' '}
                                        plantas da Caatinga perdem suas folhas
                                        durante a seca, para reduzir a perda de
                                        água.
                                    </li>
                                    <li>
                                        <strong>Presença de espinhos:</strong>{' '}
                                        os espinhos ajudam a proteger as plantas
                                        de predadores e da perda de água.
                                    </li>
                                    <li>
                                        <strong>
                                            Sistema radicular profundo:
                                        </strong>{' '}
                                        as plantas da Caatinga possuem raízes
                                        profundas, que permitem que elas
                                        alcancem água do subsolo.
                                    </li>
                                    <li>
                                        <strong>
                                            Capacidade de armazenamento de água:
                                        </strong>{' '}
                                        algumas plantas da Caatinga, como os
                                        cactos, são capazes de armazenar água em
                                        seus tecidos.
                                    </li>
                                </ol>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={caatingaCarouselItems.flora}
                            ></ReactCarousel>
                        </div>
                    </div>
                </CenterDiv>
            </ArticleWithBackgroundImage>
            <ArticleWithBackgroundImage imageSrc={bgImages.cerrado}>
                <CenterDiv id="cerrado" className="space-4">
                    <h1 className="text-5xl">Cerrado</h1>
                    <div className="mb-4">
                        <AnimationComponent
                            animationType="zoom"
                            direction="top"
                        >
                            <p className="text-lg">
                                Ocorre principalmente no Planalto Central
                                Brasileiro, ocupando algo em torno de 24% do
                                território.
                            </p>
                            <p className="text-lg">
                                Conhecido popularmente como “Savana brasileira”,
                                uma vez que é a savana mais rica do mundo, em
                                termos de biodiversidade.
                            </p>
                            <p className="text-lg">
                                Mantidos praticamente intactos até a década de
                                1950, porém, com a transferência da Capital, do
                                Rio de Janeiro para Brasília, além da abertura
                                de uma nova rede rodoviária, o bioma começou a
                                sofrer com a pecuária e à agricultura intensiva.
                            </p>
                            <p className="text-lg">
                                O Cerrado está localizado na zona{' '}
                                <em>Tropical Brasil Central</em>, por causa
                                disso apresenta temperaturas elevadas com uma
                                média de 24°C, possuindo uma amplitude térmica
                                que oscila entre 5°C e 6°C ao longo do ano. As
                                chuvas giram em torno de 1.500 mm ao ano, com
                                duas estações bem definidas, sendo uma seca, de
                                maio a setembro, e outra chuvosa, outubro a
                                abril.
                            </p>
                        </AnimationComponent>
                    </div>
                    <div>
                        <ReactCarousel
                            carrouselItems={cerradoCarouselItems.forest}
                        ></ReactCarousel>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="top"
                        >
                            <h2 className="text-2xl">Fauna</h2>
                        </AnimationComponent>
                        <AnimationComponent
                            animationType="flip"
                            direction="top"
                        >
                            <p className="text-lg">
                                A fauna do Cerrado é bastante diversificada, com
                                cerca de 320.000 espécies de animais, incluindo
                                mamíferos, aves, répteis, anfíbios e peixes,
                                sendo que 67.00 são invertebrados,
                                correspondendo a 20% da biota desse bioma.
                                Muitas dessas espécies são endêmicas, ou seja,
                                só ocorrem nesse bioma.
                            </p>
                        </AnimationComponent>
                        <div>
                            <ReactCarousel
                                carrouselItems={cerradoCarouselItems.animals}
                            ></ReactCarousel>
                        </div>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="right"
                        >
                            <h2 className="text-2xl">Flora</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="slide"
                                direction="right"
                            >
                                <p className="text-lg">
                                    A flora do Cerrado é bastante diversa, com
                                    mais de 6000 espécies de plantas, incluindo
                                    árvores, arbustos, cactos, bromélias e
                                    gramíneas.
                                </p>
                                <p className="text-lg">
                                    Assim como na Caatinga, a flora do Cerrado
                                    apresenta adaptações semelhantes, afim de
                                    evitar a perda de água.
                                </p>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={cerradoCarouselItems.flora}
                            ></ReactCarousel>
                        </div>
                    </div>
                </CenterDiv>
            </ArticleWithBackgroundImage>
            <ArticleWithBackgroundImage imageSrc={bgImages.atlanticForest}>
                <CenterDiv id="atlantic-forest" className="py-4 space-y-4">
                    <h1 className="text-5xl">Mata Atlântica</h1>
                    <div className="mb-4">
                        <AnimationComponent
                            animationType="roll"
                            direction="left"
                        >
                            <p className="text-lg">
                                Ocupa aproximadamente 13% do território
                                brasileiro, localizado na região litorânea.
                            </p>
                            <p className="text-lg">
                                É o bioma mais ameaçado, uma vez que apenas 27%
                                de sua cobertura florestal original ainda está
                                intacta.
                            </p>
                            <p className="text-lg">
                                A Mata Atlântica está localizada na zona
                                climática <em>Tropical Nordeste Oriental </em>,
                                que ocorre principalmente no litoral oriental e
                                sul do Brasil, possuindo alta temperatura e
                                elevada umidade. As temperaturas batem em torno
                                de 25°C e dos índices de chuvas são entre 1250mm
                                e 2000mm.
                            </p>
                        </AnimationComponent>
                    </div>
                    <div>
                        <ReactCarousel
                            carrouselItems={atlanticForestCarouselItems.forest}
                        ></ReactCarousel>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="top"
                        >
                            <h2 className="text-2xl">Fauna</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="fade"
                                direction="bottom"
                            >
                                <p className="text-lg">
                                    A fauna da Mata Atlântica é uma das mais
                                    ricas do mundo, com o número de espécies
                                    avaliadas em 11.811
                                </p>
                                <p className="text-lg">
                                    Os animais da Mata Atlântica apresentam
                                    adaptações para sobreviver às condições do
                                    bioma, que é caracterizado por florestas
                                    tropicais úmidas, com clima quente e
                                    chuvoso.
                                </p>
                                <p className="text-lg">
                                    Como é o caso da camuflagem, que permite ao
                                    animal se esconder de preadores e se
                                    aproximar de presas.
                                </p>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={
                                    atlanticForestCarouselItems.animals
                                }
                            ></ReactCarousel>
                        </div>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="right"
                        >
                            <h2 className="text-2xl">Flora</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="flip"
                                direction="left"
                            >
                                <p className="text-lg">
                                    A flora da Mata Atlântica é também muito
                                    rica, com cerca de 20.000 espécies de
                                    plantas, incluindo árvores, arbustos,
                                    trepadeiras, lianas, orquídeas e bromélias.
                                </p>
                                <p className="text-lg">
                                    As plantas da Mata Atlântica apresentam
                                    adaptações para sobreviver às condições do
                                    bioma, que é caracterizado por florestas
                                    tropicais úmidas, com clima quente e
                                    chuvoso. Como por exemplo:
                                </p>
                                <ol className="list-decimal text-lg space-y-4">
                                    <li>
                                        Crescimento rápido: muitas plantas da
                                        Mata Atlântica crescem rapidamente para
                                        aproveitar a luz solar antes que a
                                        floresta seja fechada.
                                    </li>
                                    <li>
                                        Adaptações à luz: algumas plantas da
                                        Mata Atlântica são adaptadas a viver na
                                        sombra, como as bromélias e as
                                        orquídeas.
                                    </li>
                                </ol>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={
                                    atlanticForestCarouselItems.flora
                                }
                            ></ReactCarousel>
                        </div>
                    </div>
                </CenterDiv>
            </ArticleWithBackgroundImage>
            <ArticleWithBackgroundImage imageSrc={bgImages.pampa}>
                <CenterDiv id="pampa" className="py-4 space-y-4">
                    <h1 className="text-5xl">Pampa</h1>
                    <div className="mb-4">
                        <AnimationComponent
                            animationType="fade"
                            direction="bottom"
                        >
                            <p className="text-lg">
                                O bioma pampa ocupa aproximadamente 2% do
                                Território Nacional, sendo caracterizado por um
                                clima chuvoso, sem período de secas, chegando a
                                temperaturas negativas no inverno.
                            </p>
                            <p className="text-lg">
                                É muito usado como pastagem natural do gado, ou
                                como atividades agrícolas, em especial o cultivo
                                do arroz.
                            </p>
                            <p className="text-lg">
                                A Pampa está localizada na zona{' '}
                                <em>temperada</em> que ocorre unicamente na
                                região Sul, se diferencia do restante do Brasil,
                                com médias anuais de temperatura girando em
                                torno de 18°C, com alta amplitude térmica. As
                                chuvas são bem distribuídas, superando os 1.250
                                mm ao ano.
                            </p>
                        </AnimationComponent>
                    </div>
                    <div>
                        <ReactCarousel
                            carrouselItems={pampaCarouselItems.forest}
                        ></ReactCarousel>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="top"
                        >
                            <h2 className="text-2xl">Fauna</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="zoom"
                                direction="left"
                            >
                                <p className="text-lg">
                                    A fauna é expressiva, com quase 500 espécies
                                    de aves, 100 espécies de mamíferos
                                    terrestres, entre outras.
                                </p>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={pampaCarouselItems.animals}
                            ></ReactCarousel>
                        </div>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="right"
                        >
                            <h2 className="text-2xl">Flora</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="zoom"
                                direction="left"
                            >
                                <p className="text-lg">
                                    A fauna flora do pampa, bem como a fauna,
                                    ainda não foram completamente descritas pela
                                    ciência.
                                </p>
                                <p className="text-lg">
                                    Estima-se que ela possua cerca de 3000
                                    espécies de plantas, com mais de 450
                                    espécies de gramíneas, além de 150 espécies
                                    de plantas leguminosas.
                                </p>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={pampaCarouselItems.flora}
                            ></ReactCarousel>
                        </div>
                    </div>
                </CenterDiv>
            </ArticleWithBackgroundImage>
            <ArticleWithBackgroundImage imageSrc={bgImages.pantanal}>
                <CenterDiv id="pantanal" className="space-y-4">
                    <h1 className="text-5xl">Pantanal</h1>
                    <div className="mb-4">
                        <AnimationComponent
                            animationType="bounce"
                            direction="left"
                        >
                            <p className="text-lg">
                                Outro bioma que ocupa aproximadamente 2% do
                                Brasil, esse é o pantanal, sendo reconhecido
                                como a maior planície de inundação contínua da
                                terra, se diferenciando dos demais biomas, esse
                                é o bioma com o maior índice de preservação,
                                quando comparado com os demais biomas.
                            </p>
                            <p className="text-lg">
                                A criação de gados é uma atividade importante
                                para a economia da região, aliada ao turismo.
                            </p>
                            <p className="text-lg">
                                Assim como o Cerrado, o Pantanal está localizado
                                na zona do <em>Tropical Brasil Central</em>, por
                                esse motivo, possui clima quente e úmido no
                                verão, além de frio e seco no inverno.
                            </p>
                        </AnimationComponent>
                    </div>
                    <div>
                        <ReactCarousel
                            carrouselItems={pantanalCarouselItems.forest}
                        ></ReactCarousel>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="top"
                        >
                            <h2 className="text-2xl">Fauna</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="roll"
                                direction="bottom"
                            >
                                <p className="text-lg">
                                    O pantanal possui uma fauna riquíssima,
                                    segundo o IBGE, o pantanal possui:
                                </p>
                                <ul>
                                    <li>
                                        132 espécies de{' '}
                                        <strong>mamíferos</strong>
                                    </li>
                                    <li>
                                        85 espécies de <strong>répteis</strong>{' '}
                                        (sendo os jacarés com a maior variedade)
                                    </li>
                                    <li>
                                        463 espécies de <strong>aves</strong>
                                    </li>
                                    <li>
                                        35 espécies de <strong>anfíbios</strong>
                                    </li>
                                    <li>
                                        263 espécies de <strong>peixes</strong>
                                    </li>
                                </ul>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={pantanalCarouselItems.animals}
                            ></ReactCarousel>
                        </div>
                    </div>
                    <div>
                        <AnimationComponent
                            animationType="slide"
                            direction="right"
                        >
                            <h2 className="text-2xl">Flora</h2>
                        </AnimationComponent>
                        <div>
                            <AnimationComponent
                                animationType="bounce"
                                direction="left"
                            >
                                <p className="text-lg">
                                    Por ser um bioma com ligações próximas à
                                    Floresta Amazônica e ao Cerrado, a
                                    vegetação, bem como a paisagem, do Pantanal
                                    é diversificada, com árvores de médio e
                                    grande porte, típicas da Amazônia, porém,
                                    com árvores tortuosas de baixo e médio
                                    porte, comuns no Cerrado.
                                </p>
                                <p className="text-lg">
                                    São mais de 2000 mil espécies de plantas,
                                    catalogadas pela Embrapa.
                                </p>
                            </AnimationComponent>
                        </div>
                        <div>
                            <ReactCarousel
                                carrouselItems={pantanalCarouselItems.flora}
                            ></ReactCarousel>
                        </div>
                    </div>
                </CenterDiv>
            </ArticleWithBackgroundImage>
        </main>
    )
}
