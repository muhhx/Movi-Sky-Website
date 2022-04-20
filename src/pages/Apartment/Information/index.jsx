import { informationData } from './data'
import { Section, Container, Description, Division, Image, ImageWrapper, Paragraph, ParagraphWrapper, Title } from "./styles";

export default function Info() {
  return (
    <Section>
      <Container>
        <Description>
          <Title>{informationData.title}</Title>
          <Division />
          <ParagraphWrapper>
            {informationData.descriptions.map((description, index) => (
              <Paragraph key={index}>{description}</Paragraph>
            ))}
          </ParagraphWrapper>
        </Description>
        <ImageWrapper>
          <Image src={informationData.image} alt={informationData.alt}/>
        </ImageWrapper>
      </Container>
    </Section>
  )
}
