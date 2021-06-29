import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Tailor from "../../../images/cases/tailor_logo.svg"
import Harv from "../../../images/cases/harv_logo.svg"
import Plando from "../../../images/cases/plando_logo.svg"
import Jump from "../../../images/cases/jump_logo.svg"
import SlideTailor from "../../../images/cases/tailor_case.png"
import SlideHarv from "../../../images/cases/harv_case.png"
import SlidePlando from "../../../images/cases/plando_case.png"
import SlideJump from "../../../images/cases/jump_case.png"
import { Container } from "./styled"
import { CardsCase } from "./CardsCase/CardsCase"
import { useWindowSize } from "../../../hooks/useWindowsSize"
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
              width={size.width < 768 ? "67px" : size.width >= 1366 ? "105px" : "96px"}
              height={size.width < 768 ? "31px" : size.width >= 1366 ? "40px" : "31px"}
              top={size.width < 768 ? "-37px" : size.width >= 1366 ? "-50px" : "-50px"}
              Image={SlideTailor}
              children={<TailorText />}
            />

            <CardsCase
              Logo={Harv}
              width={size.width < 768 ? "55px" : size.width >= 1366 ? "84px" : "80px"}
              height={size.width < 768 ? "31px" : size.width >= 1366 ? "40px" : "30px"}
              top={size.width < 768 ? "-37px" : size.width >= 1366 ? "-50px" : "-50px"}
              Image={SlideHarv}
              children={<HarvText />}
            />

            <CardsCase
              Logo={Plando}
              width={size.width < 768 ? "85px" : size.width >= 1366 ? "117px" : "134px"}
              height={size.width < 768 ? "37px" : size.width >= 1366 ? "45px" : "35px"}
              top={size.width < 768 ? "-38px" : size.width >= 1366 ? "-50px" : "-50px"}
              Image={SlidePlando}
              children={<PlanDoText />}
            />
            
            <CardsCase
              Logo={Jump}
              Image={SlideJump}
              width={size.width < 768 ? "105px" : size.width >= 1366 ? "147px" : "175px"}
              height={size.width < 768 ? "35px" : size.width >= 1366 ? "88px" : "31px"}
              top={size.width < 768 ? "-38px" : size.width >= 1366 ? "-73px" : "-50px"}
              children={<CxJumpText />}
            />
            
          </Carousel>
        </div>
      </Container>
    </>
  )
}

export default Gallery
