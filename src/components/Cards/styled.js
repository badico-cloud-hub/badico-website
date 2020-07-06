import styled from "styled-components";

export const CardsWrapper = styled.article`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    position: relative;
    
    div:nth-child(1), div:nth-child(3){
        margin-right: 2rem;
    }

    div:nth-child(3), div:nth-child(4){
        margin-top: 1.5rem;
    }
    div:nth-child(1):after {
        content: "";
        border: solid 5px #dbf5e7;
        border-radius: 14px;
        color: transparent;
        z-index: -1;
        display: inline-block;
        width: 120px;
        height: 120px;
        position: absolute;
        top: 4px;
        left: -6px;
    }
    div:nth-child(2):after {
        content: "";
        border: solid 5px #dbf5e7;
        border-radius: 14px;
        color: transparent;
        z-index: -1;
        display: inline-block;
        width: 121px;
        height: 119px;
        position: absolute;
        top: 4px;
        left: 147px;
      }

      div:nth-child(3):after {
        content: "";
        border: solid 5px #dbf5e7;
        border-radius: 14px;
        color: transparent;
        z-index: -1;
        display: inline-block;
        width: 120px;
        height: 120px;
        position: absolute;
        top: 145px;
        left: -6px;
    }

    div:nth-child(4):after {
        content: "";
        border: solid 5px #dbf5e7;
        border-radius: 14px;
        color: transparent;
        z-index: -1;
        display: inline-block;
        width: 122px;
        height: 121px;
        position: absolute;
        top: 145px;
        left: 147px;
    }

    
    
`