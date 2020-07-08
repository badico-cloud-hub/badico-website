import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`
  font-family: GalanoGrotesque;
  h1 {
    
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: bold;
    width: 96%;
    position: relative;
  }
  h1:after {
    content: "";
    background: transparent;
    border: solid 6px #27debf;
    opacity: 68%;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: inline-block;
    position: absolute;
    left: -13px;
    top: -22px;
    z-index: -1;
  }

  ${media.greaterThan("570px")`
    h1{
      font-size: 1.2rem;
    }
  `}

  ${media.greaterThan("760px")`
  padding-top: 3rem;
    h1{
      font-size: 1.4rem;
      text-align: center;
      line-height: 2.5rem;
      margin-bottom: 3rem;
    }

    h1:after {
      width: 90px;
      height: 90px;
      border: solid 13px #27debf;
      top: -45%;
      left: -3%;
    }
  `}

  ${media.greaterThan("850px")`
  h1:after {
    left: 0%;
  }
  `}
  ${media.greaterThan("880px")`
  h1:after {
    left: 4%;
  }
  `}

  ${media.greaterThan("885px")`
  h1:after {
    left: -4%;
  }
  `}
  ${media.greaterThan("913px")`
  h1:after {
    left: -2%;
  }
  `}
  
  ${media.greaterThan("971px")`
  h1{
    font-size: 1.9rem;
  }

  h1:after{
    width: 115px;
    height: 115px;
    left: -4%;
    top: -60%;
  }
  `}

  ${media.greaterThan("984px")`
  h1{
    font-size: 1.95rem;
  }

  h1:after{
    width: 115px;
    height: 115px;
    left: -4%;
    top: -60%;
  }
  `}

  ${media.greaterThan("1010px")`
  h1{
    margin-bottom: 5rem;
  }
  h1:after{
    left: -2%;
  }
  `}

  ${media.greaterThan("1040px")`
  h1:after{
    left: 0%;
  }
  `}

  ${media.greaterThan("1080px")`
  h1:after{
    left: 2%;
  }
  `}

  ${media.greaterThan("1119px")`
  h1:after{
    left: 3%;
  }
  `}

  ${media.greaterThan("1144px")`
  margin: 0 3rem;
  
  h1:after{
    left: -1%;
  }
  `}

  ${media.greaterThan("1239px")`
  padding-top: 6rem;
  h1{
    line-height: 2.8rem;
    margin-bottom: 6rem;
    font-size: 2.3rem;
  }
  h1:after{
    left: -1%;
    top: -50%;
  }
  `}

  ${media.greaterThan("1286px")`
  h1:after{
    left: 0%;
  }
  `}

  ${media.greaterThan("1310px")`
  h1:after{
    left: 1%;
  }
  `}
  ${media.greaterThan("1353px")`
  margin: 0 2rem;

  h1{
    font-size: 2.7rem;
  }

  h1:after{
    border: solid 17px #27debf;
    width: 140px;
    height: 140px;
    top: -70%;
    left: -2%;
  }
  `}

  ${media.greaterThan("1368px")`


  h1{
    font-size: 2.8rem;
    line-height: 3.5rem;
  }

  h1:after{
    width: 160px;
    height: 160px;
    top: -60%;
    left: -4%;
  }
  `}

  ${media.greaterThan("1400px")`
  margin: 0 3rem;
  h1:after{
    width: 160px;
    height: 160px;
    left: -2%;
    top: -60%;
  }
  `}  

  ${media.greaterThan("1420px")`
  
  h1:after{
    left: -3%;
    top: -59%;
  }
  `}

  ${media.greaterThan("1439px")`
  margin: 0 4rem;
  h1:after{
    left: -3%;
    top: -59%;
  }
  `}
  
  ${media.greaterThan("1456px")`
  margin: 0 5rem;
  h1{
    font-size: 2.7rem;
  }
  h1:after{
    left: -2%;
  }
  `} 
  ${media.greaterThan("1464px")`
  margin: 0 6rem;
  h1{
    font-size: 2.7rem;
  }
  h1:after{
    left: -6%;
    top: -70%;
    border: solid 25px #27debf;
    width: 180px;
    height: 180px;
  }
  `}

  ${media.greaterThan("1496px")`
  margin: 0 7rem;
  h1{
    font-size: 2.7rem;
  }
  h1:after{
    left: -6%;
    top: -70%;
    border: solid 25px #27debf;
    width: 180px;
    height: 180px;
  }
  `}
  
  ${media.greaterThan("1500px")`
  margin: 0 7rem;
  
  `}
  
  ${media.greaterThan("1528px")`
  margin: 0 8rem;
  
  `}

  ${media.greaterThan("1560px")`
  margin: 0 8.5rem;
  h1:after{
    border: solid 25px #27debf;
    width: 190px;
    height: 190px;
  }
  `} 

  ${media.greaterThan("1576px")`
  margin: 0 9rem;
  
  `} 

  ${media.greaterThan("1599px")`
  margin: 0 9.5rem;
 
  h1:after{
    left: -4%;
  }
  `}

  ${media.greaterThan("1700px")`
 h1{
   font-size: 3.1rem;
 }
  `}


  `
