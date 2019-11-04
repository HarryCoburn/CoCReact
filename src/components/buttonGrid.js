import React from "react";
import { connect } from "react-redux";
import WrappedButton from "./buttonWrap.js";
import * as UI from "../actions/UI";
import * as Core from "../actions/Core";

class ButtonGridClass extends React.Component {
  buttons = () =>
    this.props.IDs.map(button => {
      if (this.props.Buttons.byID[button] === undefined) {
        return (
          <button key={button} id={button} className="blankButton"></button>
        );
      }

      let newBtn = this.props.Buttons.byID[button];

      return (
        <WrappedButton
          key={button}
          id={button}
          toolTipPos={this.props.toolTipPos}
          label={newBtn.label}
          onClick={() => this.props.update(newBtn)}
        />
      );
    });

  render() {
    return <>{this.buttons()}</>;
  }
}

const mapStateToButtonProps = function(state) {
  return {
    Buttons: state.Buttons
  };
};

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({ nextScene = null }) => {
      if (nextScene !== null) {
        let newScene = Core.fetchScene(nextScene); // Middleware to get the changes?
        let {
          newButtons = {},
          newStats = {},
          newMenuArr = [],
          actions = null
        } = newScene.stateUpdates;
        let processedOutput = newScene.output;
        if (actions !== null) {
          console.log("Found actions");
          actions.forEach(action => {
            dispatch(UI.actionSelect(action));
          });
        }
        dispatch(UI.buttonChange(newButtons)); // Undefined means clear lower menu completely
        dispatch(UI.menuChange(newMenuArr)); // Undefined will just return state
        dispatch(UI.statChange(newStats));
        dispatch(UI.updateView(processedOutput));
      }
    }
  };
};

const ButtonGrid = connect(
  mapStateToButtonProps,
  mapDispatchToButtonProps
)(ButtonGridClass);

export default ButtonGrid;
