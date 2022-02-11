import image1 from '../../assets/about_image_1.png'
import image2 from '../../assets/about_image_2.png'
import { Container, Grid, Title, InformationWrapper, Subtitle, Paragraph, Button, Span, Highlighter, ImageWrapper1, ImageWrapper2, Image } from "./styles";

export default function About() {
  return (
    <Container>
        <Grid>
            <Title>Os melhores momentos da sua vida aqui.</Title>
            <InformationWrapper>
                <Subtitle>Entenda como</Subtitle>
                <Paragraph>O Movi Life reúne tudo que você precisa para ter uma vida equilibrada. Tem academia para você se exercitar, área de lazer para receber amigos e família, metrô próximo e também lavanderia para sua maior comodidade. Além, é claro, dos apartamentos que são o espaço perfeito para chamar de seu.</Paragraph>
                <Button>
                    <Span>Fale com nossos corretores</Span>
                    <Highlighter />
                </Button>
            </InformationWrapper>
            <ImageWrapper1>
                <Image src={image1} alt="Background image"/>
            </ImageWrapper1>
            <ImageWrapper2>
                <Image src={image2} alt="Background image"/>
            </ImageWrapper2>
        </Grid>
    </Container>
  )
}