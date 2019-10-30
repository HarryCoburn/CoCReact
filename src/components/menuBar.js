import React from "react";
import { connect } from "react-redux";
import * as UI from "../actions/UI";

const TopMenuFunc = ({ Buttons, update }) => {
  const buttons = Buttons.upperIDs.map(button => {
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
  return <div className="menuBar">{buttons}</div>;
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

const TopMenu = connect(
  mapStateToButtonProps,
  mapDispatchToButtonProps
)(TopMenuFunc);

export default TopMenu;
