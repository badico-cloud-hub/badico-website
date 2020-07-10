import styled from "styled-components"
import media from "styled-media-query"

export default styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  position: relative;

  div:nth-child(1),
  div:nth-child(3) {
    margin-right: 2rem;
  }

  div:nth-child(3),
  div:nth-child(4) {
    margin-top: 1.5rem;
  }

  ${media.greaterThan("450px")`
    margin: 1rem;
  `}
  ${media.greaterThan("971px")`
  div:nth-child(2){
    margin-right: 2rem;

  }
  
  div:nth-child(3){
    margin-top: 0;
    margin-right: 0;
  }
  div:nth-child(4) {
    margin-top: 1.5rem;
  }
  `}

  ${media.greaterThan("1000px")`
  div:nth-child(3){
    margin-right: 2rem;
  }

  div:nth-child(4) {
    margin-top: 0;
  }
  `}

`
