import styled from "styled-components"
import media from "styled-media-query"

export const ProcessWrapper = styled.div`
  font-family: GalanoGrotesque;
  

  .prodImg{
    display: none;
  }

  ${media.greaterThan("768px")`
  margin-top: 6rem;
  position: relative;

  .prodImg{
    display: block;
    width: 35%;
    height: 300px;
    position: absolute;
    left: 60%;
    top: -100px;
  }
  `}

  ${media.greaterThan("1024px")`

  .prodImg{
    left: 55%;
    top: -150px;
    width: 39%;
    height: 500px;
  }
  `}
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-left: 2rem;
  margin-bottom: 3.5rem;

  ${media.greaterThan("768px")`
  margin-bottom: 6rem;
  `}
`

export const Steps = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  

  .stepsDesktop{
    display: none;
  }

  ${media.greaterThan("768px")`
  display: flex;
  height: 500px;
  .stepsDesktop{
    display: inline-block;
    width: 500px;
    height: 90%;
    position: absolute;
    left: -45px;
  }
  `}

  ${media.greaterThan("1024px")`
  .stepsDesktop{
    width: 550px;
    height: 110%;
    left: -15px;
  }
  `}
`

export const Cards =  styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
  max-width: 460px;
  overflow: hidden;
  padding-top: .9rem;

  .no-reverse{
    flex-direction: row;
    margin-left: 1rem;
  }
  
  .reverse{
    flex-direction: row-reverse;
    padding-right: 1.8rem;
  }

  ${media.greaterThan("768px")`
    margin: 0;
    width: 300px;
    overflow: visible;
    position: absolute;
    top: 0;
    left: 0;

    .card1{
      position: absolute;
      top: 0px;
      left: 220px;
    }

    .card2{
      position: absolute;
      top: 115px;
      left: 300px;
    }

    .card3{
      position: absolute;
      top: 230px;
      left: 340px;
    }

    .card4{
      position: absolute;
      top: 340px;
      left: 420px;
    }
  `}

  ${media.greaterThan("1024px")`

    .card1{
      top: 10px;
      left: 250px;
    }

    .card2{
      position: absolute;
      top: 140px;
      left: 350px;
    }

    .card3{
      position: absolute;
      top: 280px;
      left: 430px;
    }

    .card4{
      position: absolute;
      top: 415px;
      left: 500px;
    }
  `}
` 

export const Card = styled.div`
width: 100%;
margin-bottom: 2.5rem; 
display: flex;
justify-content: space-around;

.step1{
  position: relative;
  left: -10px;
}

.content1{
  position: relative;
  left: -22px;
}

.content3{
  position: relative;
  left: -21px;
}



${media.greaterThan("768px")`
width: 90%;
.none{
  display: none;
}
`}

${media.greaterThan("1024px")`
height: 130px;
width: 300px;
`}
`

export const Content = styled.div`
background: #fff;
padding: .5rem;
width: 50%;
box-shadow: 4px 7px 6px #0000003D;
position: relative;

.icon{
  width: 30px;
  height: 30px;
  position: absolute;
  top: -13px;
  right: 12px;
}

h2{
    font-size: .9rem;
    font-weight: 600;
    color: #404040;
}

p{
    font-size: 0.8rem;
    color: #808080;
}

${media.greaterThan("768px")`
  width: 250px;
  height: 90px;
  
`}

${media.greaterThan("1024px")`
height: 110px;
width: 100%;
`}
`
