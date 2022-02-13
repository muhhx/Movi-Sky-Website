import { useMenu } from "./context/menu"

import Header from "./components/Header"
import Menu from "./components/Menu"
import Presentation from './pages/Presentation'
import About from './pages/About'
import Apartment from './pages/Apartment'
import Structure from './pages/Structure'
import { GlobalStyle, Wrapper } from "./components/globalStyles"
import { ThemeProvider } from "styled-components"
import './app.css'

export default function App() {
  const { isOpen } = useMenu()
  document.querySelector('body').style.overflow = isOpen === true ? 'hidden' : 'initial'

  const theme = {
    colors: {
      black: '#333',
      darkerBlack: '#171717',
      orange: '#f15924',
      grey: '#f0f0f0'
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        {isOpen === true ? <Menu /> : ''}
        <Wrapper>
          <Presentation />
          <About />
          <Apartment />
          <Structure />
        </Wrapper>
      </>
    </ThemeProvider>
  )
}