import styled from "styled-components"
import media from "styled-media-query"

export default styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem auto; 
  max-width: 450px;
  position: relative;

  div:nth-child(1),
  div:nth-child(3) {
    margin-right: 1.8rem;
  }

  div:nth-child(3),
  div:nth-child(4) {
    margin-top: 1.5rem;
  }
  ${media.greaterThan("768px")`
  max-width: 700px;

  div:nth-child(1),
  div:nth-child(3) {
    margin-right: 3.35rem;
  }

  div:nth-child(3),
  div:nth-child(4) {
    margin-top: 3.4375rem;
  }
  `}

`
