import React from "react";
import { connect } from "react-redux";
import * as UI from "../actions/UI";

const ButtonFunc = ({ lowerButtons, update }) => {
  const buttons = lowerButtons.allIDs.map(button => {
    if (lowerButtons.byID[button] === undefined) {
      return <button key={button} className="blankButton"></button>;
    }
    return (
      <button
        className="button"
        key={button}
        onClick={() => update(lowerButtons.byID[button])}
      >
        {lowerButtons.byID[button].label}
      </button>
    );
  });
  return <div className="lowerGrid">{buttons}</div>;
};

const mapStateToButtonProps = function(state) {
  return {
    lowerButtons: state.lowerButtons
  };
};

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({ newOutput, runFunc }) => {
      let { newButtons, newStats } = runFunc();
      if (newStats !== undefined) {
        newStats.forEach(stat => dispatch(UI.statChange(stat)));
      }
      if (newButtons !== undefined) {
        dispatch(UI.buttonChange(newButtons));
      }
      dispatch(UI.updateView(newOutput));
    }
  };
};

const LowerButtons = connect(
  mapStateToButtonProps,
  mapDispatchToButtonProps
)(ButtonFunc);

export default LowerButtons;
