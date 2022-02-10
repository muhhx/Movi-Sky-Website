import { useMenu } from "./context/menu"

import Header from "./components/Header"
import Menu from "./components/Menu"

import { GlobalStyle, Section } from "./components/globalStyles"

export default function App() {
  const { isOpen } = useMenu()

  document.querySelector('body').style.overflow = isOpen === true ? 'hidden' : 'initial'

  return (
    <>
      <Header />
      {isOpen === true ? <Menu /> : ''}
      <Section>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Section>
      <GlobalStyle />
    </>
  )
}