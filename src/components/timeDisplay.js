import React from "react";
import { connect } from "react-redux";

export const TimeDisplayFunc = props => {
  return (
    <div className="timeDisplay">
      <p>
        Day#: {props.time.day}
        <br />
        Time: {props.time.hour}:{props.time.minute}
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
