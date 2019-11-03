import React from "react";
import { connect } from "react-redux";

const NewLines = text =>
  text.split("\n").map((item, i) => {
    return <p key={i}>{item}</p>;
  });

const OutputFunc = ({ output }) => <div id="maintext">{NewLines(output)}</div>;

const mapStateToViewProps = function(state) {
  return {
    output: state.output
  };
};

const Output = connect(mapStateToViewProps)(OutputFunc);

export default Output;
