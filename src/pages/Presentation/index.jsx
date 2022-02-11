import arrow from '../../assets/arrow.png'
import video from '../../assets/background_video.mp4'
import { Container, ImageWrapper, Image, Info, Subtitle, Title, WrapperHeader, WrapperInfo, VideoWrapper, Video, VideoMask } from './styles'

export default function Presentation() {
    return (
        <Container>
            <WrapperHeader>
                <Title>{'Conheça Unidade Japi'}</Title>
                <Subtitle>{'Feito para o futuro, feito para você'}</Subtitle>
                <ImageWrapper>
                    <Image src={arrow} alt="Arrow" />
                </ImageWrapper>
            </WrapperHeader>
            <WrapperInfo>
                <Info>{'Projeto Arquitetônico por J&JAbraao'}</Info>
            </WrapperInfo>
            <VideoMask />
            <VideoWrapper>
                <Video src={video} autoPlay loop muted/>
            </VideoWrapper>
        </Container>
    )
}