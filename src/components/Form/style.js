import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 92px;

    @media(min-width: 768px){
        margin-bottom: 144px;
    }

    @media(min-width: 1366px){
        flex-direction: row;
        height: 642px;
    }

    @media(min-width: 1920px){
        flex-direction: row;
        height: 577px;
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

    @media(min-width: 1920px){
        svg{
            width: 459px;
            height: 469px;
        }
    }
`
export const DivContact = styled.div`
    width: 286px;
    height: 297px;

    @media(min-width: 768px){
        width: 598px;
        height: 599px;
    }
    @media(min-width: 1366px){
        align-items: center;
        width: 50%;
        height: 100%;
    }
`

export const TitleContact = styled.div`
    background: white;
    display: flex;
    color: #0E273B;
    width: 86px;
    height: 24px;
    margin: 0 auto 8px auto;
    font-weight: bold;
    justify-content: center;
    p{
        margin: 0;
        font-size: 20px;
    }

    @media (min-width: 768px){
        width: 103px;
        height: 29px;
        margin: 0 auto 22px auto;
        p{
            font-size: 24px;
        }
    }

    @media (min-width: 1366px){
        width: 197px;
        height: 33px;
        font-weight: bold;
        margin: 0 0 16px 0;
        justify-content: flex-start;
        p{
            font-size: 24px;
        }
    }

    @media (min-width: 1920px){
        width: 197px;
        height: 36px;
        margin: 0 0 31px 0;
        align-items: center;
        p{
            font-size: 34px;
        }
    }
    
`
export const TextContact = styled.div`
    font: normal normal normal 16px/24px Roboto;
    color: #0E273B;
    width: 286px;
    height: 45px;
    margin-bottom: 16px;
    overflow: hidden;
    p{
        margin: 0;
        font-size: 16px;
    }

    @media (min-width: 768px){
        width: 598px;
        height: 79px;
        margin-bottom: 49px;
    }

    @media (min-width: 1366px){
        width: 588px;
        height: 51px;
        margin-bottom: 32px;
        p{
            margin: 0;
            font-size: 20px;
        }
    }

    @media (min-width: 1920px){
        width: 767px;
        height: 26px;
        margin-bottom: 61px;
    }
`

export const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    
    .divButtons{
        display: flex;
        justify-content: space-between;

        @media(min-width: 768px){
            justify-content: space-around;
        }

        @media(min-width: 1366px){
            justify-content: flex-start;
        }
    }

    @media(min-width: 1366px){
        width: 588px;
    }

    @media(min-width: 1920px){
        width: 852px;
        .divInputs{
            flex-direction: row;
            margin-bottom: 33px;
        }
    }
    
`

export const NameInput = styled.input`
    width: 286px;
    height: 33px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 8px;
    ::-webkit-input-placeholder {
        width: 43px;
        height: 17px;
        font-size: 14px;
        padding: 8px 0 8px 9px;
        color: #CACCCF;
    }

    @media (min-width: 768px){
        width: 598px;
        height: 69px;
        margin-bottom: 17px;
        ::-webkit-input-placeholder {
            width: 87px;
            height: 34px;
            font-size: 28px;
            padding: 16px 0 18px 19px;
            color: #CACCCF;
        }
    }

    @media (min-width: 1366px){
        width: 588px;
        height: 72px;
        margin-bottom: 24px;
        ::-webkit-input-placeholder {
            width: 62px;
            height: 24px;
            font-size: 20px;
            padding: 24px 0 24px 17px;
            color: #CACCCF;
        }
    }

    @media (min-width: 1920px){
        width: 413px;
        height: 73px;
        margin: 0 24px 0 0;
        ::-webkit-input-placeholder {
            width: 62px;
            height: 24px;
            font-size: 20px;
            padding: 25px 0 24px 16px;
            color: #CACCCF;
        }
    }
`

export const EmailInput = styled.input`
    width: 286px;
    height: 33px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 8px;
    ::-webkit-input-placeholder {
        width: 43px;
        height: 17px;
        font-size: 14px;
        padding: 8px 0 8px 9px;
        color: #CACCCF;
    }

    @media (min-width: 768px){
        width: 598px;
        height: 69px;
        margin-bottom: 17px;
        ::-webkit-input-placeholder {
            width: 92px;
            height: 35px;
            font-size: 29px;
            padding: 16px 0 18px 19px;
            color: #CACCCF;
        }
    }

    @media (min-width: 1366px){
        width: 588px;
        height: 72px;
        margin-bottom: 24px;
        ::-webkit-input-placeholder {
            width: 62px;
            height: 24px;
            font-size: 20px;
            padding: 24px 0 24px 17px;
            color: #CACCCF;
        }
    }

    @media (min-width: 1920px){
        width: 415px;
        height: 73px;
        margin: 0;
        ::-webkit-input-placeholder {
            width: 62px;
            height: 24px;
            font-size: 20px;
            padding: 25px 0 24px 16px;
            color: #CACCCF;
        }
    }
`

export const TextInput = styled.textarea`
    width: 286px;
    height: 69px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8E8E8;
    border-radius: 2px;
    margin-bottom: 19px;
    ::-webkit-input-placeholder {
        width: 63px;
        height: 17px;
        font-size: 14px;
        padding: 8px 0 8px 9px;
        color: #CACCCF;
    }

    @media (min-width: 768px){
        width: 598px;
        height: 144px;
        margin-bottom: 49px;
        ::-webkit-input-placeholder {
            width: 127px;
            height: 34px;
            font-size: 28px;
            padding: 16px 0 18px 19px;
            color: #CACCCF;
        }
    }

    @media (min-width: 1366px){
        width: 588px;
        height: 229px;
        margin-bottom: 40px;
        ::-webkit-input-placeholder {
            width: 91px;
            height: 24px;
            font-size: 20px;
            padding: 24px 0 24px 17px;
            color: #CACCCF;
        }
    }

    @media (min-width: 1920px){
        width: 852px;
        height: 229px;
        ::-webkit-input-placeholder {
            width: 91px;
            height: 24px;
            font-size: 20px;
            padding: 25px 0 24px 16px;
            color: #CACCCF;
        }
    }
`

export const EmailContactButton = styled.button`
    width: 136px;
    height: 35px;
    border: 1px solid #172B4D;
    border-radius: 38px;
    color: #0E273B;
    font: normal normal normal 14px/17px Roboto;
    background: white;

    @media (min-width: 768px){
        width: 253px;
        height: 57px;
        font-weight: bold;
    }

    @media (min-width: 1366px){
        width: 188px;
        height: 48px;
        margin-right: 19px;
    }
`

export const WhatsappContactButton = styled.button`
    width: 136px;
    height: 35px;
    border: 1px solid #172B4D;
    border-radius: 38px;
    color: #0E273B;
    font: normal normal normal 14px/17px Roboto;
    background: white;

    @media (min-width: 768px){
        width: 253px;
        height: 57px;
        font-weight: bold;
    }

    @media (min-width: 1366px){
        width: 188px;
        height: 48px;
    }
`