import React from "react";
import { connect } from "react-redux";
import * as UI from "../actions/UI";

const ButtonFunc = ({ currButtons, update }) => {
  const buttons = currButtons.map((button, index) => {
    return (
      <button className="button" key={index} onClick={() => update(button)}>
        {button.label}
      </button>
    );
  });
  return <div className="lowerGrid">{buttons}</div>;
};

const mapStateToButtonProps = function(state) {
  return {
    currButtons: state.currButtons
  };
};

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({ newOutput, runFunc }) => {
      let { newButtons, newStats } = runFunc();
      if (newStats !== undefined) {
        newStats.forEach(stat => dispatch(UI.statChange(stat)));
      }
      dispatch(UI.updateView(newOutput));
      dispatch(UI.buttonChange(newButtons));
    }
  };
};

const LowerButtons = connect(
  mapStateToButtonProps,
  mapDispatchToButtonProps
)(ButtonFunc);

export default LowerButtons;
