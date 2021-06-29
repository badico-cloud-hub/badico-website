import styled from "styled-components"
import media from "styled-media-query"

export const ProcessWrapper = styled.div`
  font-family: Roboto;

  ${media.greaterThan("768px")`
    width: 592px;
    height: 972px;
    margin: 0 auto;
  `}

  ${media.greaterThan("1024px")`
    margin-top: 300px;
  
  `}

  ${media.greaterThan("1920px")`
    height: 1200px;

  `}
`

export const Title = styled.h1`
  font-size: 1.25rem;
  margin: 6rem auto 3.5rem auto;
  display: flex;
  justify-content: center;

  ${media.greaterThan("768px")`
  margin-bottom: 6rem;
  font-size: 1.5rem;
  `}

  ${media.greaterThan("1920px")`
  font-size: 2.125rem;
  `}
`

export const BoxImage = styled.div`
  display: none;

  .prodImg {
    display: none;
  }

  ${media.greaterThan("1024px")`
  display: inline-block;
  position: relative;
  left: 390px;
  bottom: 350px;
  float: right; 

  .prodImg{
    display: inline-block;
    width: 555px;
    height: 403px;
  }
  `}

  ${media.greaterThan("1920px")`
  left: 550px;
  bottom: 320px;
    
  .prodImg{
    width: 648px;
    height: 573px;
  }
  `}
`

export const Steps = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  .stepsDesktop {
    display: none;
  }

  ${media.greaterThan("768px")`
  display: flex;
  height: 500px;
  `}

  ${media.greaterThan("1024px")`
  .stepsDesktop{
    display: block;
    width: 660px;
    height: 886px;
    position: absolute;
    left: -280px;
  }
  `}

  ${media.greaterThan("1920px")`
  .stepsDesktop{
    width: 795px;
    height: 1068px;
    position: absolute;
    left: -400px;
  }
  `}
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 320px;
  overflow: hidden;
  padding-top: 0.9rem;

  .no-reverse {
    flex-direction: row;
    margin-left: 1rem;
  }

  .reverse {
    flex-direction: row-reverse;
    padding-right: 1.8rem;
  }

  ${media.greaterThan("768px")`
    overflow: visible;
    margin: 0;
    width: 100%;
  `}

  ${media.greaterThan("1024px")`
  
  `}
`

export const Card = styled.div`
  width: 100%;
  height: 84px;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-around;

  .none {
    width: 100%;
    height: 100%;
  }

  .containerStep {
    width: 126px;
    height: 84px;
  }

  .content1 {
    position: relative;
    left: -22px;
  }

  .content3 {
    position: relative;
    left: -21px;
  }

  ${media.greaterThan("768px")`
  width: 100%;
  height: 159px;
  border: 0;
  margin-bottom: 87px;

  .containerStep{
    width: 239px;
    height: 160px;
  }
  .step1{
    width: 100%;
    height: 100%;
  }
  .none{
    display: block;
    width: 239px;
    height: 160px;
  }
`}

${media.greaterThan("1024px")`
  height: 167px;
  width: 377px;

  .none{
    display: none;
  }

  .containerStep{
    display: none;
  }

  .content1{
    position: relative;
    left: 50px;
    top: 30px;
  }

  .content2{
    position: relative;
    left: 200px;
    bottom: 10px;
  }

  .content3{
    position: relative;
    left: 290px;
    bottom: 60px;
  }

  .content4{
    position: relative;
    left: 420px;
    bottom: 100px;
  }
`}

${media.greaterThan("1920px")`
  height: 201px;
  width: 454px;

  .content1{
    left: -30px;
    top: 30px;
  }

  .content2{
    left: 150px;
    bottom: 0px;
  }

  .content3{
    left: 260px;
    bottom: 40px;
  }

  .content4{
    left: 460px;
    bottom: 70px;
  }
`}
`

export const Content = styled.div`
  background: #fff;
  padding: 0.5625rem;
  width: 146px;
  height: 89px;
  box-shadow: 4px 7px 6px #0000003d;
  position: relative;

  .icon {
    width: 35px;
    height: 35px;
    position: absolute;
    top: -13px;
    right: 12px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px #00000029;
  }

  h2 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #404040;
  }

  p {
    font-size: 0.75rem;
    color: #808080;
  }

  ${media.greaterThan("768px")`
  width: 278px;
  height: 170px;
  padding: 1.5625rem 1.0625rem;

  .icon {
    width: 56px;
    height: 56px;
  }

  h2{
    font-size: 1.25rem;
  }

  p{
    font-size: 1rem;
  }
`}

  ${media.greaterThan("1024px")`
  height: 100%;
  width: 100%;


  h2 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1.25rem;
  }
`}
`
