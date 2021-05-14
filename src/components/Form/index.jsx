import React from "react"
import {Container, TitleContact, TextContact, DivForm, NameInput, EmailInput, TextInput, EmailContactButton, WhatsappContactButton} from "./style"

const Form = () => {
    return (
        <Container>
            <TitleContact>
                <p>Talk to us</p>
            </TitleContact>
            <TextContact>
                <p>Lorem ipsum dolor sit amet, consectetur pretium </p>
            </TextContact>
            <DivForm>
                <NameInput type="text" placeholder="Name*"></NameInput>
                <EmailInput type="email" placeholder="Email*"></EmailInput>
                <TextInput type="text" placeholder="Message*"></TextInput>
                <EmailContactButton type="button">Contact e-mail</EmailContactButton>
                <WhatsappContactButton type="button">Contact Whatsapp</WhatsappContactButton>
            </DivForm>
        </Container>
    )
}

export default Form;