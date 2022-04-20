import image1 from '../../assets/structure1.png'
import image2 from '../../assets/structure2.png'
import image3 from '../../assets/structure3.png'
import image4 from '../../assets/structure4.jpg'

export const headerData = {
    title: 'Nossa Estrutura'
}

export const structure1 = {
    title: 'Vista e Localização privilegiadas',
    description: 'Situado em uma das principais ruas do Tatuapé, o Movi Sky é privilegiado pela sua localização. Lá de cima, temos um panorama espetacular do bairro. Com sua fachada localizada no Eixo Platina, o edifício dispõe de uma vista de tirar o fôlego, temos uma visão ampla para toda a região Leste de São Paulo.',
    subtitle: 'Estrutura 1',
    number: '01',
    image: image1,
    alt: 'Apartment view.',
    custom: false,
    styling: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'start'
    }
}

export const structure2 = {
    title: 'Área de lazer e piscina',
    description: 'O empreendimento conta com uma área de lazer completa, toda equipada, pronta para curtir ótimos momentos. No topo do edifício, o morador pode desfrutar de uma tarde na piscina, aproveitar uma reunião com os amigos na Área Gourmet, ou também relaxar no Fire Lounge (lareira ecológica) apreciando o pôr-do-sol.',
    subtitle: 'Estrutura 2',
    number: '02',
    image: image2,
    alt: 'Apartment view.',
    custom: false,
    styling: {
        width: '60%',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        textAlign: 'end'
    }
}

export const structure3 = {
    title: 'Academia Equipada e Lavanderia',
    description: 'Pensando no seu bem-estar, o Movi Sky traz em sua estrutura espaços desenhados para trazer maior comodidade e qualidade de vida aos seus condôminos. Alinhado ao estilo de vida contemporâneo, o Movi Sky possui uma Lavanderia Coletiva, equipada com máquinas de última tecnologia, buscando atender as necessidades básicas do dia a dia de seus moradores. Situada no Rooftop, com vista exclusiva para a cidade, a Academia do Movi é entregue completa, com equipamentos de primeira linha, para que possa se exercitar, sem deixar o aconchego do lar.',
    subtitle: 'Estrutura 3',
    number: '03',
    image: image3,
    alt: 'Apartment view.',
    custom: false,
    styling: {
        width: '55%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'start'
    }
}

export const structure4 = {
    title: 'Espaço Pet e Salão de Festas',
    description: 'No Movi Sky, você terá um salão de festas amplo e bem equipado para você receber seus convidados e  curtir ótimos momentos em família. Para seu pet, criamos um espaço especial. Nessa área separada para eles, poderão relaxar e fazer suas necessidades, sem mesmo sair do condomínio.',
    subtitle: 'Estrutura 4',
    number: '04',
    image: image4,
    alt: 'Apartment view.',
    custom: true,
    styling: {
        width: '50%',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        textAlign: 'end'
    }
}