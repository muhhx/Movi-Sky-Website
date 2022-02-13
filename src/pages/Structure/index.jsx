import { header, structure1, structure2, structure3, structure4 } from './data';
import Header from './Header'
import Items from './Items'
import { Container } from "./styles";

export default function Structure() {
  return (
    <Container>
      <Header />
      <Items item={structure1}/>
      <Items item={structure2}/>
      <Items item={structure3}/>
      <Items item={structure4}/>
    </Container>
  )
}
