import { headerData, mapData, block1, block2, block3, block4, block5, block6, block7, block8, block9 } from './data';
import Header from './Header'
import Item from './Item'
import Mapa from './Mapa'
import { Container, Grid } from "./styles";

export default function Localization() {
    return (
        <Container>
            <Header data={headerData}/>
            <Grid>
                <Item data={block1}/>
                <Item data={block2}/>
                <Item data={block3}/>
                <Item data={block4}/>
                <Item data={block5}/>
                <Item data={block6}/>
                <Item data={block7}/>
                <Item data={block8}/>
                <Item data={block9}/>
            </Grid>
            <Mapa data={mapData} />
        </Container>
    )
}