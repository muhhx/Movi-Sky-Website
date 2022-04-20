import * as C from "./styles"

export default function FlexLayout({ aboutData }) {
  return (
    <>
        <C.LeftContainer backgroundImage={aboutData.imagePanel}/>
        <C.RightContainer>
            <C.Title>{aboutData.title}</C.Title>
            <C.Information>
                <C.Subtitle>{aboutData.subtitle}</C.Subtitle>
                <C.Paragraph>{aboutData.paragraph}</C.Paragraph>
            </C.Information>
            <C.Button>{aboutData.buttonText}</C.Button>
        </C.RightContainer>
    </>
  )
}
