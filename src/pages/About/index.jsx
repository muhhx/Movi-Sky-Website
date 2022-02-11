import { aboutData } from './data'
import { Container, Grid, Title, InformationWrapper, Subtitle, Paragraph, Button, Span, Highlighter, ImageWrapper1, ImageWrapper2, Image } from "./styles";

export default function About() {
    return (
    <Container>
        <Grid>
            <Title>{aboutData.title}</Title>
            <InformationWrapper>
                <Subtitle>{aboutData.subtitle}</Subtitle>
                <Paragraph>{aboutData.paragraph}</Paragraph>
                <Button>
                    <Span>{aboutData.buttonText}</Span>
                    <Highlighter />
                </Button>
            </InformationWrapper>
            <ImageWrapper1>
                <Image src={aboutData.image1} alt={aboutData.alt}/>
            </ImageWrapper1>
            <ImageWrapper2>
                <Image src={aboutData.image2} alt={aboutData.alt}/>
            </ImageWrapper2>
        </Grid>
    </Container>
    )
}