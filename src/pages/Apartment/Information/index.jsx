import { informationData } from './data'
import { Container, Description, Division, Image, ImageWrapper, Paragraph, ParagraphWrapper, Title } from "./styles";

export default function Info() {
  return (
    <Container>
      <Description>
        <Title>{informationData.title}</Title>
        <Division />
        <ParagraphWrapper>
          <Paragraph>{informationData.description1}</Paragraph>
          <Paragraph>{informationData.description2}</Paragraph>
        </ParagraphWrapper>
      </Description>
      <ImageWrapper>
        <Image src={informationData.image} alt={informationData.alt}/>
      </ImageWrapper>
    </Container>
  )
}
