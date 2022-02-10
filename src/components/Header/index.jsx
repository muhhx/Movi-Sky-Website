import { useMenu } from '../../context/menu'
import { Background, Container, Hamburger, HamburgerImage, Header, LogoContainer, Logo, Button, Span, Highlighter } from "./styles"
import logo from '../../assets/logo.png'

export default function Navbar() {
  const { isOpen, hamImage, handleMenu } = useMenu()

  return (
    <Header>
      <Background status={isOpen}>
        <Container>
          <Hamburger onClick={handleMenu}>
            <HamburgerImage src={hamImage} alt="Navigation menu opener" />
          </Hamburger>
          <LogoContainer>
            <Logo src={logo} alt="Company logo"/>
          </LogoContainer>
          <Button>
            <Span>Fale com nossos corretores</Span>
            <Highlighter />
          </Button>
        </Container>
      </Background>
    </Header>
  )
}
