import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #0E273B;
    margin: 20px;
  }

  .react-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    width: 800px;
    margin: 0px;
  }

  .react-tabs__tab-list {
    width: 410px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 0px;
  }

  .large-svg {
    width: 90px;
    height: 90px;
  }
  .medium-svg {
    width: 70px;
    height: 70px;
  }
  .small-svg {
    width: 35px;
    height: 35px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5px;

    width: 130px;
    height: 100px;
    background-color: #f8f8fb;
  }
  .logo-f {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5px;

    width: 130px;
    height: 100px;
    background-color: #f8f8fb;
  }

  .img-logo-f {
    width: 40px;
    height: 40px;
  }

  .img-logo {
    width: 50px;
    height: 50px;
  }

  .react-tabs__tab-list {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0px;
  }

  li {
    border: none;
    box-shadow: none;
    border-color: transparent;
  }
  li:focus {
    box-shadow: none;
  }

  hr {
    position: absolute;
    width: ${props => {
      if (props.positionbar < 3) {
        return "85px"
      } else {
        return "120px"
      }
    }};

    left: ${props => {
      if (props.positionbar === 0) return "0px"
      if (props.positionbar === 1) return "85px"
      if (props.positionbar === 2) return "180px"
      if (props.positionbar === 3) return "280px"
    }};

    margin-top: 2px;
    margin-bottom: 6px;
    border: 2px solid #29ded5;
    position: absolute;
    top: 30px;

    transition: all 1s ease-in-out;
    margin-top: 2px;
    margin-bottom: 6px;
    border: 2px solid #29ded5;
  }

  .react-tabs__tab--selected {
    color: #29ded5;

    /* border-bottom: 4px solid #29ded5;
    border-radius: 2px; */
    transition: all 0.4s ease-in-out;
  }

  .react-tabs__tab-panel {
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 1s ease-in-out;

    opacity: 0;

    flex-wrap: wrap;
  }

  .react-tabs__tab-panel--selected {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    .react-tabs {
      width: 700px;
    }

    .large-svg {
      width: 90px;
      height: 90px;
    }
    .medium-svg {
      width: 70px;
      height: 70px;
    }

    .small-svg {
      width: 30px;
      height: 30px;
    }

    hr {
      position: absolute;
      width: ${props => {
        if (props.positionbar < 3) {
          return "85px"
        } else {
          return "120px"
        }
      }};

      position: absolute;
      top: 30px;

      transition: all 1s ease-in-out;
      margin-top: 2px;
      margin-bottom: 6px;
      border: 2px solid #29ded5;
    }
  }
  @media (max-width: 768px) {
    .react-tabs {
      width: 600px;
    }
  }

  @media (max-width: 480px) {
    .react-tabs {
      width: 400px;
    }

    .react-tabs__tab-list {
      width: 300px;
      flex-wrap: wrap;
    }

    hr {
      width: ${props => {
        if (props.positionbar < 3) {
          return "85px"
        } else {
          return "120px"
        }
      }};

      top: ${props => {
        if (props.positionbar === 3) return "65px"
      }};

      left: ${props => {
        if (props.positionbar === 0) return "12px"
        if (props.positionbar === 1) return "99px"
        if (props.positionbar === 2) return "190px"
        if (props.positionbar === 3) return "90px"
      }};

      margin-top: 2px;
      margin-bottom: 6px;
      border: 2px solid #29ded5;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 5px;

      width: 80px;
      background-color: #f8f8fb;
    }

    .img-logo {
      width: 40px;
    }

    .logo-f {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 5px;

      width: 80px;
      /* height: 100px; */
      background-color: #f8f8fb;
    }

    .img-logo-f {
      width: 40px;
    }

    .large-svg {
      width: 60px;
      height: 90px;
    }
    .medium-svg {
      width: 60px;
      height: 70px;
    }
    .small-svg {
    width: 30px;
    height: 30px;
  }
  }
  @media (max-width: 380px) {
    .react-tabs {
      width: 330px;
    }
  }
`
