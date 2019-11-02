import React from "react";
import { connect } from "react-redux";
import * as UI from "../actions/UI";

const ButtonFunc = ({ Buttons, update }) => {
  const buttons = Buttons.lowerIDs.map(button => {
    if (Buttons.byID[button] === undefined) {
      return <button key={button} className="blankButton"></button>;
    }
    return (
      <button
        className="button"
        key={button}
        onClick={() => update(Buttons.byID[button])}
      >
        {Buttons.byID[button].label}
      </button>
    );
  });
  return (
    <div className="gridContainer">
      <div className="lowerGrid">{buttons}</div>
    </div>
  );
};

const mapStateToButtonProps = function(state) {
  return {
    Buttons: state.Buttons
  };
};

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({ newOutput, runFunc }) => {
      let { newButtons, newStats } = runFunc();
      if (newStats !== undefined) {
        dispatch(UI.statChange(newStats));
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
