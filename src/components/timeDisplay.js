import React from "react";
import { connect } from "react-redux";

export const TimeDisplayFunc = ({ day, hour, minute }) => {
  return (
    <div className="timeDisplay">
      <p>
        Day#: {day}
        <br />
        Time: {hour}:{minute}
      </p>
    </div>
  );
};

const mapStateToTimeProps = function(state) {
  return {
    day: state.day,
    hour: state.hour,
    minute: state.minute
  };
};

const TimeDisplay = connect(mapStateToTimeProps)(TimeDisplayFunc);

export default TimeDisplay;
