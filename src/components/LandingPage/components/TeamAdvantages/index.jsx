import React from "react"
import * as Styled from "./style"
import CheckedIcon from "../../images/checkedicon.svg"
import ComputerIcon from "../../images/computericon.svg"
import DesktopComputerIcon from "../../images/computericon.svg"
import lang from "../../../../intl/langs"

const TeamAdvantages = ({ language }) => {
  return (
    <Container>
      <div className="desktopIcon">
        <DesktopComputerIcon className="desktopComputer" />
      </div>
      <TextContent>
        <Title>{lang[language]["sectionFinal.title"]} </Title>
        <Text>{lang[language]["sectionFinal.subtitle"]}</Text>
        <Advantages>
          <div className="computerIcon">
            <ComputerIcon className="icon" />
          </div>
          <TextAdvantages>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>{lang[language]["sectionFinal.items.0"]}</p>
            </Advantage>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>{lang[language]["sectionFinal.items.1"]}</p>
            </Advantage>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>{lang[language]["sectionFinal.items.2"]}</p>
            </Advantage>
            {/* <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>{lang[language]["advantage.text.3"]}</p>
            </Advantage> */}
          </TextAdvantages>
        </Advantages>
      </TextContent>
    </Container>
  )
}

export default TeamAdvantages
