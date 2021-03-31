import React from "react"
import { Container, TextCompanies, DivImages, PrimaryDiv, SecondDiv } from './styled'
import Jump from '../../images/jump.png'
import ZemoPay from '../../images/zemo.svg'
import Tailor from '../../images/tailor.svg'
import Harv from '../../images/harv.svg'
import Bizaline from '../../images/bizaline.svg'

const Companies = () => {
  return(
    <Container>
      <TextCompanies>Companies that trust us</TextCompanies>
        <DivImages>
          <PrimaryDiv>
            <img src={Jump} className='logoJump'/>
            <ZemoPay className='logoZemo'/>
            <Tailor className='logoTailor'/>
          </PrimaryDiv>
          <SecondDiv>
            <Harv className='logoHarv'/>
            <Bizaline className='logoBizaline'/>
          </SecondDiv>
        </DivImages>
    </Container>
  )
}

export default Companies