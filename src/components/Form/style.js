import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 70px;

    @media(min-width: 1366px){
        flex-direction: row;
        height: 642px;
    }

`

export const DivTelemarketing = styled.div`
    display: none;
    
    @media(min-width: 1366px){
        width: 50%;
        height: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
        
        svg{
            width: 386px;
            height: 394px;
        }
    }
`
export const DivContact = styled.div`
    @media(min-width: 1366px){
        align-items: center;
        width: 50%;
    }
`

export const TitleContact = styled.div`
    font: normal normal medium 20px/24px Roboto;
    background: white;
    color: #0E273B;
    width: 86px;
    height: 24px;
    margin-bottom: 10px;
    font-weight: bold;

    @media (min-width: 768px){
        width: 103px;
        height: 29px;
        font: normal normal normal 24px/29px Roboto;
    }

    @media (min-width: 1366px){
        width: 197px;
        height: 33px;
        font: normal normal normal 24px/29px Roboto;
        font-weight: bold;
    }

    @media (min-width: 1920px){
        width: 197px;
        height: 36px;
        font: normal normal normal 34px/41px Roboto;
    }
    
`
export const TextContact = styled.div`
    font: normal normal normal 16px/24px Roboto;
    color: #0E273B;
    width: 286px;
    height: 45px;
    margin-bottom: 8px;

    @media (min-width: 768px){
        width: 598px;
        height: 79px;
    }

    @media (min-width: 1366px){
        width: 588px;
        height: 51px;
        font: normal normal normal 20px/24px Roboto;
    }

    @media (min-width: 1920px){
        width: 767px;
        height: 26px;
    }
`

export const DivForm = styled.form`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px){
        margin-top:-20px;
    }

    @media (min-width: 1366px){
        margin-top:30px;
    }

    
`

export const NameInput = styled.input`
    width: 286px;
    height: 33px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 3px;

    @media (min-width: 768px){
        width: 598px;
        height: 69px;
    }

    @media (min-width: 1366px){
        width: 588px;
        height: 72px;
    }

    @media (min-width: 1920px){
        width: 413px;
        height: 73px;
        margin-rigth:auto;
    }
`

export const EmailInput = styled.input`
    width: 286px;
    height: 33px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 3px;

    @media (min-width: 768px){
        width: 598px;
        height: 69px;
    }

    @media (min-width: 1366px){
        width: 588px;
        height: 72px;
    }

    @media (min-width: 1920px){
        width: 415px;
        height: 73px;
        margin-left:auto;
        margin-top: -70px;
    }
`

export const TextInput = styled.textarea`
    width: 286px;
    height: 69px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 10px;

    @media (min-width: 768px){
        width: 598px;
        height: 144px;
    }

    @media (min-width: 1366px){
        width: 588px;
        height: 229px;
    }

    @media (min-width: 1920px){
        width: 852px;
        height: 229px;
    }
`

export const EmailContactButton = styled.button`
    width: 136px;
    height: 35px;
    border: 1px solid #172B4D;
    border-radius: 38px;
    color: #0E273B;
    font: normal normal normal 14px/17px Roboto;
    margin-right: 150px;
    background: white;

    @media (min-width: 768px){
        width: 253px;
        height: 57px;
        font-weight: bold;
        font: normal normal medium 20px/24px Roboto;
        margin-top:30px;
        margin-right:auto;
        margin-left: 20px;
    }

    @media (min-width: 1366px){
        width: 188px;
        height: 48px;
        font: normal normal medium 16px/24px Roboto;
        margin-right:auto;
    }
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
    background: white;

    @media (min-width: 768px){
        width: 253px;
        height: 57px;
        font-weight: bold;
        font: normal normal medium 20px/24px Roboto;
        margin-left:auto;
        margin-right: 20px;
        margin-top: -57px;
    }

    @media (min-width: 1366px){
        width: 188px;
        height: 48px;
        font: normal normal medium 16px/24px Roboto;
        margin-left:230px;
        margin-top:-48px
    }
`