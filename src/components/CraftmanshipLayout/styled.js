import styled from "styled-components";
import media from "styled-media-query";

export const CraftmanshipLayoutWrapper = styled.div`
    height: 100%;
    margin: 4rem 0;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.greaterThan("760px")`
    margin: 5rem;
    `}
`