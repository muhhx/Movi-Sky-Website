import { Container, ImageWrapper, Image, Description} from './styles'

export default function Mapa({ data }) {
    return (
        <Container>
            <ImageWrapper>
                <Image src={data.image} alt={data.alt}/>
                <Description>{data.street}</Description>
            </ImageWrapper>
        </Container>
    )
}