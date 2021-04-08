import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Tailor from "../../images/cases/tailor_logo.svg"
import Harv from "../../images/cases/harv_logo.svg"
import Plando from "../../images/cases/plando_logo.svg"
import Jump from "../../images/cases/jump_logo.png"
import SlideTailor from "../../images/cases/tailor_case.png"
import SlideHarv from "../../images/cases/harv_case.png"
import SlidePlando from "../../images/cases/plando_case.png"
import SlideJump from "../../images/cases/jump_case.png"
import { Container } from "./styled"
import {CardsCase, CardCaseJump} from './CardsCase/CardsCase'
import { useWindowSize } from "../../hooks/useWindowsSize"
import { TailorText } from './CardsCase/Texts/TextCases'

const Gallery = () => {
  const size = useWindowSize();
  return (
    <>
      {size.width < 1024 ? (
        <Container>
          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}
          >
            <Carousel
              additionalTransfrom={0}
              arrows
              /*autoPlay
              autoPlaySpeed={2000}*/
              centerMode={true}
              removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              //infinite
              itemClass="item"
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={{
                mobile: {
                  breakpoint: {
                    max: 768,
                    min: 0,
                  },
                  items: 1,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 768,
                  },
                  items: 2,
                },
              }}
              showDots
              slidesToSlide={1}
              swipeable
            >
              <CardsCase
                Logo={Tailor}
                Image={SlideTailor}
                top="-18px"
                height="12px"
                children={<TailorText/>}
              />
              <CardsCase
                Logo={Harv}
                Image={SlideHarv}
                top="-17px"
                height="13px"
              />
              <CardsCase
                Logo={Plando}
                Image={SlidePlando}
                top="-17px"
                height="15px"
              />
              <CardCaseJump
                LogoJump={Jump}
                Image={SlideJump}
                top="-17px"
                width="80px"
                height="15px"
              />
            </Carousel>
          </div>
        </Container>
      ) : (
        null
      )}
    </>
  )
}

export default Gallery
