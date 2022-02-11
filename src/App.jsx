import { useMenu } from "./context/menu"

import Header from "./components/Header"
import Menu from "./components/Menu"
import Presentation from './pages/Presentation'
import About from './pages/About'
import { GlobalStyle, Wrapper } from "./components/globalStyles"

export default function App() {
  const { isOpen } = useMenu()

  document.querySelector('body').style.overflow = isOpen === true ? 'hidden' : 'initial'

  return (
    <>
      <Header />
      {isOpen === true ? <Menu /> : ''}
      <Wrapper>
        <Presentation />
        <About />
        <div>3</div>
      </Wrapper>
      <GlobalStyle />
    </>
  )
}