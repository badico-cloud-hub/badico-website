import React from "react"
import * as Styled from "./style"
import CheckedIcon from "../images/checkedicon.svg"
import ComputerIcon from "../images/computericon.svg"
import DesktopComputerIcon from "../images/computericon.svg"
import lang from "../../../intl/langs"

const TeamAdvantages = ({ language }) => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <div className="desktopIcon">
          <DesktopComputerIcon className="desktopComputer" />
        </div>
        <Styled.TextContent>
          <Styled.Title>{lang[language]["sectionFinal.title"]} </Styled.Title>
          <Styled.Text>{lang[language]["sectionFinal.subtitle"]}</Styled.Text>
          <Styled.Advantages>
            <div className="computerIcon">
              <ComputerIcon className="icon" />
            </div>
            <Styled.TextAdvantages>
              <Styled.Advantage>
                <CheckedIcon className="checkedIcon" />
                <p>{lang[language]["sectionFinal.items.0"]}</p>
              </Styled.Advantage>
              <Styled.Advantage>
                <CheckedIcon className="checkedIcon" />
                <p>{lang[language]["sectionFinal.items.1"]}</p>
              </Styled.Advantage>
              <Styled.Advantage>
                <CheckedIcon className="checkedIcon" />
                <p>{lang[language]["sectionFinal.items.2"]}</p>
              </Styled.Advantage>
              {/* <Styled.Advantage>
                <CheckedIcon className="checkedIcon" />
                <p>{lang[language]["sectionFinal.items.2"]}</p>
              </Styled.Advantage> */}
            </Styled.TextAdvantages>
          </Styled.Advantages>
        </Styled.TextContent>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default TeamAdvantages
