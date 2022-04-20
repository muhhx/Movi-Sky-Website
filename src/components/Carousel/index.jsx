import { useState } from "react"
import { data } from "./data"
import * as C from "./styles"

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const subIndex = () => {
        currentIndex === 0 ? setCurrentIndex(data.images.length - 1) : setCurrentIndex(currentIndex - 1)
    }
    
    const addIndex = () => {
        currentIndex === data.images.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }

  return (
    <C.Section>
        <C.ContainerWrapper>
            <C.Container>
                <C.Images>
                    <C.ButtonLeft onClick={subIndex}>
                        <C.ArrowLeft src={data.arrow} alt={data.arrowAlt}/>
                    </C.ButtonLeft>
                    <C.Image imageUrl={data.images[currentIndex]}/>
                    <C.ButtonRight onClick={addIndex}>
                        <C.ArrowRight src={data.arrow} alt={data.arrowAlt}/>
                    </C.ButtonRight>
                    <C.Panel>
                        {data.images.map((image, index) => (
                            <C.Option key={index} isSelected={currentIndex === index ? true : false} onClick={() => setCurrentIndex(index)} />
                        ))}
                    </C.Panel>
                </C.Images>
            </C.Container>
        </C.ContainerWrapper>
    </C.Section>
  )
}
