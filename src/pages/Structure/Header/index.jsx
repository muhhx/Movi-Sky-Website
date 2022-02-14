import { BackgroundText1, BackgroundText2, Container, Title, ContentWrapper, BackgroundWrapper } from './styles'

export default function Header({ data }) {
  return (
    <Container>
      <BackgroundWrapper>
          <BackgroundText1>{data.title}</BackgroundText1>
          <BackgroundText2>{data.title}</BackgroundText2>
      </BackgroundWrapper>
      <ContentWrapper>
          <Title>{data.title}</Title>
      </ContentWrapper>
    </Container>
  )
}
