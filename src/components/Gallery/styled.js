import styled from "styled-components"
import media from "styled-media-query"

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ol.carousel-indicators {
    position: absolute;
    bottom: -15%;
    margin: 0;
    left: 0;
    right: 0;
    width: auto;
  }

  ol.carousel-indicators li {
    width: 8px;
    height: 8px;
    border: 1.5px solid #02293f;
    background: white;
    border-radius: 50%;
    margin-left: 10px;
  }

  ol.carousel-indicators li.active {
    background: #02293f;
  }

  .img {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 70%;
    border-radius: 9px;
  }

  ${media.greaterThan("768px")`
    ol.carousel-indicators li {
        width: 10px;
        height: 10px;
        margin-left: 12px;
    }
    
    .img{
        max-height: 387.781px;
        width: 330px;
    }
  `}
`
