import { Container, ContentWrapper, Description, Image, ImageWrapper, Number, Subtitle, Title, Division, Wrapper } from "./styles";

export default function Items({ item }) {
  return (
    <>
      {!item ? '' : 
      <Container flex={item.styling}>
          <ImageWrapper width={item.styling} custom={item.custom}>
            <Image src={item.image} alt={item.alt} custom={item.custom}/>
          </ImageWrapper>
          <ContentWrapper align={item.styling}>
            <Wrapper>
              <Title align={item.styling}>{item.title}</Title>
              <Division />
              <Description>{item.description}</Description>
              {/* <Number>{item.number}</Number> */}
            </Wrapper>
          </ContentWrapper>
      </Container>
      }
    </>
  )
}
