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
import { CardsCase, CardCaseJump } from "./CardsCase/CardsCase"
import { useWindowSize } from "../../hooks/useWindowsSize"
import { TailorText } from "./CardsCase/Texts/Tailor/TextCases"
import { HarvText } from "./CardsCase/Texts/Harv/TextCases"
import { PlanDoText } from "./CardsCase/Texts/PlanDo/TextCases"
import { CxJumpText } from "./CardsCase/Texts/CxJump/TextCases"

const Gallery = () => {
  const size = useWindowSize()
  return (
    <>
      <Container>
        <div className="div">
          <Carousel
            additionalTransfrom={0}
            arrows
            // autoPlay
            // autoPlaySpeed={100}
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
              desktop: {
                breakpoint: { max: 1366, min: 1024 },
                items: 3,
              },
              fulldesktop: {
                breakpoint: { max: 3000, min: 1366 },
                items: 5,
              }
            }}
            showDots
            slidesToSlide={1}
            swipeable
          >
            <CardsCase
              Logo={Tailor}
              Image={SlideTailor}
              children={<TailorText />}
            />

            <CardsCase
              Logo={Harv}
              Image={SlideHarv}
              children={<HarvText />}
            />

            <CardsCase
              Logo={Plando}
              Image={SlidePlando}
              children={<PlanDoText />}
            />
            
            <CardsCase
              // Logo={Jump}
              Logo={Plando}
              // Image={SlideJump}
              Image={SlidePlando}
              children={<CxJumpText />}
            />
            
          </Carousel>
        </div>
      </Container>
    </>
  )
}

export default Gallery
