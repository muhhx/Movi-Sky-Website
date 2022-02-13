import { Container, Description, Icon, IconWrapper, Title } from './styles'

export default function Item({ data }) {
    return (
        <Container display={data.displayMobile}>
            <IconWrapper>
                <Icon src={data.image} alt={data.alt}/>
            </IconWrapper>
            <Title width={data.width}>{data.title}</Title>
            <Description>{data.description}</Description>
        </Container>
    )
}