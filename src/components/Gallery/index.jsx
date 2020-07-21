import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import slide01 from "../../images/cases/slide01.png"
import slide02 from "../../images/cases/slide02.png"
import slide03 from "../../images/cases/slide04.png"
import slide04 from "../../images/cases/slide04.png"
import { Image } from "./styled"

const Gallery = () => {
  return (
    <div>
      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={true}
          removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
            },
          }}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Image src={slide01} />
          <Image src={slide02} />
          <Image src={slide03} />
          <Image src={slide04} />
        </Carousel>
      </div>
    </div>
  )
}

export default Gallery
