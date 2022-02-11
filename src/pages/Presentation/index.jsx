import { presentationData } from './data'
import { Container, ImageWrapper, Image, Info, Subtitle, Title, WrapperHeader, WrapperInfo, VideoWrapper, Video, VideoMask } from './styles'

export default function Presentation() {
    return (
        <Container>
            <WrapperHeader>
                <Title>{presentationData.title}</Title>
                <Subtitle>{presentationData.subtitle}</Subtitle>
                <ImageWrapper>
                    <Image src={presentationData.arrowImage} alt={presentationData.arrowAlt} />
                </ImageWrapper>
            </WrapperHeader>
            <WrapperInfo>
                <Info>{presentationData.credit}</Info>
            </WrapperInfo>
            <VideoMask />
            <VideoWrapper>
                <Video src={presentationData.backgroundVideo} autoPlay loop muted/>
            </VideoWrapper>
        </Container>
    )
}