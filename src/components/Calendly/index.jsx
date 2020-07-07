import React, { Component } from "react";
import { PopupText } from "react-calendly";


class Calendly extends Component {
  componentDidMount() {
    // whatever stuff you need here
  }
  componentWillUnmount() {
    // whatever cleanup stuff you need here
  }
  render() {
    return (
      <PopupText
        className="popup"
        url="https://calendly.com/badico"
        text="Schedule A Call"
        />
    )
  }
}

export default Calendly
