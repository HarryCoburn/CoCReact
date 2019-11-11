import React from "react";
import { connect } from "react-redux";

export const TimeDisplayFunc = props => {
  const renderTime = minute => {
    if (minute < 10) {
      return "0" + minute;
    } else {
      return minute;
    }
  };

  return (
    <div className="timeDisplay">
      <p>
        Day#: {props.time.day}
        <br />
        Time: {props.time.hour}:{renderTime(props.time.minute)}
      </p>
    </div>
  );
};

const mapStateToTimeProps = function(state) {
  return {
    time: state.time
  };
};

const TimeDisplay = connect(mapStateToTimeProps)(TimeDisplayFunc);

export default TimeDisplay;
