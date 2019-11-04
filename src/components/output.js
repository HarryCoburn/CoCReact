import React from "react";
import { connect } from "react-redux";

const OutputFunc = ({ output }) => <div id="maintext">{output}</div>;

const mapStateToViewProps = function(state) {
  return {
    output: state.output
  };
};

const Output = connect(mapStateToViewProps)(OutputFunc);

export default Output;
