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

const TeamAdvantages = () => {
  return (
    <Container>
      <div className="desktopIcon">
        <DesktopComputerIcon className="desktopComputer" />
      </div>
      <TextContent>
        <Title>
          Temos um time completo que pode atender as suas necessidades
        </Title>
        <Text>
          Desenvolvedores, designers, gerenciadores de projetos, agilistas e
          especialistas de produto. Você que está todo dia na luta por novos
          clientes, dando 200% de si para fidelizar os atuais e quer levar o seu
          negócio para o próximo patamar, se permita, por um minuto, imaginar o
          impacto que um time, com todos esses profissionais, pode causar no seu
          projeto.
        </Text>
        <Advantages>
          <div className="computerIcon">
            <ComputerIcon className="icon" />
          </div>
          <TextAdvantages>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>
                Lorem ipsum posuere nisl cubilia purus iaculis orci bibendum,
                eros class dictum est ut fames risus volutpat luctus, etiam
                sociosqu erat praesent
              </p>
            </Advantage>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>
                Lorem ipsum posuere nisl cubilia purus iaculis orci bibendum,
                eros class dictum est ut fames risus volutpat luctus, etiam
                sociosqu erat praesent
              </p>
            </Advantage>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>
                Lorem ipsum posuere nisl cubilia purus iaculis orci bibendum,
                eros class dictum est ut fames risus volutpat luctus, etiam
                sociosqu erat praesent
              </p>
            </Advantage>
            <Advantage>
              <CheckedIcon className="checkedIcon" />
              <p>
                Lorem ipsum posuere nisl cubilia purus iaculis orci bibendum,
                eros class dictum est ut fames risus volutpat luctus, etiam
                sociosqu erat praesent
              </p>
            </Advantage>
          </TextAdvantages>
        </Advantages>
      </TextContent>
    </Container>
  )
}

export default TeamAdvantages
