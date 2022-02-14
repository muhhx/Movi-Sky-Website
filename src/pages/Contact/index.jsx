import { contactData } from './data'
import { Container, Wrapper, Description, Title, Button } from "./styles";

export default function Contact() {
    return (
        <Container>
            <Wrapper>
                <Title>{contactData.title}</Title>
                <Description>{contactData.description}</Description>
                <Button>{contactData.buttonText}</Button>
            </Wrapper>
        </Container>
    )
}