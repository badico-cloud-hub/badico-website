import React from "react"
import {
  Container,
  TextContent,
  Title,
  Text,
  Advantages,
  TextAdvantages,
  Advantage,
} from "./style"
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
        <Title>{lang[language]["advantages.title"]} </Title>
        <Text>{lang[language]["advantages.text"]}</Text>
        <Advantages>
          <div className="computerIcon">
            <ComputerIcon className="icon" />
          </div>
          <TextAdvantages>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>{lang[language]["advantage.text.0"]}</p>
            </Advantage>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>{lang[language]["advantage.text.1"]}</p>
            </Advantage>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>{lang[language]["advantage.text.2"]}</p>
            </Advantage>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>{lang[language]["advantage.text.3"]}</p>
            </Advantage>
          </TextAdvantages>
        </Advantages>
      </TextContent>
    </Container>
  )
}

export default TeamAdvantages
