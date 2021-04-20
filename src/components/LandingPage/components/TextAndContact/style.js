import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  position: relative;
  overflow-x: hidden;

  .waveleft {
    display: none;
  }

  .waveright {
    position: absolute;
    top: -130px;
    right: -180px;
    left: 60px;
  }

  @media (min-width: 425px) {
    .waveright {
      top: -160px;
      right: -250px;
      left: 70px;
    }
  }

  @media (min-width: 768px) {
    .waveleft {
      position: absolute;
      display: flex;
      top: -500px;
      right: 0px;
      left: -300px;
      width: 100%;
      height: 100%;
    }

    .waveright {
      top: -160px;
      right: -260px;
      left: 380px;
    }
  }

  @media (min-width: 1024px) {
    .waveleft {
      top: -470px;
      right: 0px;
      left: -450px;
    }

    .waveright {
      top: -160px;
      right: -360px;
      left: 580px;
    }
  }

  @media (min-width: 1366px) {
    flex-direction: row;

    .waveleft {
      top: -310px;
      right: 0px;
      left: -600px;
    }

    .waveright {
      top: -350px;
      right: -760px;
      left: 760px;
    }
  }

  @media (min-width: 1920px) {
    flex-direction: row;

    .waveleft {
      top: -600px;
      right: 0px;
      left: -850px;
    }

    .waveright {
      top: -320px;
      right: -450px;
      left: 1070px;
    }
  }
`
