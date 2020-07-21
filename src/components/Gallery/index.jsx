import React from "react"
import { Carousel } from "react-bootstrap"
import slide01 from "../../images/cases/slide01.png"
import slide02 from "../../images/cases/slide02.png"
import slide03 from "../../images/cases/slide04.png"
import slide04 from "../../images/cases/slide04.png"
import { ImageWrapper } from "./styled"

const Gallery = () => {
  return (
    <ImageWrapper>
      <Carousel className="slide" controls={false}>
        <Carousel.Item>
          <img src={slide01} alt="First image" className="img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide02} alt="Second image" className="img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide03} alt="Three image" className="img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide04} alt="For image" className="img" />
        </Carousel.Item>
      </Carousel>
    </ImageWrapper>
  )
}

export default Gallery
