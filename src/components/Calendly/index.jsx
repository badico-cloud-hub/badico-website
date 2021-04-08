import React, { Component } from "react"
import { PopupText } from "react-calendly"
import Calendar from "../../images/calendar.svg"

class Calendly extends Component {
  
  render() {
    return (
      <div>
        <PopupText
        className="popup"
        url="https://calendly.com/badico"
        text={this.props.text}/>
        <div className="iconCalendar">
          <Calendar />
        </div>
      </div>
    )
  }
}

export default Calendly
