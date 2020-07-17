import styled from "styled-components"

export default styled.button`
  color: #FFF; 
  font-family: GalanoGrotesque;
`

/*export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 1.5rem;
  background-color: transparent;
  margin-left: 2rem;
  margin-top: 0.7rem;
  border-radius: 38px;
  font-size: 0.58rem;
  font-family: GalanoGrotesque;
  font-weight: 500;
  width: 6rem;
  color: #27debf;
  border: 1px solid #27debf;
  transition: transform .2s linear;

  :hover {
    transform: scaleX(1.03) scale(1.03);
  }

  :focus {
    outline: none;
  }

  ${media.greaterThan("medium")`
    width: 7rem;
    height: 1.8rem;
    font-size: .7rem;
    margin-left: 0;
  `}

  ${media.greaterThan("1024px")`
    width: 9rem;
    height: 2.5rem;
    font-size: .8rem;
    margin-left: 0;
`}

${media.greaterThan("huge")`
    width: 12rem;
    height: 3.5rem;
    font-size: 1.15rem;
    margin-left: 0;
`}
`
*/