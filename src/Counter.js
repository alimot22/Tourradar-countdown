import React from 'react';
import language from './Lang.json';

function Counter(props) {
    var date_now = props.date; //Get now date from APP.js state
    var date_future = new Date(2018,11,23); //Black Friday Date
    var seconds = Math.floor((date_future - (date_now))/1000); //Calc seconds diff between now to black friday
    var minutes = Math.floor(seconds/60); //Calc minutes diff between now until black friday
    var hours = Math.floor(minutes/60); //Calc hours diff between now until black friday
    var days = Math.floor(hours/24);  //Calc days diff between now until black friday
    hours = hours-(days*24);  //Calc hours based on remain days * 24(hours count of each day)
    minutes = minutes-(days*24*60)-(hours*60); //Calc minutes based on remain days and hours
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60); //Calc seconds based on remain days and hours and minutes

    // switch case for returning each element of countdown
    switch (props.show) {
      case "day":
          return (
            <div className="timer">
              {days}
              <label>{language.Days[props.lang]}</label>
            </div>
          )
        break;
        case "hours":
            return (
              <div className="timer">
                {hours}
                <label>{language.Hours[props.lang]}</label>
              </div>
            )
          break;
          case "minutes":
              return (
                <div className="timer">
                  {minutes}
                  <label>{language.Minutes[props.lang]}</label>
                </div>
              )
            break;
        case "seconds":
            return (
              <div className="timer">
                {seconds}
                <label>{language.Seconds[props.lang]}</label>
              </div>
            )
          break;
      default:

    }


}

export default Counter
