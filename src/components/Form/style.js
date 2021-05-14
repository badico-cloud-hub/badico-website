import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 30px;
    padding-bottom: 70px;
`
export const TitleContact = styled.div`
    font: normal normal medium 20px/24px Roboto;
    color: #0E273B;
    width: 86px;
    height: 24px;
    margin-bottom: 10px;
`
export const TextContact = styled.div`
    font: normal normal normal 16px/24px Roboto;
    color: #0E273B;
    width: 286px;
    height: 45px;
    margin-bottom: 10px;
`

export const DivForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const NameInput = styled.input`
    width: 286px;
    height: 33px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 3px;
    opacity: 1;
`

export const EmailInput = styled.input`
    width: 286px;
    height: 33px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 3px;
    opacity: 1;
`

export const TextInput = styled.textarea`
    width: 286px;
    height: 69px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 10px;
`

export const EmailContactButton = styled.button`
    width: 136px;
    height: 35px;
    border: 1px solid #172B4D;
    border-radius: 38px;
    color: #0E273B;
    font: normal normal normal 14px/17px Roboto;
    margin-right: 150px;
`

export const WhatsappContactButton = styled.button`
    width: 136px;
    height: 35px;
    border: 1px solid #172B4D;
    border-radius: 38px;
    color: #0E273B;
    margin-left: 150px;
    font: normal normal normal 14px/17px Roboto;
    margin-top: -34.5px;
`