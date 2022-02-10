import { Section, StyledMenu, NavigationLink } from "./styles";

export default function Menu() {
  return (
    <StyledMenu>
      <Section>
        <NavigationLink>Apartamentos</NavigationLink>
        <NavigationLink>Estrutura</NavigationLink>
        <NavigationLink>Localização</NavigationLink>
        <NavigationLink>Contato</NavigationLink>
      </Section>
    </StyledMenu>
  )
}
