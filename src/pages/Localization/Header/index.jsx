import { BackgroundText1, BackgroundText2, Container, Description, Title, ContentWrapper, BackgroundWrapper } from './styles'

export default function Header({ data }) {
    return (
        <Container>
            <BackgroundWrapper>
                <BackgroundText1>{data.backgroundText}</BackgroundText1>
                <BackgroundText2>{data.backgroundText}</BackgroundText2>
            </BackgroundWrapper>
            <ContentWrapper>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
            </ContentWrapper>
        </Container>
    )
}