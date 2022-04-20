import { Container, ImageWrapper, Image, Description} from './styles'

export default function Mapa({ data }) {
    return (
        <Container>
            <ImageWrapper imageUrl={data.image}>
                <Description>{data.street}</Description>
            </ImageWrapper>
        </Container>
    )
}