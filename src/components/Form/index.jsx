import React from "react"
import {
    Container,
    TitleContact,
    TextContact,
    DivForm,
    NameInput,
    EmailInput,
    TextInput,
    EmailContactButton,
    WhatsappContactButton,
    DivTelemarketing,
    DivContact
} from "./style"
import Telemarketing from "../../images/telemarketing.svg"

const Form = () => {
    return (
        <Container>
            <DivTelemarketing>
                <Telemarketing />
            </DivTelemarketing>
            <DivContact>
                <TitleContact>
                    <p>Talk to us</p>
                </TitleContact>
                <TextContact>
                    <p>Lorem ipsum dolor sit amet, consectetur pretium pretium tempor.Lorem ipsum dolor</p>
                </TextContact>
                <DivForm>
                    <div className="divInputs">
                        <NameInput type="text" placeholder="Name*"></NameInput>
                        <EmailInput type="email" placeholder="Email*"></EmailInput>
                    </div>
                    <TextInput type="text" placeholder="Message*"></TextInput>
                    <div className="divButtons">
                        <EmailContactButton type="button">Contact e-mail</EmailContactButton>
                        <WhatsappContactButton type="button">Contact Whatsapp</WhatsappContactButton>
                    </div>
                </DivForm>
            </DivContact>
        </Container>
    )
}

export default Form;