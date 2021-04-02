import styled from "styled-components"

export const LayoutWrapper = styled.div`
  width: 100%;

  .bgWave {
    position: absolute;
    width: 100%;
    height: 3000px;

    margin-top: -335%;
    z-index: -1;
  }

  @media (min-width: 361px) and (max-width: 480px) {
    .bgWave {
      margin-top: -290%;
    }
  }
  @media (min-width: 480px) {
    .bgWave {
      margin-top: -235%;
    }
  }
  @media (min-width: 500px) {
    .bgWave {
      margin-top: -220%;
    }
  }
  @media (min-width: 600px) {
    .bgWave {
      margin-top: -200%;
    }
  }
  @media (min-width: 768px) {
    .bgWave {
      margin-top: -150%;
    }
  }
  @media (min-width: 1024px) {
    .bgWave {
      margin-top: -140%;
    }
  }
  @media (min-width: 1300px) {
    .bgWave {
      margin-top: -120%;
    }
  }
  @media (min-width: 1600px) {
    .bgWave {
      margin-top: -105%;
    }
  }
  @media (min-width: 1920px) {
    .bgWave {
      margin-top: -95%;
    }
  }
  @media (min-width: 2300px) {
    .bgWave {
      margin-top: -85%;
    }
  }

  font-family: Roboto;
`
