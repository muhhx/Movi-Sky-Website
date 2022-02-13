import { Container, ContentWrapper, Description, Image, ImageWrapper, Number, Subtitle, Title } from "./styles";

export default function Items({ item }) {
  console.log(item?.styling?.flexDirection)
  
  return (
    <>
      {!item ? '' : 
      <Container flex={item.styling}>
          <ImageWrapper width={item.styling}>
            <Image src={item.image} alt={item.alt} />
          </ImageWrapper>
          <ContentWrapper align={item.styling}>
            <Subtitle>{item.subtitle}</Subtitle>
            <Title align={item.styling}>{item.title}</Title>
            <Description>{item.description}</Description>
            <Number>{item.number}</Number>
          </ContentWrapper>
      </Container>
      }
    </>
  )
}
