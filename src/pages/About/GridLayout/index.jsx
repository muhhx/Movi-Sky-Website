import { Grid, Title, InformationWrapper, Subtitle, Paragraph, Button, Span, ImageWrapper1, ImageWrapper2, Image } from "./styles";

export default function GridLayout({ aboutData }) {
  return (
    <Grid>
        <Title>{aboutData.title}</Title>
        <InformationWrapper>
            <Subtitle>{aboutData.subtitle}</Subtitle>
            <Paragraph>{aboutData.paragraph}</Paragraph>
            <Button>
                <Span>{aboutData.buttonText}</Span>
            </Button>
        </InformationWrapper>
        <ImageWrapper1>
            <Image src={aboutData.image1} alt={aboutData.alt}/>
        </ImageWrapper1>
        <ImageWrapper2>
            <Image src={aboutData.image2} alt={aboutData.alt}/>
        </ImageWrapper2>
    </Grid>
  )
}
