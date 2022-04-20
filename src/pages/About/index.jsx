import { aboutData } from './data'
import { Background, Container } from "./styles"

import GridLayout from "./GridLayout"
import FlexLayout from './FlexLayout'

export default function About() {
    return (
        <Background>
            <Container>
                <FlexLayout aboutData={aboutData}/>
            </Container>
        </Background>
    )
}