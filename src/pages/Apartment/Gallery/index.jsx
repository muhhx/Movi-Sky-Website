import { galleryImages } from './data'
import { Container, Image, Image2, ImageWrapper1, ImageWrapper2, ImageWrapper3, ImageWrapper4 } from './styles'

export default function Gallery() {
  return (
    <Container>
      <ImageWrapper1>
        <Image src={galleryImages.image2} alt={galleryImages.alt}/>
      </ImageWrapper1>
      <ImageWrapper2>
        <Image src={galleryImages.image4} alt={galleryImages.alt}/>
      </ImageWrapper2>
      <ImageWrapper3>
        <Image2 src={galleryImages.image3} alt={galleryImages.alt}/>
      </ImageWrapper3>
      <ImageWrapper4>
        <Image2 src={galleryImages.image5} alt={galleryImages.alt}/>
      </ImageWrapper4>
    </Container>
  )
}
