import styled from "styled-components"
import media from "styled-media-query"

export const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("1150px")`
  width: 80%;
  max-width: 230px;
  `}
`

export const ImgProfile = styled.img`
  border-radius: 50%;
  align-self: center;

  ${media.greaterThan("450px")`
  width: 65%;
  `}

  ${media.greaterThan("768px")`
  width: 75%;
  `}
`
export const Content = styled.div`
  padding: 0;
`

  font-weight: 500;
  color: #02293f;
  text-align: center;

  ${media.greaterThan("450px")`
  font-size: 0.85rem;
  `}

  ${media.greaterThan("768px")`
  font-size: 1.2rem;
  `}
`

  color: #8ccac4;
  font-weight: 500;

  ${media.greaterThan("450px")`
  font-size: 0.75rem;
  `}

  ${media.greaterThan("768px")`
  font-size: 1rem;
  `}
`