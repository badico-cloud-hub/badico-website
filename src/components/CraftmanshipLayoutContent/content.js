import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`

  ${media.greaterThan("760px")`
  padding-top: 3rem;
  
  `}

  ${media.greaterThan("1144px")`
  margin: 0 3rem;
  `}

  ${media.greaterThan("1239px")`
  padding-top: 6rem;
  `}

  ${media.greaterThan("1353px")`
  margin: 0 2rem;
  `}

  ${media.greaterThan("1400px")`
  margin: 0 3rem;
  `}

  ${media.greaterThan("1439px")`
  margin: 0 4rem;
  `}

  ${media.greaterThan("1456px")`
  margin: 0 5rem;
  `} 

  ${media.greaterThan("1464px")`
  margin: 0 6rem;
  `}

  ${media.greaterThan("1496px")`
  margin: 0 7rem;
  `}

  ${media.greaterThan("1500px")`
  margin: 0 7rem;
  `}
  
  ${media.greaterThan("1528px")`
  margin: 0 8rem;
  `}

  ${media.greaterThan("1560px")`
  margin: 0 8.5rem;
  `}

  ${media.greaterThan("1576px")`
  margin: 0 9rem;
  `}

  ${media.greaterThan("1599px")`
  margin: 0 9.5rem;
  `}
`

export const Content = styled.h2`    
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: bold;
    width: 96%;
    position: relative;
  
  :after {
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
    font-size: 1.2rem;
  `}

  ${media.greaterThan("760px")`
      font-size: 1.4rem;
      text-align: center;
      line-height: 2.5rem;
      margin-bottom: 3rem;
      margin-left: 2rem;
      


    :after {
      width: 90px;
      height: 90px;
      border: solid 13px #27debf;
      top: -45%;
      left: -3%;
    }
  `}

  ${media.greaterThan("810px")`
  :after {
    left: -2%;
  `}

  ${media.greaterThan("840px")`
  :after {
    left: 0%;
  }
  `}

  ${media.greaterThan("850px")`
  :after {
    left: -3%;
  }
  `}
  ${media.greaterThan("880px")`
  :after {
    left: -3%;
  }
  `}

  ${media.greaterThan("890px")`
  :after {
    left: -2%;
  }
  `}
  ${media.greaterThan("913px")`
  :after {
    left: -2%;
  }
  `}
  
  ${media.greaterThan("971px")`
    font-size: 1.9rem;

  :after{
    width: 115px;
    height: 115px;
    left: -4%;
    top: -60%;
  }
  `}

  ${media.greaterThan("984px")`
  
    font-size: 1.95rem;
  

  :after{
    width: 115px;
    height: 115px;
    left: -4%;
    top: -60%;
  }
  `}

  ${media.greaterThan("1010px")`
    margin-bottom: 5rem;
  
  :after{
    left: -2%;
  }
  `}

  ${media.greaterThan("1040px")`
  :after{
    left: 0%;
  }
  `}

  ${media.greaterThan("1063px")`
  :after{
    left: -3%;
  }
  `}

  ${media.greaterThan("1080px")`
  :after{
    left: -2%;
  }
  `}

  ${media.greaterThan("1118px")`
  :after{
    left: 0%;
  }
  `}

  ${media.greaterThan("1144px")`
  :after{
    left: -1%;
  }
  `}

  ${media.greaterThan("1159px")`
  :after{
    left: -3%;
  }
  `}

  ${media.greaterThan("1190px")`
  :after{
    left: -2%;
  }
  `}

  ${media.greaterThan("1220px")`
  :after{
    left: 0%;
  }
  `}

  ${media.greaterThan("1239px")`
    line-height: 2.8rem;
    margin-bottom: 6rem;
    font-size: 2.3rem;
  
  :after{
    width: 130px;
    height: 130px;
    left: 4%;
    top: -65%;
  }
  `}

  ${media.greaterThan("1245px")`
  :after{
    left: -3%;
  }
  `}

  ${media.greaterThan("1286px")`
  :after{
    left: 0%;
  }
  `}

  ${media.greaterThan("1310px")`
  :after{
    left: 1%;
  }
  `}

  ${media.greaterThan("1310px")`
  :after{
    left: -3%;
  }
  `}
  ${media.greaterThan("1353px")`
    font-size: 2.7rem;

  :after{
    border: solid 17px #27debf;
    width: 145px;
    height: 145px;
    top: -70%;
    left: 3%;
  }
  `}

  ${media.greaterThan("1368px")`
    font-size: 2.8rem;
    line-height: 3.5rem;
  

  :after{
    width: 160px;
    height: 160px;
    top: -60%;
    left: 2%;
  }
  `}

  ${media.greaterThan("1400px")`
  :after{
    width: 160px;
    height: 160px;
    left: 1%;
    top: -60%;
  }
  `}  

  ${media.greaterThan("1420px")`
  :after{
    left: 2%;
    top: -59%;
  }
  `}

  ${media.greaterThan("1439px")`
  :after{
    left: 1%;
    top: -59%;
  }
  `}
  
  ${media.greaterThan("1456px")`

  font-size: 2.7rem;

  :after{
    left: 2%;
  }
  `} 
  ${media.greaterThan("1464px")`
    font-size: 2.7rem;

  :after{
    left: 0%;
    top: -70%;
    border: solid 25px #27debf;
    width: 180px;
    height: 180px;
  }
  `}

  ${media.greaterThan("1496px")`
  
    font-size: 2.7rem;
  
  :after{
    top: -70%;
    border: solid 25px #27debf;
    width: 180px;
    height: 180px;
  }
  `}

  ${media.greaterThan("1560px")`
  :after{
    border: solid 25px #27debf;
    width: 190px;
    height: 190px;
  }
  `} 

  ${media.greaterThan("1641px")`
  :after{
    border: solid 25px #27debf;
    width: 190px;
    height: 190px;
    left: -5%;
  }
  `} 

  ${media.greaterThan("1690px")`

   :after{
    left: -3%;  
   }
  `}

  ${media.greaterThan("1700px")`

   font-size: 3.1rem;

   :after{
    left: -1%;  
   }
  `}


  `
